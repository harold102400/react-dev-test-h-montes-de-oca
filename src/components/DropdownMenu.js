import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth.actions";
import "../styles/Dropdown.css";

const DropdownMenu = () => {
  const { username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    
    <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaIcons.FaUserAlt className="user-img" />
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            The Kiet
            <br />
            <span>Website Designer</span>
          </h3>
          <ul>
            <li className="dropdownItem">
              <FaIcons.Fa500Px className="img" />
              <a className="a">Cerrar sesion</a>
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default DropdownMenu;
