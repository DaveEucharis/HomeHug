import { SyntheticEvent } from 'react'
import './Contact.css'

import { telephoneIcon, gmailIcon } from '../hooks/imageImport'

type Prop = {
  showContacts: boolean
  closeContacts: () => void
}

const Contact = ({ showContacts, closeContacts }: Prop) => {
  const handleX = (ev: SyntheticEvent) => {
    ev.preventDefault()
    closeContacts()
  }

  return (
    <>
      {showContacts ? <div className='blur-bg'></div> : null}
      <div
        className={showContacts ? 'contact-wrapper show' : 'contact-wrapper'}
      >
        <form
          action='https://formsubmit.co/4257275ff58d513fd8dbcb69365dcc99'
          autoComplete='off'
          method='POST'
        >
          <input
            type='hidden'
            name='_template'
            value='table'
          ></input>
          <div className='contact-header-wrapper'>
            <ul className='contacts'>
              <li className='name-text'>Elpidas Payumo</li>
              <li>
                <img
                  src={telephoneIcon}
                  alt=''
                />
                (+63) 926-605-2214
              </li>
              <li>
                <img
                  src={gmailIcon}
                  alt=''
                />
                etpayumo05@gmail.com
              </li>
            </ul>

            <button
              className='x-btn'
              onClick={handleX}
            >
              X
            </button>
          </div>

          <div className='name-email-wrapper'>
            <span className='input-wrapper'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                id='name'
                required
              />
            </span>

            <span className='input-wrapper'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                id='email'
                required
              />
            </span>
          </div>

          <span className='input-wrapper'>
            <label htmlFor='message'>Message</label>
            <textarea
              defaultValue={"I'm interested"}
              placeholder='Message'
              name='message'
              required
            />
          </span>

          <button
            className='button send-btn'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
