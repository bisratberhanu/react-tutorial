


const ErrorExample = () => {
  let count = 0
  const increase = ()=>{
    count+=1
    console.log(count);
    
    return count
  }
  return(
    <>
    <h2>{count}</h2>
    <button onClick={()=>{increase()}}>Increament</button>
    </>
  )
};

export default ErrorExample;
