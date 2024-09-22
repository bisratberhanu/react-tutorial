import { useState } from "react";

const ToggleChallenge = () => {
  const [alert,setAlert] = useState(false)
  const changeAlert = ()=>{
    if(alert==true){
      setAlert(false)
      return
    }
    setAlert(true)
  }
  return <div>
    <h2>toggle challenge</h2>
    <button className="btn" onClick={changeAlert}> toggle</button>
    {alert && <Alert/>}
    </div>
};

const Alert = ()=>{
  return <div className="alert alert-danger">Bisrat</div>
}

export default ToggleChallenge;
