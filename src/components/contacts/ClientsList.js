import React, { useState } from 'react';
import Edit from './Edit';

const ClientsList = () => {
  const data = JSON.parse(localStorage.getItem('Contact'));
  const [check, setCheck] = useState(true);
  const [edit, setEdit] = useState({});

  const deleteFunc = (idx) => {
    data.splice(idx, 1);
    localStorage.setItem('Contact', JSON.stringify(data));
    setCheck(!check);
  };
  const editFunc = (idx) => {
    setEdit(data[idx]);
  };
  const updateFunc = () => {
    setEdit({});
  };

  let myWindow;
  const openWindow = (img) => {
    myWindow = window.open('', 'msz', 'top=100,left=500,width=400,height=400');
    myWindow.document.write(
      `<div style={{wdith:'400px, height:'400px'}}><img src='${img}' alt='image' width='100%' height='100%' /></div>`
    );
  };
  const closeWindow = () => {
    myWindow.close();
  };
  return (
   
    <div>
      {data?.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Appiled Position</th>
              <th>Picture</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((client, idx) => {
              let text = '';
              let length = client.password.length;
              return (
                <tr key={idx}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.mobile}</td>
                  <td>
                    {client.password.slice(0, 1)}
                    {text.padEnd(length - 4, '*')}
                    {client.password.slice(-1)}
                  </td>
                  <td>{client.gender}</td>
                  <td>{client.position} </td>
                  <td
                    className="profileImage"
                    onMouseOver={() => openWindow(client.image)}
                    onMouseOut={closeWindow}
                  >
                    <img
                      src={client.image}
                      alt="image"
                      widtyh="100%"
                      height="100%"
                    />
                  </td>
                  <td>
                    <button onClick={() => editFunc(idx)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteFunc(idx)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>Table is Empty</h2>
      )}
      {Object.keys(edit)?.length ? (
        <Edit obj={edit} editFunc={updateFunc} />
      ) : (
        ''
      )}
    </div>
  );
};
export default ClientsList;
