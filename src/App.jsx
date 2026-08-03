import { useState } from 'react'
import Badges from './Components/Badges/Badges'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Testimonitals from './Components/Testimonials/Testimonials'

function App() {
    return (
        <>
        {/* <div className='badge-container'>
         <Badges form="pill" color="green">Badge</Badges>
         <Badges color="blue">Badge</Badges>
         <Badges form="pill">Badge</Badges>
        </div>
        <Banner type="error" paragraph="Hola como estas espero que pienses un poquito en mi">hola</Banner>
        <Card>
            <h1>Hola</h1>
            <p>buenas tardelka clkdajclk jcladjckdalcjl adjcjdhkjhad jhakjdhkjasd hjkahd kjhajkdkhjjka</p>
        </Card> */}
        <Testimonitals author="Jhonatan Diaz" role="Frontend Developer">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed urna nulla vitae laoreet augue. Amet feugiat est integer 
           dolor auctor adipiscing nunc urna, sit. 
        </Testimonitals>
        </>
    )
}

export default App
