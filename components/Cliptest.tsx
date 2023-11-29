// Import necessary modules
import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckIcon } from '@radix-ui/react-icons';

// Define the interface for CopyClipboardProps
interface CopyClipboardProps {
  text: string;
}

// Define the CopyClipboard component
const Cliptest: React.FC<CopyClipboardProps> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); // Stop the click event propagation to prevent interference with Drawer's click handling
    try {
      // Attempt to write to clipboard
      await navigator.clipboard.writeText(text);
  
      // If successful, set copy success state
      setCopySuccess(true);
  
      // Reset success state after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      setCopySuccess(false);
    }
  };
  

  return (
    <button
      className={`p-2 rounded-md ${copySuccess ? 'bg-green-500' : 'bg-red-500'}`}
      onClick={handleCopyClick}
    >
      {copySuccess ? <CheckIcon /> : <ClipboardCopyIcon />}
    </button>
  );
};

// Export the CopyClipboard component
export default Cliptest;
