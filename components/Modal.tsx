import { forwardRef, Fragment, useImperativeHandle, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import Loader from '@components/Loader';

export enum ModalState {
  HIDDEN,
  LOADING,
  SUCCESS,
  ERR_VAL,
  ERR_INT,
}

const ghost: React.CSSProperties = {
  background: 'transparent',
  border: 0,
  clipPath: 'inset(50%)',
  clip: 'rect(0 0 0 0)',
  color: 'transparent',
  display: 'block',
  fontSize: 0,
  height: 0,
  left: '-9999px',
  lineHeight: 0,
  margin: 0,
  opacity: 0,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  textDecoration: 'none',
  textIndent: '-9999px',
  top: '-9999px',
  transform: 'scale(0)',
  whiteSpace: 'nowrap',
  width: 0,
  wordWrap: 'normal',
  zIndex: -9999,
};

const Text: React.FC<{ state: ModalState }> = ({ state }) => {
  if (state === ModalState.SUCCESS)
    return (
      <>
        <Dialog.Title as="h3" cx="title">
          Thank you for contacting us
        </Dialog.Title>
        <p cx="desc">
          Hi! We appreciate your taking the time to write to us. We have received your message.
          Someone from our team will get back to you shortly.
        </p>
      </>
    );

  if (state === ModalState.ERR_VAL)
    return (
      <>
        <Dialog.Title as="h3" cx="title">
          We need some more details
        </Dialog.Title>
        <p cx="desc">
          There appears to be a problem with provided response. Please check if you have filled all
          the information and your message is not too short.
        </p>
      </>
    );

  if (state === ModalState.ERR_INT)
    return (
      <>
        <Dialog.Title as="h3" cx="title">
          Sorry, something went wrong
        </Dialog.Title>
        <p cx="desc">
          Our server is currently unable to handle your request. Can you please try again after some
          time or maybe contact us via the provided email?
        </p>
      </>
    );

  return <></>;
};

const Modal: React.ForwardRefRenderFunction<{
  setState: React.Dispatch<React.SetStateAction<ModalState>>;
}> = (_, forwardedRef) => {
  const [state, setState] = useState(ModalState.HIDDEN);

  useImperativeHandle(forwardedRef, () => ({ setState }));

  const closeModal = (): void => {
    if (state !== ModalState.LOADING) setState(ModalState.HIDDEN);
  };

  return (
    <Transition as={Fragment} show={state !== ModalState.HIDDEN} appear>
      <Dialog as="div" cx="modal" onClose={closeModal}>
        <div cx="ctr">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay cx="overlay" />
          </Transition.Child>
          <span aria-hidden="true" cx="fake">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div cx="wrapper">
              {state === ModalState.LOADING ? <Loader /> : <Text {...{ state }} />}
              <button style={ghost} type="button" onClick={closeModal}>
                &#8203;
              </button>
              <button
                cx="btn"
                style={state === ModalState.LOADING ? ghost : {}}
                type="button"
                onClick={closeModal}
              >
                OK
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default forwardRef(Modal);
