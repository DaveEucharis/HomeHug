import './Features.css'
import {
  airconIcon,
  bedIcon,
  inductionIcon,
  sofaIcon,
  wifiIcon,
  diningImg,
  doubleDeckImg,
  sofaImg,
} from '../hooks/imageImport'
import { useRef } from 'react'

const Features = () => {
  const carousellRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section className='features-wrapper'>
        <header className='features-header'>
          <h1 className='features-h1'>Home Hug</h1>
        </header>

        <ul className='features'>
          <li>
            <img
              src={airconIcon}
              alt=''
            />
            <span>Air-Conditioned Comfort</span>
            <p>
              Enjoy a cool and comfortable living space with separate air
              conditioning units in both bedrooms.
            </p>
          </li>
          <li>
            <img
              src={bedIcon}
              alt=''
            />
            <span>Spacious Sleeping Arrangements</span>
            <p>
              Designed to accommodate up to six people, featuring a sturdy
              double-deck bed for four and a master bed for two.
            </p>
          </li>
          <li>
            <img
              src={inductionIcon}
              alt=''
            />
            <span>Fully Equipped Kitchen</span>
            <p>
              Cook your favorite meals with ease—comes with a cooking area,
              induction, and refrigerator for food storage.
            </p>
          </li>
          <li>
            <img
              src={sofaIcon}
              alt=''
            />
            <span>Fully Furnished Living Space</span>
            <p>
              Move in hassle-free! The condo is fully furnished, providing
              everything you need for a convenient and cozy stay.
            </p>
          </li>
          <li>
            <img
              src={wifiIcon}
              alt=''
            />
            <span>High-Speed Free WiFi</span>
            <p>
              Stay connected with ultra-fast internet speeds of up to 250 Mbps,
              perfect for work, streaming, and gaming.
            </p>
          </li>
        </ul>

        <div className='carousell-wrapper'>
          <div
            className='carousell'
            ref={carousellRef}
          >
            <img
              src={diningImg}
              alt=''
            />
            <img
              src={doubleDeckImg}
              alt=''
            />
            <img
              src={sofaImg}
              alt=''
            />
          </div>
        </div>

        <div className='location-wrapper'>
          <h1 className='location-h1'>Where to Find?</h1>
          <iframe
            className='google-location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.9661358289103!2d121.10038999292827!3d14.589470908082522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c771ae2ba40f%3A0xe1fa3a8c7e187df9!2sUrban%20Deca%20Homes%20Ortigas%20-%20Information%20Center!5e0!3m2!1sen!2sph!4v1738212739286!5m2!1sen!2sph'
            width='600'
            height='450'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
      
    </>
  )
}

export default Features
