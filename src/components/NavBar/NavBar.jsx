import { useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./navBarStyle.css";

const NavBar = () => {
    // const [active, setActive] = useState(false);
    const [navItems, setNavItems] = useState([
        { key: 1, active: true, item: "Posts" },
        { key: 2, active: false, item: "Chats" },
        { key: 3, active: false, item: "Courses" },
        { key: 4, active: false, item: "Profile" },
    ]);

    function handleClick(index) {
        const newNavItems = [...navItems];
        newNavItems.forEach((navItem) => (navItem.active = false));
        newNavItems.forEach((navItem) =>
            navItem.key == index ? (navItem.active = true) : null
        );
        setNavItems(newNavItems);

        if (index == 4) {
            document.documentElement.requestFullscreen();
        }
    }

    return (
        <div className="navbar">
            {navItems.map((navItem) => (
                <NavItem
                    key={navItem.key}
                    index={navItem.key}
                    active={navItem.active}
                    item={navItem.item}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default NavBar;
