import './CTAButtons.css'

import { useHandleOpenContactsContext } from '../../hooks/contextAPI'

const CTAButtons = () => {
  const handleOpenContacts = useHandleOpenContactsContext()

  return (
    <>
      <button
        className='button contact-btn'
        onClick={handleOpenContacts}
      >
        Contact Me!
      </button>
      <a
        href='https://www.airbnb.com/rooms/675039170164703711?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Urban%20Deca%20Homes%20Ortigas%20Pasig%2C%20Ortigas%20Avenue%2C%20Pasig%2C%20Metro%20Manila%2C%20Philippines&pets=0&search_mode=regular_search&check_in=2025-02-03&check_out=2025-02-08&source_impression_id=p3_1738562222_P3zz67jQszxIDR1N&previous_page_section_name=1001&federated_search_id=e1cb46cf-87c8-4391-8c82-a542f5add2b9'
        target='_blank'
      >
        <button className='button airbnb-btn'>AirBNB&#8611;</button>
      </a>
    </>
  )
}

export default CTAButtons
