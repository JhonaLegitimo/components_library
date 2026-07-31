import { useState } from 'react'
import Badges from './Components/Badges/Badges'
import Banner from './Components/Banner/Banner'

function App() {
    return (
        <>
        <div className='badge-container'>
         <Badges form="pill" color="green">Badge</Badges>
         <Badges color="blue">Badge</Badges>
         <Badges form="pill">Badge</Badges>
        </div>
        <Banner type="error" paragraph="Hola como estas espero que pien putita">hola</Banner>
        </>
    )
}

export default App
