import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function App() {
  const [color, setColor] = useColor("#561ecb");

  return (
    <div className="mx-auto md:w-[30rem] rounded-2xl border-none my-6 shadow-xl ">
      <ColorPicker  color={color} onChange={setColor} />
    </div>
  )
}