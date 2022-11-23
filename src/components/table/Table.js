import React, { useState } from 'react';
import { data } from './data.js';
import TableRow from './TableRow';

const Table = () => {
  const [ipt, setIpt] = useState('');
  const [tableData, setTableData] = useState(data);
  const [clickedData, setClickedData] = useState({});
  const [toggle, setToggle] = useState(true);
  const iptStyle = {
    padding: '10px 20px ',
    margin: '10px',
  };
  const handleChange = (e) => {
    setClickedData({});
    setIpt(e.target.value);
    let mapData = data.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toString().toLowerCase().includes(e.target.value)
      )
    );
    setTableData(mapData);
  };

  const handleClick = (idx) => {
    setTableData([]);
    setClickedData(data[idx]);
  };
  const deleteFunc = (id) => {
    let cnfrm = confirm('Do u want to delete???');
    if (cnfrm) {
      let filterData = tableData.filter((items) => items.id !== id);
      setTableData(filterData);
    }
  };
  const toggleFunc = () => {
    setToggle(!toggle);
  };
  // const sortFunc = (val) => {
  //   let sampleData = JSON.parse(JSON.stringify(tableData));
  //   console.log(sampleData, 'before');
  //   sampleData.sort((a, b) => {
  //     if (a[val] > b[val]) return 1;
  //     if (a[val] < b[val]) return -1;
  //     return 0;
  //   });
  //   console.log(sampleData, 'after');
  //   setTableData(sampleData);
  // };
  const reverseFunc = () => {
    let sampleData = JSON.parse(JSON.stringify(tableData));
    sampleData.reverse();
    setTableData(sampleData);
  };
  return (
    <div>
      <input
        placeholder="Enter the name to search"
        value={ipt}
        name="sIpt"
        onChange={handleChange}
        style={iptStyle}
      />
      <i className="bi bi-arrow-up-square-fill"></i>
      <button className="btn btn-primary" onClick={toggleFunc}>
        {toggle ? 'Arrow Down' : 'Arrow Up'}
      </button>
      <span>
        {' '}
        No of Persons : <b> {tableData.length}</b>
      </span>

      {toggle && tableData.length > 0 ? (
        <table border="1" className="table">
          <thead>
            <tr onClick={reverseFunc}>
              <th>Name</th>
              <th>Userame</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
              <th>Suite</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((contact, idx) => {
              let val = '#888';
              idx % 2 == 0 ? (val = '#888') : (val = '#ccc');
              return (
                <>
                  <tr
                    key={contact?.id}
                    onClick={() => handleClick(idx)}
                    style={{ backgroundColor: val }}
                  >
                    <td>{contact.name}</td>
                    <td>{contact.username}</td>
                    <td>{contact.email}</td>
                    <td>{contact.address.street}</td>
                    <td>{contact.address.city}</td>
                    <td>{contact.address.suite}</td>
                    <td>{contact.address.zipcode}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.website}</td>
                  </tr>
                  <tr key={idx + Math.random() * 1000}>
                    <td>
                      <button
                        className="btn btn-danger"
                        style={{ backgroundColor: '#dc3545' }}
                        onClick={() => deleteFunc(contact.id)}
                      >
                        Delete
                      </button>{' '}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      ) : (
        <>
          {tableData?.length <= 0 && !clickedData.hasOwnProperty('name') && (
            <h2>Data Not Found</h2>
          )}
        </>
      )}
      {clickedData && <TableRow contact={clickedData} />}
    </div>
  );
};
export default Table;
