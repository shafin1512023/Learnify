import "./navItemStyle.css";

const NavItem = ({ index, active, item, onClick }) => {
    return (
        <div
            onClick={() => {
                onClick(index);
            }}
            className={`nav-item ${active ? "active" : null}`}
        >
            {item}
        </div>
    );
};

export default NavItem;
