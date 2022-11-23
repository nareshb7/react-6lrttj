import React, { useState, useEffect } from 'react';

const Contact = () => {
  const previousData = JSON.parse(localStorage.getItem('Contact')) || [];
  const [localData, setLocalData] = useState(previousData);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    image: '',
    gender: 'Male',
    position: 'FDE',
  });
  const [error, setError] = useState({
    name: '.',
    email: '.',
    mobile: '.',
    password: '.',
  });
  useEffect(() => {
    const { name, email, mobile, password } = error;
    if (!name && !email && !mobile && !password) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [error]);

  const handleChange = (e) => {
    const emailPattern = /^[a-z][a-z0-9]+@[a-z0-9]+(?:[.][a-z0-9]{2,})+$/;
    const mblPattern = /^[0-9]{10}$/;
    const psdPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_]).{8,}$/;
    const { name, value, files } = e.target;
    name == 'image'
      ? setData({
          ...data,
          [name]: URL.createObjectURL(files[0]),
        })
      : setData({ ...data, [name]: value });

    switch (name) {
      case 'name':
        value.match(/^[A-z\s]{3,}$/)
          ? setError({ ...error, [name]: '' })
          : setError({ ...error, [name]: 'Min 3 Chars Required' });
        break;
      case 'email':
        value.match(emailPattern)
          ? setError({ ...error, [name]: '' })
          : setError({ ...error, [name]: 'Enter Valid Email' });
        break;
      case 'mobile':
        value.match(mblPattern)
          ? setError({ ...error, [name]: '' })
          : setError({ ...error, [name]: 'Mobile Number Must be 10 digits' });
        break;
      case 'password':
        value.match(psdPattern)
          ? setError({ ...error, [name]: '' })
          : setError({
              ...error,
              [name]: 'One Capital, One Lower, One Number, One Digit Required ',
            });
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isNew = true;
    localData.forEach((obj) => {
      if (obj.email == data.email) {
        isNew = false;
      }
    });
    if (isNew) {
      setLocalData([...localData, data]);
      setData({
        name: '',
        email: '',
        mobile: '',
        password: '',
        image: '',
        gender: 'Male',
        position: 'FDE',
      });
      setError({ name: '.', email: '.', mobile: '.', password: '.' });
      alert('Data Submitted Sucessfully');
    } else {
      setError({ ...error, email: 'Email Id is Already Exist' });
    }
  };
  localStorage.setItem('Contact', JSON.stringify(localData));
  const danger = { color: '#f00' };

  return (
    <div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <div style={danger}>{error.name}</div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <div style={danger}>{error.email}</div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              name="mobile"
              value={data.mobile}
              onChange={handleChange}
            />
            <div style={danger}>{error.mobile}</div>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <div style={danger}>{error.password}</div>
          </div>
          <div>
            <div>
              <label htmlFor="gender">Gender</label>{' '}
            </div>
            <input
              type="radio"
              name="gender"
              value="Male"
              defaultChecked
              onChange={handleChange}
            />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <span>Female</span>
          </div>
          <div>
            <label>What are you applyibg for???</label>
            <select name="position" onChange={handleChange} defaultValue="FDE">
              <option value="FDE">FDE</option>
              <option value="SDE-1">SDE - 1</option>
              <option value="SDE-2">SDE-2</option>
            </select>
          </div>
          <div>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <div>
            <button type="submit" disabled={!valid} className="btn btn-primary">
              {' '}
              Submit{' '}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
