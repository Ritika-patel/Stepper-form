import React from 'react'

const Thanks = () => {
  return (
    <div className="mt-5 h-[450px] lg:h-auto">
    <h1 className='text-center'>Thank You</h1>
    <p className="mt-7 mb-[80px] text-gray-400 text-center">
      Your Data has been sucessfully Submitted
    </p>

    <div className='flex justify-center mx-auto my-auto'>
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>    </div>

  </div>
  )
}

export default Thanks