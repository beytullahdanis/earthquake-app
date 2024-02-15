import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-100 w-full h-full flex justify-start px-5 py-3'>
      <p className='font-bold'>Data Source:</p>
      <a href='https://deprem.afad.gov.tr/event-service'>&nbsp;AFAD API</a>
     </div>
  )
}

export default Footer