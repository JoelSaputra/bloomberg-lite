import DetailedCompany from '@/components/DetailedCompany'
import React from 'react'
import { useEffect, useState } from 'react'

const technicalLab = () => {
  const [notes, setNotes] = useState('')
  
  useEffect(() =>{
    setNotes(localStorage.getItem('history') || '')
  }, [])




  const handleSave = (e) => {

    const value = e.target.value
    setNotes(value)
    localStorage.setItem('history', value)
    

  }

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-row space-x-7">
      
        <div className='w-[100%] h-160 matte-metal-card border border-grey rounded-lg'>
          <DetailedCompany/>
        </div>

      </div>

      <div className="flex flex-row space-x-10">
      <div className='w-[50%] h-160 matte-metal-card border border-grey rounded-lg pl-10'>
          <h1 className="text-2xl text-muted-foreground tracking-widest font-extrabold mb-5 mt-5">NOTEPAD</h1>

         <textarea className="w-full h-full resize-none border-none outline-none" name="feedback" value={notes} onChange={handleSave} ></textarea>




      </div>

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