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
 return (
   <div className="w-3/4 m-auto flex justify-between mt-20">
     <div className="flex-row">
       <img src={Logo} className="w-40" onClick={() => navigate("/")} />
        <p className="text-xs w-3/4 mt-64">
        Agora Partnerships® All Rights Reserved.Reg. U.S. Pat. and TM Off
        <span className="text-rose-900 cursor-pointer text-xs"> Política de Privacidad</span></p>
     </div>    
     <div className="m-10">
       <h3 className="leading-loose cursor-pointer">Quiénes somos</h3>
       <h3 className="leading-loose cursor-pointer">Programas</h3>
       <h3 className="leading-loose cursor-pointer">Impacto</h3>
       <h3 className="leading-loose cursor-pointer">Sumate</h3>
       <h3 className="leading-loose cursor-pointer">Blog</h3>
       <h3 className="leading-loose cursor-pointer">Recursos</h3>
       <h3 className="leading-loose cursor-pointer">Sedes</h3>
       <h3 className="leading-loose cursor-pointer">Change Lab</h3>
     </div>
     <div className="m-10 leading-loose ">
      <button type="button" className="bg-rose-700 text-white rounded-2xl px-4 py-2 text-xs"> Donar</button>
      <h3 className="font-bold cursor-pointer">Suscribirme al newsletter</h3>
     </div>
      <div className="m-10">
        <div className="flex">
          <img src={fb} className="w-8 m-2 " onClick={() => navigate("/")} /> 
          <img src={ig} className="w-8 m-2 " onClick={() => navigate("/")} />          
          <img src={medium} className="w-8 m-2 " onClick={() => navigate("/")} />  
        </div>
        <div className="flex">
          <img src={spotify} className="w-8 m-2 " onClick={() => navigate("/")} />         
          <img src={linkedin} className="w-8 m-2 " onClick={() => navigate("/")} /> 
          <img src={yt} className="w-8 m-2 " onClick={() => navigate("/")} /> 
        </div>
        <p className="mt-48">info@agora2030.org</p>
      </div>
   </div>
 );
}

export default Footer;
