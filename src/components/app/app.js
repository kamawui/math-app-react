import './app.css';
import React, {Component} from "react";
import Navigation from "../navigation/navigation";
import QuadraticEquationTab from "../burger-tabs/quadratic-equation-tab/quadraticEquationTab";
import BQuadraticEquationTab from "../burger-tabs/b-quadratic-equation-tab/bQuadraticEquationTab";
import TrigonometryEquationTab from "../burger-tabs/trigonometry-equation-tab/trigonometryEquationTab";
import BurgerMenu from "../burger-menu/burgerMenu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            burgerMenuLinks: ["Quadratic Equations", "Biquadratic Equations", "Trigonometry Equations"],
            activeElement: "quadratic_equations",
        }
    }

    setOpen = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    closeMenu = () => {
        this.setState({
            isMenuOpen: false
        })
    }

    setActiveTab = (activeElement) => {
        this.setState({activeElement});
    }

    render() {
        const {isMenuOpen, burgerMenuLinks, activeElement} = this.state;

        return (
            <div className="app-wrapper">
                <div className="app-overlay" onClick={() => isMenuOpen ? this.setOpen() : null}>
                    <Navigation open={isMenuOpen} setOpen={this.setOpen}/>
                    <QuadraticEquationTab activeTab={activeElement}/>
                    <BQuadraticEquationTab activeTab={activeElement}/>
                    <TrigonometryEquationTab activeTab={activeElement}/>
                </div>

                <BurgerMenu open={isMenuOpen} burgerMenuLinks={burgerMenuLinks} activeTab={activeElement}
                            setActiveTab={this.setActiveTab} closeMenu={this.closeMenu}/>
            </div>
        );
    }
}

export default App;