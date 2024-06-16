import React from 'react'

function Home() {
  return (
    <div className='bg-gray-300 flex items-center justify-center w-full h-screen'>
    
      <div className='bg-white w-3/4 sm:w-1/2 h-[500px] sm:h-[400px] mx-auto flex items-center flex-col p-2 rounded-md shadow-black'>
      <h1 className='mt-0 font-bold text-xl mb-10'>Registration</h1>
      <form className='flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:mt-5'>

      <div className='flex flex-col '>
      <label for='first_name' className='grid grid-cols-subgrid col-span-2 text-sm font-bold'>First Name</label>
      <input type='text'  id='first_name' 
      className='border border-2 border-black rounded-sm outline-none focus:bg-gray-300
      hover:bg-gray-300 transition-all text-black p-2 sm:p-1' placeholder='First Name'/>
      </div>

        <div className='flex flex-col'>
        <label for='last_Name'  className='grid grid-cols-subgrid col-span-2 text-sm font-bold'>Last Name</label>
        <input type='text' id='last_Name' 
        className='border border-2 border-black rounded-sm outline-none focus:bg-gray-300
        hover:bg-gray-300 transition-all text-black p-2 sm:p-1' placeholder='Last Name'/>
        </div>
     

      <div className='flex flex-col'><label for='email' className='grid grid-cols-subgrid col-span-2 text-sm font-bold'>Email-Address</label>
      <input type='text'  id='email' 
      className='border border-2 border-black rounded-sm outline-none focus:bg-gray-300
      hover:bg-gray-300 transition-all text-black p-2 sm:p-1' placeholder='Email'/></div>
      

      <div  className='flex flex-col'> <label for='company' className='grid grid-cols-subgrid col-span-2 text-sm font-bold'>Company</label>
      <input type='text' id='company' 
      className='border border-2 border-black rounded-sm outline-none focus:bg-gray-300
      hover:bg-gray-300 transition-all text-black p-2 sm:p-1' placeholder='Company'/></div>
     

      <div className='flex flex-col'><label for='address' className='grid grid-cols-subgrid col-span-2 text-sm font-bold'>Address</label>
      <input type='text'  id='address' 
      className='border border-2 border-black rounded-sm outline-none focus:bg-gray-300
      hover:bg-gray-300 transition-all text-black p-2 sm:p-1' placeholder='Address'/></div>
      
        <div></div>
        <button className='bg-black text-white rounded-md p-1 sm:mt-10 text-center w-3/4
         mx-auto text-sm sm:grid sm:grid-cols-subgrid sm:col-span-2 sm:pl-[170px]'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Home