import React, { useContext, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { PiInstagramLogoFill, PiPhoneCallFill } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import { FaTelegramPlane } from 'react-icons/fa';
import Motion from "../../../assets/img/motion.svg"
import { MotionStudyContext } from '../../../context';
import { BsFillEnvelopeFill } from 'react-icons/bs';
const HeaderMenu = () => {
    const {modal,setModal} = useContext(MotionStudyContext)
    const [activeLanguage, setActiveLanguage] = useState(null); 
    const [activeIndex, setActiveIndex] = useState(null);
    const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Study Abroad", link: "/studyabroad" },
  { name: "Contacts", link: "/contacts" }
];
    return (
       <>
        {
            modal &&  <div className="modal">
                   <div className="line"></div>
                   <div className="modal--top">
                     <img src={Motion} alt="img" />
                     <button onClick={() => setModal(false)}><GrClose /></button>
                   </div>
                   <div className="modal--block">
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
       
                     <div className="modal--block__language">
                       {["EN", "RU", "KG"].map((lang, idx) => (
                         <h3
                           key={idx}
                           className={activeLanguage === idx ? "active" : ""}
                           onClick={() => setActiveLanguage(idx)}
                         >
                           {lang}
                         </h3>
                       ))}
                     </div>
                     <div className="modal--block__icons">
                       <a><FaTelegramPlane /></a>
                       <a><PiInstagramLogoFill /></a>
                       <a><PiPhoneCallFill /></a>
                       <a><BsFillEnvelopeFill/></a>
                     </div>
                   </div>
                 </div>
        }
       </>
    );
};

export default HeaderMenu;