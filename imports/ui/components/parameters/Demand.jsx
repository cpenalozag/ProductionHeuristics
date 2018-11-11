import React, {Component} from "react";

class Demand extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Demanda mensual próximos 6 meses</h4>
                        </div>
                        <div className="card-body ">
                            <p className="card-category">..</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demand;