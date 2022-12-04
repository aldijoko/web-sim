import { useState } from "react";

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div>
        <label class="container">{label}
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
        <span class="checkmark"></span>
        </label>
      </div>
    );
  };
  export default Checkbox;