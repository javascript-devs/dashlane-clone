import { useState } from "react";
const RangeBar = () => {
  const [range, setRange] = useState(null);
  return (
    <div className="flex flex-col space-x-2">
      <input
        name="length"
        type="range"
        defaultValue={8}
        min={8}
        max={100}
        step={1}
        onChange={(e) => setRange(e.target.value)}
        className="range range-primary w-[100vh]"
      />
      <label className="text-xl " htmlFor="range">
        Length: {range || 8}
      </label>
    </div>
  );
};

export default RangeBar;
