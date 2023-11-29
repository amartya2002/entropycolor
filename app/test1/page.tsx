"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Cliptest from '@/components/Cliptest'
import ClipboardCopy from '@/components/ClipboardCopy(old)'
import CopyClipboard from '@/components/CopyClipboard'


export default function page() {
  return (
    <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="bottom" className='h-[40%] rounded-2xl bg-zinc-800'>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
      </SheetDescription>
      
      

    </SheetHeader>
    <div>
      <p>Css - </p>
      <p>Css - </p>
      <p>Css - </p>
      <Cliptest text='hello'/>
      <ClipboardCopy text='hekssssssssklo'/>
      {/* <CopyClipboard text="alla"/> */}
      </div>
  </SheetContent>
</Sheet>

  )
}
