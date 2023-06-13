import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(undefined);
    setIsError(false);
    setIsLoading(true);

    // postData(url, options);
    getData(url, options);
  }, [url]);

  async function getData(url, options) {
    try {
      const response = await axios.get(url, options);
      return setData(response.data);
    } catch (error) {
      console.error(error);
      return setIsError(true);
    } finally {
      return setIsLoading(false);
    }
  }

  // async function postData(url, options) {
  //   try {
  //     const postData = await axios.post(url, { ...options });
  //     console.log(postData.data);
  //     setData([...data, postData.data]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return { data, isError, isLoading };
}
