import React, {Component} from "react";
import Description from "./Description";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <Description/>
            </div>
        );
    }
}

export default Dashboard;