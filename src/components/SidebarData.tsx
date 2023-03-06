import React from "react";
import { FaUserPlus, FaUsers } from 'react-icons/fa';



export const SidebarData = [
  {
    title: "Agregar nuevo usuario",
    path: "/adduser",
    icon: <FaUserPlus />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/users",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  
];