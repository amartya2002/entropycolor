import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function App() {
  const [color, setColor] = useColor("#561ecb");

  return (
    <div className="mx-auto w-[25rem] rounded-2xl border-none my-6 shadow-xl ">
      <ColorPicker  color={color} onChange={setColor} />
    </div>
  )
}