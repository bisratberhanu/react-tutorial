import React from 'react';
const List = ({people}) => {
  return (
    <>
    {people.map((person)=>{
    const {image,id,name,age} = person
      return(
        <article className='person' key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years old</p>
          </div>
        </article>
      )
    
    })}

    </>
  );
};

export default List;
