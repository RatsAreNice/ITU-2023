//Autor: Oliver Nemček, https://github.com/iamshaunjp/Complete-React-Tutorial

import { useState, useEffect } from 'react';

const useFetch = (url, fetchAgain) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, [fetchAgain])

  return { data, isPending, error };
}

export default useFetch;