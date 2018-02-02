import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import './Listmember.scss'
import 'antd/dist/antd.css';


const url = "http://localhost:8080/api/v1/members";
const columns = [
  {
    key: 'id',
    title: 'Id',
    dataIndex: 'id'
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name'
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    key: 'phoneNumber',
    title: 'Phone',
    dataIndex: 'phoneNumber'

  },
  {
    key: 'joinDate',
    title: 'JoinDate',
    dataIndex: 'joinDate'
  }

]

export default class Listmember extends React.Component {
  constructor(props) {
    super(props);
    this.handerGetMembers = this.handerGetMembers.bind(this);

  }
  handerGetMembers() {
    let members = [];
    fetch(url).then((resp) => resp.json()).then((data) => {
      data.data.map((item) =>{
        members.push(Object.assign({},{key:item.id},item))
      })
      ReactDOM.render(
        <Table columns={columns} dataSource={members} />,
        document.getElementById("members")
      )
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Click me below For get All User</h1>
        <button onClick={this.handerGetMembers}>Get ALl Member</button>
        <div id="members"></div>
      </div>);
  }
}