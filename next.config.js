const path = require('path');
const loaderUtils = require('loader-utils');

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'base64',
      6,
    )
    .replace(/^(-?\d|--)/, '_$1');


module.exports = {
  experimental: { esmExternals: 'loose' },
  i18n: { locales: ['en-US'], defaultLocale: 'en-US' },
  optimizeFonts: false,
  poweredByHeader: false,
  reactStrictMode: true,

  webpack(config, { isServer }) {
    const oneOfRule = config.module.rules.find((rule) => typeof rule.oneOf === 'object');
    if (oneOfRule) {
      const rules = oneOfRule.oneOf.filter((rule) => Array.isArray(rule.use));

      rules.forEach((rule) => {
        if (Array.isArray(rule.use)) {
          rule.use.forEach((moduleLoader) => {
            if (moduleLoader.loader && moduleLoader.loader.includes('css-loader') && !moduleLoader.loader.includes('postcss-loader')) {
              if (moduleLoader.options && moduleLoader.options.modules) {
                moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
              }
            }
      
            if (moduleLoader.loader && moduleLoader.loader.includes('resolve-url-loader')) {
              if (moduleLoader.options) {
                moduleLoader.options.sourceMap = false;
              }
            }
          });
        }
      });
      
    }

    if (!isServer) {
      const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

      config.optimization.minimizer = config.optimization.minimizer.filter(
        ({ constructor: { name } }) => name !== 'CssMinimizerPlugin'
      );

      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: [{ preset: ['advanced', { discardUnused: false }] }, {}],
          minify: [CssMinimizerPlugin.cssnanoMinify, CssMinimizerPlugin.cssoMinify],
        })
      );
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },

  async redirects() {
    return [
      { source: '/discord', destination: 'https://discord.com/invite/ddaskT9kaM', permanent: true },
      { source: '/github', destination: 'https://github.com/ikcb', permanent: true },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/iiitkota_codebase',
        permanent: true,
      },
      { source: '/medium', destination: 'https://medium.com/iiitkota-codebase', permanent: true },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCvGMbMsVK9NyOcx2dQhxiZQ',
        permanent: true,
      },
    ];
  },
};
