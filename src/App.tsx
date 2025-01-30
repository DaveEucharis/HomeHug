import { SyntheticEvent, useEffect, useState } from 'react'
import './App.css'

import Hero from './components/Hero'
import Contact from './components/Contact'
import Features from './components/Features'

const App = () => {
  const [showContacts, setShowContacts] = useState(false)

  const handleContact = (ev: SyntheticEvent) => {
    setShowContacts(true)
  }

  const closeContacts = () => {
    setShowContacts(false)
  }

  useEffect(() => {
    if (showContacts) document.body.classList.add('disable-scroll')
    else document.body.classList.remove('disable-scroll')
  }, [showContacts])

  return (
    <>
      <Hero handleContact={handleContact} />

      <Contact
        showContacts={showContacts}
        closeContacts={closeContacts}
      />

      <Features />
    </>
  )
}

export default App
