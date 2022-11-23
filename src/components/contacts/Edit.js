import React, { useState } from 'react';

const Edit = ({ obj, editFunc }) => {
  // const [update, setUpdate] = useState(true);
  let localData = JSON.parse(localStorage.getItem('Contact'));
  const [data, setData] = useState(obj);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    name == 'image'
      ? setData({
          ...data,
          [name]: URL.createObjectURL(files[0]),
        })
      : setData({ ...data, [name]: value });
  };
  const updateFunc = (e) => {
    e.preventDefault();
    localData.map((contact, idx) => {
      if (contact.email == data.email) {
        localData[idx] = data;
      }
    });
    localStorage.setItem('Contact', JSON.stringify(localData));
    editFunc();
  };
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />{' '}
        </div>
        <div>
          <input
            disabled={true}
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          />{' '}
        </div>
        <div>
          <input
            type="text"
            name="mobile"
            value={data.mobile}
            onChange={handleChange}
          />{' '}
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={handleChange}
          />{' '}
        </div>
        <div>
          <input type="file" name="image" onChange={handleChange} />
        </div>
        <div>
          <button onClick={updateFunc}>Update</button>{' '}
        </div>
      </form>
    </div>
  );
};
export default Edit;
