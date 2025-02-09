import React from "react";

import { useState } from "react";

export default function useFetch() {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const fetchData = async () => {

    const shuffleArray = (arr) => {
      let i = arr.length,j,temp;
      while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    };

    const getRandomIndex = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );
      if (!response.ok) {
        throw new Error("Error occured!");
      } else {
        const data = await response.json();
        // const maxValue=data.length-1;
        // const minValue=0;
        const sampleEmoji = [];
        const uniqueIndices = [];
        for (let i = 0; i < 5; i++) {
          const randomIndex = getRandomIndex(0, data.length - 1);
          if (!uniqueIndices.includes(randomIndex)) {
            uniqueIndices.push(randomIndex);
            sampleEmoji.push(data[randomIndex]);
          } else {
            i--;
          }
        }
        const duplicate = [...sampleEmoji];
        const final = [...duplicate, ...sampleEmoji];

        console.log(final);
        shuffleArray(final);
        console.log(final);

        setData(final);
        
      }
    } catch (e) {

      setError(e);

    } finally {

      setLoading(false);

    }
  };

  return { data, fetchData, loading, error };
}
