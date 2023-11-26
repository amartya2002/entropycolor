"use client"
import ColorCard from '@/components/ColorCard'
import colors from '@/data/colors.json'





const ColorCardLayout = () => (
    <div className='z-21'>
        <p className='max-w-7xl px-8 lg:px-40   text-center font-medium text-2xl  text-gray-800 mb-6  '>Some shades for <span className='block text-blue-500 '>your new project.</span></p>
        <div className=' flex justify-center '>

            <div className=' rounded-2xl p-2 h-screen z-21  overflow-y-scroll no-scrollbar  bg-zinc-50' >
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5   '>
                    {colors.map((color, index) => (
                        <ColorCard key={index} color={color.color} title={color.name} desc={color.description} css={color.css} rgb={color.rgb} hex={color.hex} />
                    ))}
                </div>
            </div>
        </div></div>

);

export default ColorCardLayout;