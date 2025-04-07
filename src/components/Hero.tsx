import './Hero.css'
import homehugLogo from '../assets/homehug-logo.svg'

import CTAButtons from './CTA Buttons/CTAButtons'
import { MouseEvent } from 'react'

const Hero = () => {
  const handleReturnHero = (ev: MouseEvent<HTMLImageElement>) => {
    ev.preventDefault()
    const ele = ev.currentTarget
    if (!ele.style.animation) {
      window.scroll({ top: 0, behavior: 'smooth' })
      ele.style.animation = 'rotate 0.5s ease-in-out'
    }
  }

  return (
    <>
      <div className='hero'>
        <img
          className='homehug-logo'
          onClick={handleReturnHero}
          onAnimationEnd={ev => {
            ev.currentTarget.style.animation = ''
          }}
          src={homehugLogo}
          alt=''
        />

        <div className='text-wrapper'>
          <h1 className='hero-h1'>Looking for a place to stay?</h1>
          <h2 className='hero-h2'>
            Discover modern and affordable condo living at Urban Deca Homes
            Ortigas, a prime residential community strategically located in
            Pasig City.
          </h2>
        </div>
        <CTAButtons />
      </div>
    </>
  )
}

export default Hero
