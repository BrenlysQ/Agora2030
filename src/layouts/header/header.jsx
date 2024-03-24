import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'



function Header() {
  const navigate = useNavigate();

 
return (
    <div className='w-3/4 m-auto flex justify-center items-center'>  
          <img src={Logo} className="w-40" onClick={() => navigate('/')}/>       
          <h3 className='cursor-pointer m-5'>Quiénes somos</h3>
          <h3 className='cursor-pointer m-5'>Programas</h3>       
          <h3 className='cursor-pointer m-5'>Impacto</h3>   
          <h3 className='cursor-pointer m-5'>Sumate</h3>
          <h3 className='cursor-pointer m-5'>Blog</h3>
          <h3 className='cursor-pointer m-5'>Recursos</h3>
          <h3 className='cursor-pointer m-5'>Sedes</h3>
          <h3 className='cursor-pointer m-5 font-bold text-blue-900'>Change Lab</h3>
          <button type="button" className="bg-rose-700 text-white rounded-2xl px-6 py-1 text-xs items-center"> Donar</button>
    </div>
  )
}

export default Header