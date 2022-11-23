import React, { useState } from 'react';

import Example1 from './Example1';
import Example2 from './Example2';

const Example = () => {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july'];
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  let filterData = days.filter((day) => day !== 'wed');
  const [imgSrc, setSrc] = useState('');
  const [fileUrl, setImageUrl] = useState('');

  const downloadImage = async () => {
    const fileUrl =
      'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg';

    const image = await fetch(fileUrl);
    const splitName = fileUrl.split('/');
    const imageName = splitName.pop();
    const imageBlog = await image.blob();
    const imageUrl = URL.createObjectURL(imageBlog);
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = '' + imageName + '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSrc(imageUrl);
  };
  const handleChange = (e) => {
    setImageUrl(`${e.target.files[0]}`);
    setSrc(URL.createObjectURL(e.target.files[0]));
  };
  const changeFunc = () => {
    setChange(!change);
  };
  return (
    <div>
      {/* {filterData.map((val) => (
        <h1>{val}</h1>
      ))} */}
      <h2>Example : </h2>
      <input type="file" onChange={handleChange} />
      <button onClick={downloadImage}>Click to Download Image</button>
      {/* <div style={{ width: '300px', height: '400px' }}>
        <img src={imgSrc} alt="image" width="100%" height="100%" />
      </div> */}
      {/* <Example1 /> */}
      <div>
        <h2>Example 1: </h2>
        <Example1 />
      </div>

      <div>
        <h2>Example 2: </h2>
        <Example2 />
      </div>
    </div>
  );
};
export default Example;
