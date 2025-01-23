import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
const Register = () => {
    const [message, setMessage] = useState("");
    const {registerUser, signInWithGoogle} = useAuth();
    console.log(registerUser)
        const {
              register,
              handleSubmit,
              watch,
              formState: { errors },
            } = useForm()
    
            //  register user

            const onSubmit = async (data) => {
                 console.log(data)
            try {
                await registerUser(data.email,  data.password);
                alert ("User registered successfully")
            } catch (error) {
                setMessage("Please provide a valid email and password!")
            };

            const handleGoogleSignIn = async () => {
                 
            }
    
  return (
    <div className='h-[calc(100vh - 120px)] flex justify -center'>
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
         <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label className= 'block text-gray-700 text-sm font-bold mb-2'
                htmlFor="email">Email</label>
                <input 
                {...register("email", { required: true })}
                type="text" name="" id="email" placeholder='Email Address'
                className='shadow appearance-none border rounded w-full py-2 px-3
                leading-tight focus:outline-none focus:shadow' />
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3' >email or password incorrect! please enter a valid email and passwor</p>
            }
            <div className='mb-4'>
                <label className= 'block text-gray-700 text-sm font-bold mb-2'
                htmlFor="email">Password</label>
                <input 
                {...register("password", { required: true })}
                type="text" name="" id="password" placeholder='password' required
                className='shadow appearance-none border rounded w-full py-2 px-3
                leading-tight focus:outline-none focus:shadow' />
            </div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
                px-8 rounded focus:out'>Register</button>
            </div>

         </form>
         <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please Login<Link 
         to="/login" className='text-blue-500 hover:text-blue-700'> Login</Link></p>

            {/* google sign-in */}
            <div className='mt-4'>
                <button 
                onclick = {handleGoogleSignin} 
                className='w-full flex flex-wrap gap-1 items-center
                bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                focus:outlin-none'>
                    <FaGoogle className='mr-2'/>
                    Sign in with Google
                    </button>
            </div>
            <p className='mt-5 text-center text-gray-500 text-xs'>TheAlchemist Book Store. All rights reserved</p>
    </div>
</div>
  )
}
}
export default Register