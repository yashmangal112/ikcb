import { useRef } from 'react';

import Modal, { ModalState } from '@components/Modal';

const Contact: React.FC = () => {
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);

  const handleResponse = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const form = event.target as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    modalRef.current!.setState(ModalState.LOADING);

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    if (res.status < 400) {
      modalRef.current!.setState(ModalState.SUCCESS);
      form.reset();
    } else if (res.status < 500) modalRef.current!.setState(ModalState.ERR_VAL);
    else if (res.status < 600) modalRef.current!.setState(ModalState.ERR_INT);
  };

  return (
    <>
      <form cx="form" id="contact-us" onSubmit={handleResponse}>
        <div cx="ctr__top">
          <h1 cx="title">Contact Us</h1>
          <p cx="desc">
            We are a welcoming community and love to have others working with us regardless of their
            skill levels. If you have a nice project idea and think that we all together can make it
            real and big then do contact us.
          </p>
        </div>
        <div cx="ctr__btm">
          <div cx="wrapper">
            <div cx="input__wrapper">
              <label cx="label" htmlFor="name">
                Name
              </label>
              <input autoComplete="name" cx="input" id="name" name="name" type="text" required />
            </div>
            <div cx="input__wrapper">
              <label cx="label" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="email"
                cx="input"
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div cx="textarea__wrapper">
              <label cx="label" htmlFor="message">
                Message
              </label>
              <textarea cx="textarea" id="message" minLength={100} name="message" required />
            </div>
            <button cx="btn" type="submit">
              Submit
            </button>
            <div cx="footer">
              <a cx="ikcb__email" href="mailto:contact@ikcb.org">
                contact@ikcb.org
              </a>
              <p cx="ikcb__address">
                Prabha Bhawan
                <br />
                MNIT Jaipur, RJ 302017
              </p>
            </div>
          </div>
        </div>
      </form>
      <Modal ref={modalRef} />
    </>
  );
};

export default Contact;
