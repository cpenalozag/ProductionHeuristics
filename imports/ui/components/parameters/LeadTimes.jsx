import React, {Component} from "react";

class LeadTimes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderLeadTimes() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" ref={`lt,${material.nombre}`} min="0" required=""
                               type="number" defaultValue={material.leadtime}/></td>
                </tr>
            )
        });
    }

    render() {
        {
            this.renderLeadTimes()
        }
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Lead Times</h4>
                        </div>
                        <div className="card-body ">
                                <form action="">
                                        <table className="table table-bordered">
                                            <tbody className="">
                                            <tr>
                                                <th>Nombre del insumo</th>
                                                <th>Lead Time (meses)</th>
                                            </tr>
                                            {this.renderLeadTimes()}
                                            </tbody>
                                        </table>
                                    <div className="row">
                                        <div className="col-md-2 mx-auto">
                                            <input className="btn btn-primary" type="submit" value="Guardar"/>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeadTimes;