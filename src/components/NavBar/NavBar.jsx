import useScreenSize from "../../hooks/useScreenSize";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useState } from "react";

export const NavBar = () => {

  const { width } = useScreenSize();
  const [menu, setMenu] = useState(false);


  const handleMenu = () => {
    setMenu(!menu);
  };

  const Menu = () => {
    if (width < 720 && menu === true) {
      return (
        <IoClose className="icon" onClick={handleMenu} />
      )
    } else if (width < 720) {
      return (
        <IoMenuSharp className="icon" onClick={handleMenu} />
      )
    } else {
      return (
        <div className="list-container">
          <span className="list-item">Home</span>
          <span className="list-item">Events</span>
          <span className="list-item">Schedule</span>
        </div>
      )
    }
  }

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <h2 className="logo"><strong>prog</strong>events</h2>
        </div>
        <Menu />
        {width < 720 ? null : <div className="subscribe-container">
          <button className="button">Subscribe</button>
        </div>}
      </div>
      {menu ? <div className="list-menu-container"><div className="list-menu-item-container"><span className="list-menu-item" style={{ marginTop: "1rem" }}>Home</span></div><div className="list-menu-item"><span className="list-menu-item">Events</span></div><div className="list-menu-item"><span className="list-menu-item">Schedule</span></div></div> : null}
    </nav>

  )

};
