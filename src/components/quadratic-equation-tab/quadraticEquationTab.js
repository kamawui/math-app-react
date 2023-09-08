import './quadraticEquationTab.css';
import React, {Component} from "react";

class QuadraticEquationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Quadratic Equations",
            tag:"quadratic_equations",
            equation: {
                values: {
                    a: null,
                    b: null,
                    c: null,
                },
                operations: {
                    first: "+",
                    second: "+"
                },
                answer: ""
            },
            activeEquationTab: "calculator",
        }
    }

    onTabChange = (activeEquationTab) => {
        this.setState({activeEquationTab});
    }

    checkEquationInfo = () => {
        const {equation} = this.state;

        if (equation.values.a && equation.values.b && equation.values.c) {
            return true;
        } else {
            alert("Error: you have not entered values");
            return false;
        }

    }

    onAChange = (e) => {
        let value = e.target.value;

        this.setState(({equation}) => {
            return (
                equation.values.a = value
            )
        });
    }

    onBChange = (e) => {
        let value = e.target.value;

        this.setState(({equation}) => {
            return (
                equation.values.b = value
            )
        });
    }

    onCChange = (e) => {
        let value = e.target.value;

        this.setState(({equation}) => {
            return (
                equation.values.c = value
            )
        });
    }

    onFirstOperationChange = (e) => {
        let value = e.target.value;

        this.setState(({equation}) => {
            return (
                equation.operations.first = value
            )
        });
    }

    onSecondOperationChange = (e) => {
        let value = e.target.value;

        this.setState(({equation}) => {
            return (
                equation.operations.second = value
            )
        });
    }

    calculateEquation = () => {
        if (this.checkEquationInfo()) {
            let {equation: {values: {a, b, c}, operations: {first, second}}} = this.state;

            if (first === "+") {
                b = b * 1;
            } else {
                b = b * -1;
            }

            if (second === "+") {
                c = c * 1;
            } else {
                c = c * -1;
            }

            let D = b**2 - 4 * a * c;

            let answer = "";

            if (D === 0) {
                let x = (((-1 * b) + Math.sqrt(D)) / (2 * a)).toFixed(2);

                answer = `x = ${x}`;

            } else if (D > 0) {
                let x1 = (((-1 * b) + Math.sqrt(D)) / (2 * a)).toFixed(2);
                let x2 = (((-1 * b) - Math.sqrt(D)) / (2 * a)).toFixed(2);

                answer = `x₁ = ${x1}, x₂ = ${x2}`;
            } else {
                answer = "no roots";
            }

            this.setState(({equation}) => {
                return (
                    equation.answer = answer
                )
            });
        }
    }

    render() {
        const {title, tag, equation, activeEquationTab} = this.state;
        const {activeTab} = this.props;
        const menuClasses = activeTab === tag ? "quadratic-equation-menu" : "quadratic-equation-menu hidden";


        return (
            <div className={menuClasses}>
                <div className="tab-buttons">
                    <button className={`tab-button  ${activeEquationTab === "calculator" ? "active-tab-btn" : ""}`}
                            onClick={() => this.onTabChange("calculator")}>
                        Calculator
                    </button>
                    <button className={`tab-button ${activeEquationTab === "theory" ? "active-tab-btn" : ""}`}
                            onClick={() => this.onTabChange("theory")}>
                        Theory
                    </button>
                </div>
                <div className="equation-tab">
                    <div className={`equation-calculation ${activeEquationTab === "calculator" ? "" : "hidden-tab"}`}>
                        {/*<h2 className="menu-title">Calculate your equation</h2>*/}
                        <p className="description">Description: this online calculator is a quadratic equation solver that will solve a second-order
                            polynomial equation such as ax² + bx + c = 0 for x, where a ≠ 0</p>
                        <div className="form-wrapper">
                            <div className="form-header">
                                Calculate your equation
                            </div>
                            <form className="equation-form">
                                <label>ax²</label>
                                <select className="operation-first" name="operation" onChange={this.onFirstOperationChange}>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                </select>
                                <label>bx</label>
                                <select className="operation-second" name="operation" onChange={this.onSecondOperationChange}>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                </select>
                                <label>c = 0</label>
                            </form>
                            <form className="values-form">
                                <div>
                                    <label>a = </label>
                                    <input type="number" onChange={this.onAChange}/>
                                </div>
                                <div>
                                    <label>b = </label>
                                    <input type="number" onChange={this.onBChange}/>
                                </div>
                                <div>
                                    <label>c = </label>
                                    <input type="number" onChange={this.onCChange}/>
                                </div>
                            </form>
                            <div className="form-buttons">
                                <button className="form-button">Clear</button>
                                <button className="form-button" onClick={() => this.calculateEquation()}>Calculate</button>
                            </div>
                            <div className="equation-result">
                                Answer: <input type="text" readOnly value={equation.answer}/>
                            </div>
                        </div>
                    </div>
                    <div className={`equation-theory ${activeEquationTab === "theory" ? "" : "hidden-tab"}`}>
                        <h2 className="menu-title">Theory</h2>
                    </div>
                </div>

            </div>
        );
    }

}

export default QuadraticEquationTab;