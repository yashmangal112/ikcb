import Image from 'next/image';

const teamMembers = [
  { name: 'Achalesh Lakhotiya', github: 'achalesh27022003' },
  { name: 'Akash Tureha', github: 'MrMischievousX' },
  { name: 'Akshat Saxena', github: 'akshatsaxena1701' },
  { name: 'Ankur Agarwal', github: 'Ankur6702' },
  { name: 'Divyansh Singh', github: 'brc-dd' },
  { name: 'Himanshu Chittora', github: 'HimanshuChittora23908' },
  { name: 'Himanshu Verma', github: 'himanshu608' },
  { name: 'Kunal Verma', github: 'hereiskunalverma' },
  { name: 'Mradul Agarwal', github: 'mradul71' },
  { name: 'Nishant Mourya', github: 'iamthedawn' },
  { name: 'Nikunj Sharma', github: 'nouveau-riche' },
  { name: 'Omkar Deshmukh', github: 'H4ckOm' },
  { name: 'Pavnesh Chaturvedi', github: 'pc-beast' },
  { name: 'Raghhav D Turki', github: 'RaghhavDTurki' },
  { name: 'Rohan Routh', github: 'Broooohan' },
  { name: 'Saurabh Mehta', github: 'saurabhmehta1601' },
  { name: 'Saurabh Mina', github: 'hawkeye41' },
  { name: 'Shivam Kumar Singh', github: 'Er-Shivams' },
  { name: 'Shubham Kumar', github: 'Shubham123498765' },
  { name: 'Siddhant Jha', github: 'jhasiddhant' },
  { name: 'Tanmay Indwar', github: 'SinUponCos-May' },
  { name: 'Vaibhav Jain', github: 'vaibhav-jain18' },
  { name: 'Vatsal Adhiya', github: 'theVatsal3802' },
  { name: 'Vipin Tripathi', github: 'VIPIN-creator' },
];

const key = (name: string): string => name.toLowerCase().replace(/\s+/g, '-');

const MemberCard: React.FC<{ name: string; github: string }> = ({ name, github }) => (
  <a
    cx="member__link"
    href={`https://github.com/${github}`}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Image
      alt={name}
      cx="member"
      height="90"
      layout="fixed"
      quality="100"
      src={`/members/${key(name)}.jpg`}
      title={name}
      width="90"
    />
  </a>
);

const Team: React.FC = () => (
  <section cx="sect" id="our-team">
    <div cx="ctr">
      <div cx="wrapper">
        <h1 cx="title">Our Team</h1>
        <p cx="desc">
          Our projects are developed and maintained by these awesome folks (obviously with love).
        </p>
      </div>
      <div cx="members">
        {teamMembers
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((s) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <MemberCard {...s} key={key(s.name)} />
          ))}
      </div>
    </div>
  </section>
);

export default Team;
