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

      <div className='w-[40%] h-160 matte-metal-card border border-grey rounded-lg'></div>
      
    </div>
  )
}

export default technicalLab