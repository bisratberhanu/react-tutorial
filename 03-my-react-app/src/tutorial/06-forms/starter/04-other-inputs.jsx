import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [isShipping, setIsShipping] = useState(false);
  const [framework, setFramework] = useState("react");
  const handleShipping = (e) => {
    console.log(e.target.checked);
    setIsShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={isShipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            value={framework}
            onChange={handleFramework}
            name="framework"
            id="framework"
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
