"use client"
import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckIcon } from '@radix-ui/react-icons';

interface ClipboardCopyProps {
  text: string;
}

const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <div className=" inline-flex items-center ">
      <button
        className={`p-2 hover:scale-110 duration-200 active:scale-95 rounded-md ${
          copySuccess ? 'bg-greken-500 border p-0 text-green-400 text-xl ' : 'bg-gray-200 dark:bg-gray-800'
        }`}
        onClick={copyToClipBoard}
      >
        {copySuccess ? <CheckIcon height={28} width={28} /> : <ClipboardCopyIcon/>}
      </button>
    </div>
  );
};

export default ClipboardCopy;
