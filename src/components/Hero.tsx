import { SyntheticEvent } from 'react'
import './Hero.css'

type Props = {
  handleContact: (ev: SyntheticEvent) => void
}

const Hero = ({ handleContact }: Props) => {
  return (
    <>
      <div className='hero'>
        <div className='text-wrapper'>
          <h1 className='hero-h1'>Looking for a place to stay?</h1>
          <h2 className='hero-h2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            inventore?
          </h2>
        </div>
        <button
          className='button contact-btn'
          onClick={handleContact}
        >
          Contact Me!
        </button>
      </div>
    </>
  )
}

export default Hero
