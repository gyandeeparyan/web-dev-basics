import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { URL } from "./constants";

function App() {

  const [counter, setCounter] = useState(0);

  const [user, setUser] = useState({ name: "John", age: 25 });
  const [delayed, setDelayed] = useState(0);

  // Wrong way - multiple setState calls will batch
  const handleMultipleUpdates = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    // This will only increment by 10, not 22!
  };

  // Correct way - using functional updates
  const handleCorrectUpdates = () => {
    setCounter((a) => a + 1); 1
    setCounter((a) => a + 1); 2
    setCounter((a) => a + 1); 3
    // This will increment by 3 this avoided 
  };

  // Wrong way - mutating state directly
  const handleWrongUserUpdate = () => {
    user.age += 1; // Don't mutate state directly!
    setUser(user);
  };

  // Correct way - creating new object
  const handleCorrectUserUpdate = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  // Demonstrating delayed state access
  useEffect(() => {
    setTimeout(() => {
      setDelayed(counter);
    }, 2000);
  }, [counter]);



  return (
    <div className='p-4'>
    

      <div className='space-y-4'>
        <div className='p-4 border rounded'>
          <h2 className='text-xl'>Batch Update Example:</h2>
          <p>Counter: {counter}</p>
          <button
            className='bg-blue-500 text-white px-4 py-2 mr-2'
            onClick={handleMultipleUpdates}>
            Wrong Update (Will add 1)
          </button>
          <button
            className='bg-green-500 text-white px-4 py-2'
            onClick={handleCorrectUpdates}>
            Correct Update (Will add 3)
          </button>
        </div>

        <div className='p-4 border rounded'>
          <h2 className='text-xl'>Object State Example:</h2>
          <p>User Age: {user.age}</p>
          <button
            className='bg-blue-500 text-white px-4 py-2 mr-2'
            onClick={handleWrongUserUpdate}>
            Wrong Update
          </button>
          <button
            className='bg-green-500 text-white px-4 py-2'
            onClick={handleCorrectUserUpdate}>
            Correct Update
          </button>
        </div>

        <div className='p-4 border rounded'>
          <h2 className='text-xl'>Delayed State Example:</h2>
          <p>Counter: {counter}</p>
          <p>Delayed Value (2s): {delayed}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
