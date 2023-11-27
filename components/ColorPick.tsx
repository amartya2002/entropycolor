import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function App() {
  const [color, setColor] = useColor("#561ecb");

  return (
    <div className="mx-auto my-6 rounded-2xl border-none shadow-xl md:w-[30rem] ">
      <ColorPicker color={color} onChange={setColor} />
    </div>
  );
}
