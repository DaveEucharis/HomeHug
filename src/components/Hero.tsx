import './Hero.css'
import CTAButtons from './CTA Buttons/CTAButtons'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='text-wrapper'>
          <h1 className='hero-h1'>Looking for a place to stay?</h1>
          <h2 className='hero-h2'>
            Discover modern and affordable condo living at Urban Deca Homes
            Ortigas, a prime residential community strategically located in
            Pasig City. Whether you're a young professional, a growing family,
            or an investor looking for a valuable property, this condo offers
            the perfect blend of convenience, comfort, and accessibility.
          </h2>
        </div>
        <CTAButtons />
      </div>
    </>
  )
}

export default Hero
