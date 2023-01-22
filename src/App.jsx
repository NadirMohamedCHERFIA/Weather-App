import React from 'react'
import Top from './components/Top/Top'
import About from './components/About/About'
import Copyrights from './components/Copyrights/Copyrights'
import Contacts from './components/Contacts/Contacts'
const App = () => {
  const head = document.querySelector('.container__header')
  console.log(head)
  return (
    <div>
      <Top/>
      <About/>
      <Contacts/>
      <Copyrights/>
    </div>
  )
}

export default App