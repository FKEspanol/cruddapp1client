import React from 'react'

const Footer = () => {
   return (
      <footer
         style={{
            width: '100%'
         }}
         className="bg-primary text-white position-absolute bottom-0 text-center p-3"
      >
         <div className='container'>
            <p className='mb-0'>Copyright&copy;{new Date().getFullYear()}</p>
         </div>
      </footer>
   )
}


export default Footer