import React, { Component } from 'react';
const ParseList = (props) => {
 const {getList } = props;
 return(getList.map((item, index) => {
   return (
    <tr key={index}>
     <td>{item.id}</td>
     <td>{item.userId}</td>
     <td>{item.title}</td>
     <td>{item.completed.toString()}</td>
    </tr>
   )
  })
 )
}


class GetList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   getList: []
  };
 }

 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/todos')
   .then(response => response.json())
   .then(json => {
    this.setState({ getList: json });
    console.log("getList", json);
   })
 }
 render() {
  const { getList } = this.state;

  if (getList.length !== 0) {
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
       <ParseList getList={getList}/>
      </tbody>
     </table>
    </div>
   );
  } else {
   return <p>Loding.....</p>
  }

 }
}

export default GetList
