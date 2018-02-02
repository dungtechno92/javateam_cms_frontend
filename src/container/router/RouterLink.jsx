import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashbroad from '../dashbroad/Dashbroad.jsx'
import Detailmember from '../detailmember/Detailmember.jsx'
import Listmember from '../listmember/Listmember.jsx'
import Metting from '../metting/Metting.jsx'
import Resource from '../resource/Resource.jsx'
import Schedule from '../schedule/Schedule.jsx'
import './RouterLink.scss' 

export default class RouterLink extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/dashbroad">DashBroad</Link></li>
                        <li><Link to="/detailmember">Detailmember</Link></li>
                        <li><Link to="/listmember">Listmember</Link></li>
                        <li><Link to="/metting">Metting</Link></li>
                        <li><Link to="/resource">Resource</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Dashbroad} />
                        <Route exact path="/dashbroad" component={Dashbroad} />
                        <Route exact path="/detailmember" component={Detailmember} />
                        <Route exact path="/listmember" component={Listmember} />
                        <Route exact path="/metting" component={Metting} />
                        <Route exact path="/resource" component={Resource} />
                        <Route exact path="/schedule" component={Schedule} />
                    </Switch>
                </div>
            </Router>
        )
    }

}

