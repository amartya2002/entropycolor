"use client"
import ColorCard from '@/components/ColorCard'
import colors from '@/data/colors.json'

const colors1 = [
    { "name": "Blue", "hex": "bg-blue-600" },
    { "name": "Blue Pink", "hex": "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" },
    { "name": "Green", "hex": "bg-green-300" },
    { "name": "Yellow", "hex": "bg-yellow-300" },
    { "name": "Red", "hex": "bg-red-300" },
    { "name": "Purple", "hex": "bg-purple-300" },
    { "name": "Orange", "hex": "bg-orange-400" },
    { "name": "Teal", "hex": "bg-teal-300" },
    { "name": "Indigo", "hex": "bg-indigo-300" },
    { "name": "Pink", "hex": "bg-pink-300" },
    { "name": "Lime", "hex": "bg-lime-300" },
    { "name": "Gray", "hex": "bg-gray-300" },
    { "name": "Cyan", "hex": "bg-cyan-500" },
    { "name": "Amber", "hex": "bg-amber-300" },
    { "name": "Light Red", "hex": "bg-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-400 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-300 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-300 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-300 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-300 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-300 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-300 to-red-200" },
    { "name": "Deep Purple", "hex": "bg-gradient-to-r from-indigo-500 to-red-200" },
    // Add more colors as needed
  ];
  


const ColorCardLayout = () => (
    <section className='max-w-7xl mx-auto flex justify-center'>
        <div className=' rounded-2xl p-2 h-screen overflow-y-scroll no-scrollbar' >
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5   '>
                {colors.map((color, index) => (
                    <ColorCard key={index} color={color.color} title={color.name} desc={color.description} css={color.css} rgb={color.rgb} hex={color.hex} />
                ))}
            </div>
        </div>
    </section>
);

export default ColorCardLayout;