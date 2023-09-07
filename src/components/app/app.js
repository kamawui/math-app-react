import './app.css';
import React, {Component} from "react";
import Navigation from "../navigation/navigation";
import QuadraticEquationTab from "../quadraticEquationTab/quadraticEquationTab";
import BurgerMenu from "../burger-menu/burgerMenu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            burgerMenuLinks: ["Quadratic Equations"],
            activeElement: "quadratic_equations",
        }
    }

    setOpen = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    setActiveTab = (activeElement) => {
        this.setState({activeElement});
    }

    render() {
        const {isMenuOpen, burgerMenuLinks, activeElement} = this.state;

        return (
            <div className="app-wrapper">
                <div className="app-overlay"onClick={() => isMenuOpen ? this.setOpen() : null}>
                    <Navigation open={isMenuOpen} setOpen={this.setOpen}/>
                    <QuadraticEquationTab activeTab={activeElement} setActiveTab={this.setActiveTab}/>
                </div>

                <BurgerMenu open={isMenuOpen} burgerMenuLinks={burgerMenuLinks} activeTab={activeElement}/>
            </div>
        );
    }
}

export default App;