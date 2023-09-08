import './quadraticEquationTab.css';
import React, {Component} from "react";

class QuadraticEquationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Quadratic Equations",
            tag:"quadratic_equation",
            equation: {
                a: 1,
                b: 1,
                c: 1
            }
        }
    }

    onValueChange = (e) => {
        this.setState(({equation}) => {
            equation.a = e.target.value;
        })
        console.log(e.target.value);
    }

    render() {
        const {a, b, c} = this.state.equation;

        return (
            <div className="quadratic-equation-menu">
                <div className="equation-calculation">
                    <h2 className="menu-title">{this.state.title}</h2>
                    <form>
                        
                    </form>
                </div>
            </div>
        );
    }

}

export default QuadraticEquationTab;