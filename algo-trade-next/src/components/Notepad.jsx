import React from 'react'
import { useState, useEffect } from 'react'

const Notepad = () => {
  const [note, setNote] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('technicalLabNotes')
    if (saved) setNote(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('technicalLabNotes', note)
  }, [note])

  return (
    <textarea
      value={note}
      onChange={(e) => setNote(e.target.value)}
      placeholder="Jot down notes..."
      className="w-full h-full resize-none bg-transparent p-4 text-sm text-white placeholder:text-muted-foreground outline-none"
    />
  )
}

export default Notepad
