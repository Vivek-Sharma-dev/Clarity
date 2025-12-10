import React, { useEffect, useState } from 'react'

const Counter = ({ end, title }) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
    

      const timer = setInterval(() => {
        start += 1;
        setCounter(start);

        if(start === end) {
          clearInterval(timer);
        }
      }, stepTime)
      return () => clearInterval(timer)
    }, [end])
    
  return (
    <div className='inline-block text-center'>
      <h2 className='text-(--secondary-color) text-xl md:text-2xl lg:text-4xl font-bold'>{counter}</h2>
      <span className='text-gray-400 text-md text-lg lg:text-xl font-medium mt-2'>{title}</span>
    </div>
  )
}

export default Counter
