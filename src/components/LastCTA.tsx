import { cartIcon, exerciseIcon, netflixIcon } from '../hooks/imageImport'
import CTAButtons from './CTA Buttons/CTAButtons'
import './LastCTA.css'

const LastCTA = () => {
  return (
    <>
      <section className='last-cta-wrapper'>
        <ul className='benefits-wrapper'>
          <li>
            <img
              src={cartIcon}
              alt=''
            />
            <span>Easy Access</span>
            <p>
              Want to go shopping? Our unit is just minutes away from SM East.
            </p>
          </li>

          <li>
            <img
              src={exerciseIcon}
              alt=''
            />
            <span>Stay Strong</span>
            <p>
              with the free gym park, train to be the strongest and fittest
              version of yourself.
            </p>
          </li>

          <li>
            <img
              src={netflixIcon}
              alt=''
            />
            <span>Watch All You Want</span>
            <p>
              Binge-watch your favorite movies and shows with complimentary
              Netflix access!
            </p>
          </li>
        </ul>

        <div className='cta-btn-wrapper'>
          <CTAButtons />
        </div>
      </section>
      <footer>All rights reserved.</footer>
    </>
  )
}

export default LastCTA
