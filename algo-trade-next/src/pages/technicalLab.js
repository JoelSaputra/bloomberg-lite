import DetailedCompany from '@/components/DetailedCompany'
import React from 'react'

const technicalLab = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-row space-x-7">
      
        <div className='w-[100%] h-160 matte-metal-card border border-grey rounded-lg'>
          <DetailedCompany/>
        </div>

      </div>

      <div className="flex flex-row space-x-10">
      <div className='w-[50%] h-160 matte-metal-card border border-grey rounded-lg'></div>

      <div className='w-[50%] h-160 matte-metal-card border border-grey rounded-lg'>
        <p className="m-15 ml-20 mt-30 text-3xl text-emerald-400 tracking-widest font-extrabold">
        AI CHATBOT COMING SOON
      </p>
      </div>
      </div>
      
    </div>
  )
}

export default technicalLab