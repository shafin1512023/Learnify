import { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./navBarStyle.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [navItems, setNavItems] = useState([
        { key: 1, active: false, item: "Posts", link: "/posts" },
        { key: 2, active: false, item: "Chats", link: "/chats" },
        { key: 3, active: false, item: "Courses", link: "/courses" },
        { key: 4, active: false, item: "Profile", link: "/profile" },
    ]);

    useEffect(() => {
        const newNavItems = [...navItems];
        newNavItems.forEach((navItem) => (navItem.active = false));
        newNavItems.forEach((navItem) =>
            navItem.link == window.location.pathname
                ? (navItem.active = true)
                : null
        );
        setNavItems(newNavItems);
    }, []);

    function handleClick(index) {
        const newNavItems = [...navItems];
        newNavItems.forEach((navItem) => (navItem.active = false));
        newNavItems.forEach((navItem) =>
            navItem.key == index ? (navItem.active = true) : null
        );
        setNavItems(newNavItems);

        // if (index == 4) {
        //     document.documentElement.requestFullscreen();
        // }
    }

    return (
        <div className="navbar">
            {navItems.map((navItem) => (
                <NavItem
                    key={navItem.key}
                    index={navItem.key}
                    active={navItem.active}
                    item={navItem.item}
                    link={navItem.link}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default NavBar;
