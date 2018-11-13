import React, {Component} from "react";

class Recipes extends Component {

    names = ['Sopa', 'Arroz', 'Carne', 'Agua', 'Yogurt griego', 'Gelatina', 'Tomate', 'Salmón', 'Verduras', 'Manzana', 'Brócoli', 'Huevo', 'Aguacate', 'Frutos secos', 'Pasta', 'Cereal', 'Leche', 'Pollo', 'Compota de frutas']

    constructor(props) {
        super(props);
    }

    renderRecipes() {
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td>{ingredient}</td>
                    <td><input className="form-control text-center"
                               ref={`ingredient,${ingredient},recipe,${this.props.recipes[0].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[0][ingredient]}/></td>
                    <td><input className="form-control text-center"
                               ref={`ingredient,${ingredient},recipe,${this.props.recipes[1].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[1][ingredient]}/></td>
                    <td><input className="form-control text-center"
                               ref={`ingredient,${ingredient},recipe,${this.props.recipes[2].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[2][ingredient]}/></td>
                    <td><input className="form-control text-center"
                               ref={`ingredient,${ingredient},recipe,${this.props.recipes[3].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[3][ingredient]}/></td>
                    <td><input className="form-control text-center"
                               ref={`ingredient,${ingredient},recipe,${this.props.recipes[4].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[4][ingredient]}/></td>
                    <td><input className="form-control text-center"
                               ref={`ingredient,${ingredient},recipe,${this.props.recipes[5].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[5][ingredient]}/></td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Recetas</h4>
                        </div>
                        <div className="card-body ">
                            <form action="">
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <th></th>
                                        <th colSpan="6" scope="colgroup">Receta</th>
                                    </tr>
                                    <tr>
                                        <th>Insumo</th>
                                        <th>{this.props.recipes[0] ? this.props.recipes[0].nombre : ""}</th>
                                        <th>{this.props.recipes[1] ? this.props.recipes[1].nombre : ""}</th>
                                        <th>{this.props.recipes[2] ? this.props.recipes[2].nombre : ""}</th>
                                        <th>{this.props.recipes[3] ? this.props.recipes[3].nombre : ""}</th>
                                        <th>{this.props.recipes[4] ? this.props.recipes[4].nombre : ""}</th>
                                        <th>{this.props.recipes[5] ? this.props.recipes[5].nombre : ""}</th>
                                    </tr>
                                    {this.props.recipes[0] ? this.renderRecipes() : <tr></tr>}
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

export default Recipes;