"use client";
import React, { useState } from "react";
import { ClipboardCopyIcon, CheckIcon } from "@radix-ui/react-icons";
import useClippy from "use-clippy";

interface CopyClipboardProps {
  text: string;
}

const sampleText = 'lklklk';

const CopyClipboard: React.FC<CopyClipboardProps> = ({text}) => {
  const [clipboard, setClipboard] = useClippy();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    try {
      setClipboard(text);
      setCopySuccess(true);

      // Reset success state after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      setCopySuccess(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`rounded-md p-2 duration-200 hover:scale-110 active:scale-95 ${
          copySuccess
            ? "bg-gray-200 text-green-400  dark:bg-gray-800"
            : "bg-gray-200 dark:bg-gray-800"
        }`}
        onClick={handleCopyClick}
      >
        {copySuccess ? (
          <CheckIcon height={19} width={19} />
        ) : (
          <ClipboardCopyIcon height={19} width={19} />
        )}
      </button>
    </div>
  );
};
export default CopyClipboard;
