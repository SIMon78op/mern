import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

   const [count, setCount] = useState(0);
   const countRef = useRef(0);
   const intervalRef = useRef(null);
   const sectionRef = useRef();


   function handleScroll() {
    sectionRef.current.scrollIntoView({behavior: "Smooth"});
   }

   function handleFocus() {
    inputRef.current.focus();
   }

   function stratTimer() {
    intervalRef.current = setInterval(() => {
      setCount((count) => ++count)
    }, 1000)
   }

   function stopTimer() {
    clearInterval(intervalRef.current);
   }

   useEffect(() => {
     clearInterval(intervalRef.current);
   })

   useEffect(() => {
    countRef.current = count;
   }, [count]);

  return (
    <>
      {/* <h1>Here is the value of count: {countRef.current}</h1>
      <button onClick={() => countRef.current++}>Increase count</button>

      <h1>Here is the value of count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increase Count</button> */}
     
     {/* <h1>This is the previous value: {countRef.current}</h1>

     <h1>This is the Updated Value: {count}</h1>
     <button onClick={() => setCount((count) => count + 1)}>Increase Count</button> */}

     {/* <h1>{count}</h1>
     <button onClick = {startTimer}>Start</button>   <button>Stop</button> */}
{/* 
     <div>
      <inpu ref={inputRef} type="Text"></inpu>
      <button onClick={handleFocus}>Focus</button>
     </div> */}

     <h1>Welcome to OBP-3</h1>
     <button onClick={handleSroll}>Scroll to last section</button>
     <div style={{height: "100vh"}}></div>
     <h2>Hiii...  Bye...</h2>
     <div style={{height: "`00vh"}}></div>
     <section ref={sectionRef}>Last section</section>
    </>
  )
}

export default App;
