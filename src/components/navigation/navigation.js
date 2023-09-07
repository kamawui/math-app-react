import './navigation.css';
import BurgerIcon from "../icons-svg/burger-icon";
import React, {Component} from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {setOpen, open} = this.props;

        const burgerButtonLeft = open ? "42vw" : "3vw";
        const firstBurgerButtonChildTransform = open ? "rotate(45deg)" : "rotate(0)";
        const secondBurgerButtonChildOpacity = open ? "0" : "1";
        const secondBurgerButtonChildTransform = open ? "translateX(20px)":"translateX(0)";
        const thirdBurgerButtonChildTransform = open ? "rotate(-45deg)" : "rotate(0)";


        return (
            <div className="navigation-wrapper">
                <div className="navigation-menu" >
                    <button className="navigation-burger-button" style={{marginLeft: `${burgerButtonLeft}`}} onClick={() => setOpen()}>
                        <div className="burger-btn-icons" style={{transform: `${firstBurgerButtonChildTransform}`}}>
                        </div>
                        <div className="burger-btn-icons" style={{transform: `${secondBurgerButtonChildTransform}`,
                                                                opacity: `${secondBurgerButtonChildOpacity}`}}>
                        </div>
                        <div className="burger-btn-icons" style={{transform: `${thirdBurgerButtonChildTransform}`}}>
                        </div>
                    </button>
                    <h2 className="navigation-header">Math</h2>
                </div>
            </div>

        )
    }
}

export default Navigation;