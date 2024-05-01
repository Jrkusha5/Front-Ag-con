import React from 'react'

const CommonHeading = ({title,description}) => {
  return (
    <div className='text-center bounceInUp'>
        <large className='d-inline-block text-dark text-uppercase bg-light
        border border-primary  px-4 py-1 mb-3' style={{fontSize:'25px',fontFamily:""}}>
            {title}
        </large>
        <p className='text-uppercase' style={{fontFamily:"", fontSize:'30px',color:'black'}}>{description}</p>
    </div>
  )
}

export default CommonHeading