import React, {useState, useEffect, useRef} from "react";
import * as FaIcons from "react-icons/fa";
import {AiOutlineLogin } from "react-icons/ai"
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
 const menuRef = useRef();

 useEffect(() => {
   const handler = (e) => {
     if (!menuRef.current.contains(e.target)) {
       setOpen(false);
     }
   };

   document.addEventListener("mousedown", handler);

   return () => {
     document.removeEventListener("mousedown", handler);
   };
 }); 
  return (
    
    <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaIcons.FaUser className="user-img" />
        </div>

        <div className={`dropdown_menu ${open ? "active" : "inactive"}`}>
          <h3>
            Bienvenido
            <br />
            <span>{username}</span>
          </h3>
          <ul>
            <li className="dropdown-item">
              <AiOutlineLogin className="img" />
              <a className="a" onClick={handleClick}>Cerrar sesion</a>
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default DropdownMenu;