import './burgerMenu.css';
import React, {Component} from "react";

class BurgerMenu extends Component {
    constructor(props) {
        super(props);
    }

    convertTitleToTag = (title) => {
        return title.toLowerCase().split(" ").join("_");
    }

    render() {
        const {open, burgerMenuLinks, activeTab, setActiveTab, closeMenu} = this.props;

        const listLinks = burgerMenuLinks.map(item => {
            const listItemClasses = activeTab === this.convertTitleToTag(item) ? "list-item active" : "list-item";

            return (
                <li className={listItemClasses} onClick={() => {
                    setActiveTab(this.convertTitleToTag(item));
                    closeMenu();
                }}><span>{item}</span></li>
            )
        });

        const burgerMenuTransform = open ? "translateX(0)" : "translateX(-100%)";

        return (
            <div className="burger-menu" style={{transform: `${burgerMenuTransform}`}}>
                <ul className="burger-menu-links">
                    {listLinks}
                </ul>
            </div>
        )
    }


}

export default BurgerMenu;