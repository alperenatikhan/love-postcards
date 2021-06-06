import React, { useState } from 'react';
import './style.css';

var obj = [
  { message: 'I love you', author: 'Your passionate lover' },
  { message: 'I love your eyes', author: 'Your biggest lover' },
  {
    message: 'You have the most beautiful figure I have ever seen',
    author: 'Your secret lover'
  },
  {
    message: 'I think I will fall in love with you',
    author: 'Your serious lover'
  },
  {
    message: 'What should I do to get closer',
    author: 'Your very close but mysterious lover'
  }
];

export default function App() {
  let [count, setCount] = useState(0);

  const handleClick = () =>{
    let newCount = (Math.ceil(Math.random() * 4))
    newCount == count ? setCount(newCount-1) : setCount(newCount)  
  }

  return (
    <div className="love-card-bg">
    
    <img src= {`https://source.unsplash.com/600x600/?love/${count*(Math.ceil(Math.random() *100)) }/ ${count}`}/>

    <div className="centered-items">
      <h1> {obj[`${count}`].message}</h1>
      
      <p> {obj[`${count}`].author}</p>
      <button onClick={handleClick}> New Message </button>
      </div>
    </div>
  );
}
