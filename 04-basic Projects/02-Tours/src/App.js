import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id)=>{
    const newTour  = tours.filter((tour)=> tour.id!=id)
    setTours(newTour)
  }

  const getTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (tours.length==0){
    return(
      <main>
        <h2>no tour to display</h2>
        <button className="btn" onClick={getTours}>refresh</button>
      </main>
    )
  }

  return (
    <main> 
      <Tours tours = {tours} removeTour = {removeTour}/>
    </main>
  );
}

export default App;
