import React from 'react'
import { Link } from 'react-router-dom'
import afad from '../assets/afad2.png'

function Header() {
  return (
    <div>
      <ul className='p-5 flex flex-wrap gap-5 items-center justify-center border-y sm:flex-row sm:justify-evenly sm:p-5 bg-stone-100 font-bold text-cyan-900 text-md'>
       <li className='py-1 sm:p-0'><Link to="/">Anasayfa</Link></li>
       <li className='py-1 sm:p-0'>Son Depremler</li>
        <li className='py-1 sm:p-0'>Nedir?</li>
        <li className='py-1 sm:p-0'><Link to="https://www.afad.gov.tr"><img src={afad} className='w-28'></img></Link></li>
      </ul>
    </div>
  )
}

export default Header