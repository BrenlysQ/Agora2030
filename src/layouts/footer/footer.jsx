import Logo from "../../assets/logo.png";
import fb from "../../assets/social/fb.png"
import ig from "../../assets/social/ig.png";
import medium from "../../assets/social/medium.png";
import linkedin from "../../assets/social/linkedin.png";
import spotify from "../../assets/social/spotify.png";
import yt from "../../assets/social/yt.png";

import { useNavigate } from "react-router-dom";
function Footer() {
   const navigate = useNavigate();
   const toLink= (param) => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    navigate(param);
   }
 return (
   <div className="w-3/4 m-auto flex-column lg:flex lg:justify-between mt-20">
     <div className="flex-row">
       <img src={Logo} className="w-40" onClick={() => toLink("/")} />
        <p className="text-xs w-3/4 mt-4 lg:mt-64">
        Agora Partnerships® All Rights Reserved.Reg. U.S. Pat. and TM Off
        <span className="text-rose-900 cursor-pointer text-xs"> Política de Privacidad</span></p>
     </div>    
     <div className="m-10">
       <h3 className="leading-loose cursor-pointer">Quiénes somos</h3>
       <h3 className="leading-loose cursor-pointer">Programas</h3>
       <h3 className="leading-loose cursor-pointer">Impacto</h3>
       <h3 className="leading-loose cursor-pointer">Súmate</h3>
       <h3 className="leading-loose cursor-pointer" onClick={() => toLink('/blog')}>Blog</h3>
       <h3 className="leading-loose cursor-pointer">Recursos</h3>
       <h3 className="leading-loose cursor-pointer">Sedes</h3>
       <h3 className="leading-loose cursor-pointer">Change Lab</h3>
     </div>
     <div className="m-10 leading-loose ">
      <button type="button" className="bg-rose-700 text-white rounded-2xl px-4 text-md"> Donar</button>
      <h3 className="font-bold cursor-pointer">Suscribirme al newsletter</h3>
     </div>
      <div className="m-10">
        <div className="flex">
          <img src={fb} className="w-8 m-2 " /> 
          <img src={ig} className="w-8 m-2 " />          
          <img src={medium} className="w-8 m-2 " />  
        </div>
        <div className="flex">
          <img src={spotify} className="w-8 m-2 " />         
          <img src={linkedin} className="w-8 m-2 " /> 
          <img src={yt} className="w-8 m-2 " /> 
        </div>
        <p className="lg:mt-48">info@agora2030.org</p>
      </div>
   </div>
 );
}

export default Footer;
