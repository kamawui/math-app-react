import './bQuadraticEquationTab.css';
import React, {Component} from "react";

class BQuadraticEquationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Biquadratic Equations",
            tag:"biquadratic_equations",
        }
    }

    render() {
        const {title, tag} = this.state;
        const {activeTab} = this.props;
        const menuClasses = activeTab === tag ? "biquadratic-equation-menu" : "biquadratic-equation-menu hidden"

        return (
            <div className={menuClasses}>
                <div className="equation-calculation">
                    <h2 className="menu-title">{title}</h2>
                    <form>

                    </form>
                </div>
            </div>
        );
    }
}

export default BQuadraticEquationTab;