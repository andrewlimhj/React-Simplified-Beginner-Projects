import { useState, useEffect } from 'react';

export function NameAndAge() {
  const [name, setName] = useState('Andrew');
  const [age, setAge] = useState(28);

  function AddOneToAge() {
    return setAge((currentAge) => currentAge + 1);
  }

  function MinusOneToAge() {
    return setAge((currentAge) => currentAge - 1);
  }

  useEffect(() => {
    console.log('Age has changed', age);
  }, [age]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <div>{age}</div>
        <button onClick={AddOneToAge}>+</button>
        <button onClick={MinusOneToAge}>-</button>
      </div>

      <br />

      <div>
        My name is {name} and I am {age} years old
      </div>
    </div>
  );
}
