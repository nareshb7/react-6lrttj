import React from 'react';

const TableRow = ({ contact }) => {
  return (
    <>
      {contact.hasOwnProperty('name') && (
        <table border="1" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Userame</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
              <th>Suite</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#888' }}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.email}</td>
              <td>{contact.address?.street}</td>
              <td>{contact.address?.city}</td>
              <td>{contact.address?.suite}</td>
              <td>{contact.address?.zipcode}</td>
              <td>{contact?.phone}</td>
              <td>{contact?.website}</td>
    
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
export default TableRow;
