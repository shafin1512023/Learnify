import { Link } from "react-router-dom";
import "./navItemStyle.css";

const NavItem = ({ index, active, item, link, onClick }) => {
    return (
        <div
            onClick={() => {
                onClick(index);
            }}
            className={`nav-item ${active ? "active" : null}`}
        >
            <Link className="nav-link" to={link}>{item}</Link>
        </div>
    );
};

export default NavItem;
