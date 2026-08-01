import { useState } from 'react'
import Badges from './Components/Badges/Badges'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'

function App() {
    return (
        <>
        <div className='badge-container'>
         <Badges form="pill" color="green">Badge</Badges>
         <Badges color="blue">Badge</Badges>
         <Badges form="pill">Badge</Badges>
        </div>
        <Banner type="error" paragraph="Hola como estas espero que pienses un poquito en mi">hola</Banner>
        <Card>
            <h1>Hola</h1>
            <p>buenas tardelka clkdajclk jcladjckdalcjl adjcjdhkjhad jhakjdhkjasd hjkahd kjhajkdkhjjka</p>
        </Card>
        </>
    )
}

export default App
