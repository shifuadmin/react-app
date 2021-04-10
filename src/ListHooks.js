

import React, {useState, useEffect} from 'react';

function ListHooks() {

 const [getList, setList] = useState([]);

 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
   setList(json);
  })
 })

 return (
  <div>
  <h1> GetList </h1>
  <table className="table">
   <thead className="thead-dark">
    <tr>
     <th scope="col">id</th>
     <th scope="col">userId</th>
     <th scope="col">title</th>
     <th scope="col">completed</th>
    </tr>
   </thead>
   <tbody>
    {getList.length !==0 ?
     getList.map((item, index) => {
     return (
      <tr key={index}>
       <td>{item.id}</td>
       <td>{item.userId}</td>
       <td>{item.title}</td>
       <td>{item.completed.toString()}</td>
      </tr>
     )
    }): <tr><td>Loading....</td></tr>}
   </tbody>
  </table>
 </div>
 )
}

export default ListHooks
