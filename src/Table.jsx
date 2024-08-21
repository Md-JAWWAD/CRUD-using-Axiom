import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

const Table = () => {
  const [api, apiData] = useState([]);
    const navigate = useNavigate()
  const getData = () => {
    axios.get("http://localhost:3000/users").then((e) => apiData(e.data));
  };

  useEffect(() => {
    getData();
  }, []);

const handleDelete = (id) => 
{
  axios.delete(`http://localhost:3000/users/${id}`).then(()=> getData())
}


  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {api.map((e) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{e.id}</th>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td><FaEdit /></td>
                  <td><button onClick={()=> handleDelete(e.id)} ><RiDeleteBin6Fill /></button></td>
                </tr>
              </tbody>
            </>
          );
        })}
        <div className="my-4">
        <Button onClick={()=> navigate('/')} variant="outline-dark">Go back</Button>
        </div>
      </table>
    </>
  );
};

export default Table;
