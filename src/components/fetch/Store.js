import React, { useState } from 'react';

const Store = () => {
  const URL = 'https://jsonplaceholder.typicode.com/photos/?_limit=100';
  const [fetchData, setFetchData] = useState([]);

  const fetchFun = async () => {
    setTimeout(() => {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setFetchData(data));
    }, [2000]);
  };
  fetchFun();

  if (!fetchData.length) {
    return <h1 style={{ textAlign: 'center' }}>Loading....</h1>;
  }
  return (
    <div>
      {fetchData.map((item, idx) => {
        return (
          <div key={idx} style={{ width: '32%', display: 'inline-block' }}>
            <h1>Id : {item.id}</h1>
            <h1>Title : {item.title}</h1>
            <img src={item.thumbnailUrl} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default Store;
