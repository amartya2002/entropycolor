import { useTheme } from 'next-themes';

type HeroIconProps = {
  width?:number;
  height?:number
};

export default function HeroIcon({width, height}: HeroIconProps) {
  const { theme } = useTheme();

  // Define the color based on the theme
  const outerCircle = theme === 'dark' ? 'rgb(251 146 60)' : 'rgb(59 130 246)';
  return(
  <div className="pt-24 md:pt-20 pb-8 max-w-7xl">
    <div className=" items-center flex justify-center animate-pulse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 154}
        height={height || 154}
        fill="none"
        className='animate-spin '

      >
        <circle cx={77} cy={77} r={77} fill={outerCircle || '#000'} />
        <circle
          cx={56.833}
          cy={58.828}
          r={13.52}
          fill="#fff"
          stroke="#fff"
          strokeWidth={2.532}
          transform="rotate(-45 56.833 58.828)"
        />
        <circle
          cx={95.665}
          cy={95.669}
          r={13.52}
          fill="#fff"
          stroke="#fff"
          strokeWidth={2.532}
          transform="rotate(-45 95.665 95.669)"
        />
        <circle
          cx={94.669}
          cy={58.828}
          r={13.52}
          fill="#fff"
          stroke="#fff"
          strokeWidth={2.532}
          transform="rotate(-45 94.669 58.828)"
        />
        <circle
          cx={57.828}
          cy={95.669}
          r={13.52}
          fill="#fff"
          stroke="#fff"
          strokeWidth={2.532}
          transform="rotate(-45 57.828 95.669)"
        />
        <path
          fill="#fff"
          d="M79.437 85.499c.57-.176.91-.74.806-1.357-.843-5.53-.348-6.488 4.561-8.632.564-.251.865-.881.69-1.451-.178-.578-.768-.916-1.381-.823-5.273.85-6.088.426-8.633-4.572-.283-.554-.864-.835-1.426-.662-.579.178-.91.74-.822 1.363.857 5.517.362 6.475-4.54 8.616-.577.264-.875.876-.694 1.462.175.57.749.913 1.378.815 5.285-.838 6.09-.419 8.619 4.584.301.557.888.827 1.442.657Z"
        />
      </svg>




    </div>
  </div>
);
  }
