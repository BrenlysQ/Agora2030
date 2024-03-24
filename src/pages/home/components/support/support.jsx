import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('El campo es requerido'),
    lastName: yup.string().required('El campo es requerido'),
    country: yup.string().required('El campo es requerido'),
    company: yup.string().required('El campo es requerido'),
    profession: yup.string().required('El campo es requerido'),
    email: yup.string().required('El campo es requerido').email('Email incorrecto'),
  })
  .required();

function Support() { 
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    return (
      <div className="mt-12 rounded-xl m-auto py-20 flex justify-between items-center bg-stone-800 ">
        <div className="container mx-64 rounded-xl p-5">
            <h1 className="text-2xl font-bold text-white">Suscríbete a nuestro newsletter</h1>
                <form className="w-full m-auto" onSubmit={handleSubmit((d) => console.log(d))}>
                    <div className="flex gap-16">     
                        <div className=" w-full">
                            <div className="flex-row items-center border-b border-white py-2">
                                <input {...register('name')} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-10 focus:outline-none placeholder:text-white" type="text" placeholder="Nombre *" aria-label="Full name"/> 
                            </div>
                            <p className=" text-red-700">{errors.name?.message}</p>
                            <div className="flex items-center border-b border-white py-2">
                                <input {...register('lastName')}  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-10 focus:outline-none placeholder:text-white" type="text" placeholder="Apellido *" aria-label="Full name"/>
                            </div>
                            <p className=" text-red-700">{errors.lastName?.message}</p>
                            <div className="flex items-center border-b border-white py-2">
                                <input {...register('email')}  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-10 focus:outline-none placeholder:text-white" type="email" placeholder="Correo electronico *" aria-label="Full name"/>
                            </div>
                            <p className=" text-red-700">{errors.email?.message}</p>
                        </div>
                        <div className=" w-full">
                            <div className="flex items-center border-b border-white py-2">
                                <input {...register('profession')}  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-10 focus:outline-none placeholder:text-white" type="text" placeholder="Profesión *" aria-label="Full name"/>
                            </div>
                            <p className=" text-red-700">{errors.profession?.message}</p>
                            <div className="flex items-center border-b border-white py-2">
                                <input {...register('company')}  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-10 focus:outline-none placeholder:text-white" type="text" placeholder="Empresa *" aria-label="Full name"/>
                            </div>
                            <p className=" text-red-700">{errors.company?.message}</p>
                            <div className="flex items-center border-b border-white py-2">
                                <input {...register('country')} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-10 focus:outline-none placeholder:text-white" type="text" placeholder="País *" aria-label="Full name"/>
                            </div> <p className=" text-red-700">{errors.country?.message}</p>
                        </div>
                    </div>
               
                    <div className="mt-5"> 
                        <ReCAPTCHA sitekey="2a1fab639f9c4296af8078950ecb47c9"/>
                    </div>                
                    <input className="bg-rose-700 text-white rounded-3xl px-6 py-2 text-lg mt-10 cursor-pointer" type="submit"/>
                    
                </form>
        </div>
    </div>
    );
  }
  
export default Support