import React, { useContext, useEffect, useState } from 'react';
import "./Header.scss";
import Motion from "../../../assets/img/motion.svg"
import { IoSearchOutline } from 'react-icons/io5';
import { MotionStudyContext } from '../../../context';
import { AiOutlineAlignRight } from 'react-icons/ai';

const Header = () => {
const [activeIndex, setActiveIndex] = useState(null);
const {modal,setModal} =  useContext(MotionStudyContext)
const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Study Abroad", link: "/studyabroad" },
  { name: "Contacts", link: "/contacts" }
];
  useEffect(() => {
  if (modal) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
}, [modal]);
  return (
    <div id="Header">
      <div className="line"></div>
      <div className="container">
        <div className="Header">
          <img src={Motion} alt="img" />
          <div className="Header--nav">
          {menuItems.map((item, idx) => (
    <a
    key={idx}
    href={item.link}
    className={activeIndex === idx ? "active" : ""}
    onClick={() => setActiveIndex(idx)}
  >
    {item.name}
  </a>
))}

          </div>
          <div className="Header--block">
            <div className="Header--Block__search">
              <a><IoSearchOutline /></a>
              <input type="text" placeholder='Поиск...' />
            </div>
            <select>
              <option value="En">EN</option>
              <option value="Ru">RU</option>
              <option value="Kz">KG</option>
            </select>
          </div>
          <div className="Header--menu">
            <a href="#" onClick={() => setModal(true)}><AiOutlineAlignRight /></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
  