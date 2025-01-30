import { SyntheticEvent } from 'react'
import './Contact.css'

type Prop = {
  showContacts: boolean
  closeContacts: () => void
}

const Contact = ({ showContacts, closeContacts }: Prop) => {
  const handleX = (ev: SyntheticEvent) => {
    ev.preventDefault()
    closeContacts()
  }

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()
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
          <div className='contact-header-wrapper'>
            <ul className='contacts'>
              <li>Dave Payumo</li>
              <li>09690413375</li>
              <li>burningblaze90@gmail.com</li>
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
                type='text'
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
            // onClick={handleSubmit}
          >
            Send
          </button>
          <input
            type='hidden'
            name='_template'
            value='table'
          ></input>
        </form>
      </div>
    </>
  )
}

export default Contact
