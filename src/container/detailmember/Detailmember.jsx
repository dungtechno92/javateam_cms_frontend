import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import { Button } from 'antd/lib/radio';
import './Detailmember.scss'

export default class Detailmember extends Component {
  constructor(props) {
    super(props);
    this.member = {
      name: "",
      email: "",
      phoneNumber: "",
      joinDate: 0,
      leftDate: 0
    }
    this.state = {
      visible: false
    }
    this.showForm = this.showForm.bind(this);
    this.handlerOk = this.handlerOk.bind(this);
    this.handlerCancel = this.handlerCancel.bind(this);
    this.userNameHander = this.userNameHander.bind(this);
    this.userEmailHander = this.userEmailHander.bind(this);
    this.userPhoneNumberHander = this.userPhoneNumberHander.bind(this);
  }
  userNameHander(e) {
    this.member.name = e.target.value;
  }
  userPhoneNumberHander(e) {
    this.member.phoneNumber = e.target.value;
  }
  userEmailHander(e) {
    this.member.email = e.target.value;
  }

  showForm() {
    this.setState({
      visible: true
    });
  };

  handlerOk() {
    this.member.joinDate = new Date().getTime();
    console.log(this.state);
    fetch("http://localhost:8080/api/v1/members", {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.member)
    }).catch(error => error)
    this.setState({
      visible: false
    });
  };
  handlerCancel() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>My Name is Detailmember</h1>
        <Button onClick={this.showForm}>Inser Member</Button>
        <Modal
          visible={this.state.visible}
          title="InsertMember"
          width={500}
          onOk={this.handlerOk}
          onCancel={this.handlerCancel}
        >
          <div className="w80p line-height-30">
            <div className="mgb10">
              <Input placeholder="Name User" onChange={this.userNameHander} />
            </div>
            <div className="mgb10">
              <Input placeholder="Email User" onChange={this.userEmailHander} />
            </div>
            <div className="mgb10">
              <Input placeholder="Phone Number" onChange={this.userPhoneNumberHander} />
            </div>
          </div>
        </Modal>
      </div>);
  }
}
