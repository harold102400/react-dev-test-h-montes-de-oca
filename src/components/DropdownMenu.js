import React from "react";
import { Dropdown } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.actions";
import "../styles/Dropdown.css";

const DropdownMenu = () => {
 
  const dispatch = useDispatch();
  const handleClick = ()=> {
    dispatch(logout())
  }

  return (
      <div className="menu-container">
        
        <Dropdown>
          <Dropdown.Toggle className="btn-none dropdown-toggle1" id="dropdown-basic">
            <FaIcons.FaUserAlt />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="dropdown-item">
              {/* <button onClick={handleClick}>Cerrar sesion</button> */}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  );
};

export default DropdownMenu;
