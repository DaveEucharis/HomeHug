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

const Features = () => {
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
            <span>2 Aicons</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ea.
            </p>
          </li>
          <li>
            <img
              src={bedIcon}
              alt=''
            />
            <span>6 Beds</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ea.
            </p>
          </li>
          <li>
            <img
              src={inductionIcon}
              alt=''
            />
            <span>Induction Cooking</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ea.
            </p>
          </li>
          <li>
            <img
              src={sofaIcon}
              alt=''
            />
            <span>Fully Furnished</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ea.
            </p>
          </li>
          <li>
            <img
              src={wifiIcon}
              alt=''
            />
            <span>Free Wifi</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ea.
            </p>
          </li>
        </ul>

        {/* Carrosell */}
        <div className='carousell-wrapper'>
          <div className='carousell'>
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
      </section>
    </>
  )
}

export default Features
