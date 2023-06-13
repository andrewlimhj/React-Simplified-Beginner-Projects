import { useState, useEffect, useCallback } from 'react';

export function useArray(initalArray) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(initalArray);
  }, []);

  const set = useCallback((arr) => {
    return setArray(arr);
  }, []);

  const push = useCallback((value) => {
    setArray((currentArray) => {
      return [...currentArray, value];
    });
  }, []);

  const replace = useCallback((index, value) => {
    // let array = [1, 2, 3];
    // array.splice(1, 1, 9);
    // console.log('new array:', array);

    // setArray((currentArray) => {
    //   console.log('current Array: ', currentArray);
    //   return [...currentArray.splice(index, 1, value)];
    // });

    setArray((currentArray) => {
      console.log(index);
      return currentArray.map((v, i) => {
        if (i === index) return value;
        return v;
      });
    });
  }, []);

  const filter = useCallback((element) => {
    setArray((currentArray) => {
      return currentArray.filter(element);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((currentArray) => {
      console.log('length array: ' + currentArray.length);
      return [
        ...currentArray.slice(0, index),
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const clear = useCallback(() => {
    return setArray([]);
  }, []);

  const reset = useCallback(() => {
    return setArray(initalArray);
  }, [initalArray]);

  return { array, set, push, replace, filter, remove, clear, reset };
}
