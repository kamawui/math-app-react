import './trigonometryEquationTab.css';
import React, {Component} from "react";

class TrigonometryEquationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Trigonometry Equations",
            tag:"trigonometry_equations",

        }
    }

    render() {
        const {title, tag} = this.state;
        const {activeTab} = this.props;
        const menuClasses = activeTab === tag ? "trigonometry-equation-menu" : "trigonometry-equation-menu hidden"

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

export default TrigonometryEquationTab;