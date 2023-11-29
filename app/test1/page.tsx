import CopyClipboard from '@/components/CopyClipboard'
import React from 'react'

export default function page() {
  return (
    <div className='p-2'>
      <CopyClipboard text='hello friend'/>
    </div>
  )
}
