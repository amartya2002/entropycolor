"use client"
import HorizontalColorCard from './HorizontColCard';
import weekly from '@/data/weekly.json'

const HorizontalCardLayout = () => (
    <div className='max-w-7xl mx-auto mb-8'>
        <p className=' px-8 lg:px-40 text-center font-medium text-2xl  text-gray-800 pb-8 dark:text-zinc-200  '>Curated hues<span className='text-blue-500 block dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t from-zinc-500 to-zinc-200 '> for the week ahead.</span></p>
        <div className=' flex justify-center'>

            <div className=' border-4 dark:border-zinc-700 border-zinc-100 rounded-2xl p-2 h-[50vh]  overflow-y-scroll no-scrollbar dark:bg-transparent ' >
                <div className=' flex-col space-y-4 '>
                    {weekly.map((color, index) => (
                        <HorizontalColorCard key={index} color={color.color} title={color.name} desc={color.description} css={color.css} rgb={color.rgb} hex={color.hex} />
                    ))}
                </div>
            </div>
        </div>
        </div>

);

export default HorizontalCardLayout;