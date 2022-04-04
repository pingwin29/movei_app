import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import context from "../../contextApi/context";
import "./SideBar.css";
import { sideBarData } from "./sideBarData";

const SideBar = () => {
  const { sideBar, showSideBar } = useContext(context);
  const clickHandler = () => {
    showSideBar();
  };
  return (
    <div className={`sidebar_container d-none d-md-block ${sideBar ? "activeSideBar" : ""} `}>
      <div className="bar">
        <h5>
          Movie <span> Center</span>
        </h5>
        <div className="d-inline-block d-md-none p-2 text-white mb-3" onClick={clickHandler}>
          <i className="fa-solid fa-times"></i>
        </div>
      </div>
      <ul className="sidebar_nav">
        {sideBarData.map((info, index) => {
          return <NavLink key={index} {...info} />;
        })}
      </ul>
    </div>
  );
};

const NavLink = ({ menu, type, subMenu, Icon, path }) => {
  const [expand, setExpand] = useState(false);
  const { sideBar, showSideBar, search, toggleSearch } = useContext(context);

  const location = useLocation().pathname;
  const active = location.length === 1 ? "home" : location.split("/")[1];

  const clickHandler = () => {
    search && toggleSearch();
    showSideBar();
  };
  return (
    <li className={`sidebar_nav_item ${menu.toLowerCase() == active ? "active" : null}`}>
      {type == "normal" && (
        <Link to={path} onClick={clickHandler}>
          <i className={`fa-solid ${Icon} me-3`}></i> {menu}
        </Link>
      )}

      {type == "dropDown" && (
        <>
          <Link
            to="#"
            className="menu"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <span>
              <i className={`fa-solid ${Icon} me-3`}></i> {menu}
            </span>
            {expand ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>

          <SubMenu expand={expand} subMenu={subMenu} />
        </>
      )}
    </li>
  );
};
const SubMenu = ({ expand, subMenu }) => {
  const { sideBar, showSideBar, search, toggleSearch } = useContext(context);
  const clickHandler = () => {
    search && toggleSearch();
    showSideBar();
  };
  return (
    <ul className={`${expand ? "active" : null} submenu_nav`}>
      {subMenu.map((data, index) => {
        return (
          <li key={index} className="submenu_nav_item">
            <Link className="" to={data.path} onClick={clickHandler}>
              {data.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default SideBar;
