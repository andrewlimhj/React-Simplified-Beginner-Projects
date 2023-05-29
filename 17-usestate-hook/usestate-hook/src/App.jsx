import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((currentCount) => currentCount + 1);
  }

  return (
    <>
      <h1 onClick={handleClick}>{counter}</h1>
    </>
  );
}

export default App;
