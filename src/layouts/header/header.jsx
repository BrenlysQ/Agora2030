import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/logo.png'



function Header() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const Blog = () => {
    setIsOpen(!isOpen)
    navigate('/blog')
  };
 
return (
    <div className=' m-auto shadow-lg w-full'>
      <div className='block lg:hidden'>
        <div className='w-3/4 flex justify-center m-auto'>
          <img src={Logo} className="w-40 cursor-pointer" onClick={() => navigate('/')}/>
          <button className='text-3xl cursor-pointer ' onClick={() => setIsOpen(!isOpen)}>
            &#9776;
          </button>
          <div className={`absolute top-16 left-0 w-full bg-white p-8 ${isOpen ? 'block' : 'hidden'}`}>   
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => setIsOpen(!isOpen)}>Quiénes somos</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => setIsOpen(!isOpen)}>Programas</h3>       
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => setIsOpen(!isOpen)}>Impacto</h3>   
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => setIsOpen(!isOpen)}>Sumate</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => Blog()}>Blog</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => setIsOpen(!isOpen)}>Recursos</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => setIsOpen(!isOpen)}>Sedes</h3>
            <h3 className='cursor-pointer m-1 lg:m-5  font-bold text-blue-900' onClick={() => setIsOpen(!isOpen)}>Change Lab</h3>
            <button type="button" className="bg-rose-700 text-white rounded-2xl px-6 my-4 text-xs items-center" onClick={() => setIsOpen(!isOpen)}> Donar</button>
          </div>  
        </div>
      </div>
      <div className='hidden lg:block'>
      <div className='w-3/4 flex justify-center m-auto'>
          <img src={Logo} className="w-40 cursor-pointer" onClick={() => navigate('/')}/>
            <h3 className='cursor-pointer m-1 lg:m-5 '>Quiénes somos</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 '>Programas</h3>       
            <h3 className='cursor-pointer m-1 lg:m-5 '>Impacto</h3>   
            <h3 className='cursor-pointer m-1 lg:m-5 '>Sumate</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 ' onClick={() => navigate('/blog')}>Blog</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 '>Recursos</h3>
            <h3 className='cursor-pointer m-1 lg:m-5 '>Sedes</h3>
            <h3 className='cursor-pointer m-1 lg:m-5  font-bold text-blue-900'>Change Lab</h3>
            <button type="button" className="bg-rose-700 text-white rounded-2xl px-6 my-4 text-xs items-center"> Donar</button>
          </div>    
      </div>    
    </div>
  )
}

export default Header
