import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashbroad from './container/dashbroad/Dashbroad.jsx';
import Listmember from './container/listmember/Listmember.jsx';
import Detailmember from './container/detailmember/Detailmember.jsx';
import Metting from './container/metting/Metting.jsx';
import Resource from './container/resource/Resource.jsx';
import Schedule from './container/schedule/Schedule.jsx';

const container = {
    component: <Dashbroad />
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.DashbroadHander = this.DashbroadHander.bind(this)
        this.ListmemberHander = this.ListmemberHander.bind(this);
        this.DetailmemberHander = this.DetailmemberHander.bind(this);
        this.MettingHander = this.MettingHander.bind(this);
        this.ResourceHander = this.ResourceHander.bind(this);
        this.ScheduleHander = this.ScheduleHander.bind(this);
    }
    DashbroadHander() {
        ReactDOM.render(
            <Dashbroad />,
            document.getElementById('component')
        );
    }
    ListmemberHander() {
        ReactDOM.render(
            <Listmember />,
            document.getElementById('component')
        );
    }
    DetailmemberHander() {
        ReactDOM.render(
            <Detailmember />,
            document.getElementById('component')
        );
    }
    MettingHander() {
        ReactDOM.render(
            <Metting />,
            document.getElementById('component')
        );
    }
    ResourceHander() {
        ReactDOM.render(
            <Resource />,
            document.getElementById('component')
        );
    }
    ScheduleHander() {
        ReactDOM.render(
            <Schedule />,
            document.getElementById('component')
        );
    }
    render() {    
        return (
            <div>
                <button onClick={this.DashbroadHander}>Dashbroad</button>
                <button onClick={this.ListmemberHander}>Detailmember</button>
                <button onClick={this.DetailmemberHander}>Dashbroad</button>
                <button onClick={this.MettingHander}>Dashbroad</button>
                <button onClick={this.ResourceHander}>Dashbroad</button>
                <button onClick={this.ScheduleHander}>Dashbroad</button>
            </div>
        )
    }

}

ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
);
ReactDOM.render(
    <Dashbroad />,
    document.getElementById('component')
);