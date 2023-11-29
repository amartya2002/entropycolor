"use client"
import ClipboardCopy from '@/components/ClipboardCopy(old)';
import React, { useState } from 'react'

export default function page() {


    const [copySuccess, setCopySuccess] = useState(false);

    async function copyToClipBoard(copyMe: string): Promise<void> {
        try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
//     <button
//     onClick={() => copyToClipBoard('Hdello')}
//     className={`py-2 px-4 rounded ${copySuccess === true ? 'bg-green-500' : 'bg-blue-500'} text-white`}
//   >
//     {copySuccess === true ? (
//       <>
//         <span>✓</span> Copied
//       </>
//     ) : (
//       'Copy to Clipboard'
//     )}
//   </button>
<div>
{/* Other components */}
<ClipboardCopy text='jsof68igo' />
{/* Other components */}
</div>
  )
}
