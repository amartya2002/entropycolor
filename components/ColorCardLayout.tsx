"use client"
import ColorCard from '@/components/ColorCard'
import colors from '@/data/colors.json'

const ColorCardLayout = () => (
    <div className='max-w-7xl mx-8 md:px-12 lg:px-32 '>
        <p className=' text-center font-medium text-2xl  text-gray-800 pb-8 dark:text-zinc-200  '>Some shades for <span className='text-blue-500 block dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t from-zinc-500 to-zinc-200 '>your new project.</span></p>
        <div className=' flex justify-center'>

            <div className=' border-4 dark:border-zinc-700 border-zinc-100 rounded-2xl p-2 h-[30rem]  overflow-y-scroll no-scrollbar dark:bg-transparent ' >
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5   '>
                    {colors.map((color, index) => (
                        <ColorCard key={index} color={color.color} title={color.name} desc={color.description} css={color.css} rgb={color.rgb} hex={color.hex} />
                    ))}
                </div>
            </div>
        </div></div>

);

export default ColorCardLayout;