'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Importing react-hook-form
import CutEye from '../images/CutEye.png';
import Google from '../images/Google.webp';
import Facebook from '../images/Facebook.png';
import Lock from '../images/Lock.png';
import Password from '../images/Password.png';
import image16 from '../images/image16.avif';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const [isSignIn, setIsSignIn] = useState(true);
    const [isJoinIn, setIsJoinIn] = useState(false);
    const [ispassword, setIspassword] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState('');

    // Setting up react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleSignIn = () => {
        setIsSignIn(!isSignIn);
        setIsJoinIn(false);
    };

    const handleJoinIn = () => {
        setIsJoinIn(!isJoinIn);
        setIsSignIn(false);
    };

    const handlepassword = () => {
        setIspassword(!ispassword);
    };

    // SignUp function 
    const onSubmit = (data) => {
        const { username, email, password, number } = data;
        const formData = { username, email, number };
        localStorage.setItem(password, JSON.stringify(formData));
        alert("SignUp successful!");
        reset();
    };

    // Handle login by checking password in localStorage
    const handleLogin = (data) => {
        const { password } = data;
        const storedData = localStorage.getItem(password);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            localStorage.setItem('username', parsedData.username);
            setIsLogin(true);
            localStorage.setItem('LoggedIn', true);
            router.push('/');
        } else {
            alert("Invalid password. Data not found.");
            setIsLogin(false);
            localStorage.setItem('LoggedIn', false);
        }
    };

    return (
        <div className='poppins-regular'>
            <div className='flex flex-col md:flex-row justify-between items-start w-[100%]'>
                <div className='w-[100%] lg:w-[65%] mt-20 ml-0 md:ml-10 overflow-x-hidden'>
                    <Image src={image16} alt='Random Property' className='w-[100%] rounded-md' priority={true} />
                </div>

                {isSignIn && (
                    <div className='w-[100%] lg:w-[35%] signIn mt-5 md:mt-20 ml-0 md:ml-0 mr-0 md:mr-10 border border-gray-400 rounded-md h-[580px] p-3 md:p-10 overflow-x-hidden'>
                        <div className='flex gap-7 text-2xl poppins-semibold'>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer' onClick={handleSignIn}>Sign Up</div>
                            <div className='text-gray-400 cursor-pointer' onClick={handleJoinIn}>Log In</div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with Google</button>
                                <Image className='absolute w-7 left-4 top-1' src={Google} alt="Google" priority={true} />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with Facebook</button>
                                <Image className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" priority={true} />
                            </div>

                            <div className='relative w-[100%]'>
                                <input
                                    type='text'
                                    className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                    placeholder='Name'
                                    {...register('username', { required: 'Username is required' })}
                                />
                                {errors.username && <p className='text-red-500 text-xs'>{errors.username.message}</p>}
                            </div>
                            <input
                                type='email'
                                className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                placeholder='Email'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}

                            <div className='relative w-[100%]'>
                                <input
                                    type={ispassword ? 'password' : 'text'}
                                    className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                    placeholder='Password'
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 7,
                                            message: 'Password must be at least 7 characters'
                                        },
                                        pattern: {
                                            value: /[^A-Za-z0-9]/,
                                            message: 'Password must contain at least one special character'
                                        }
                                    })}
                                />
                                {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                                <Image
                                    src={ispassword ? Password : CutEye}
                                    alt="Password"
                                    className='absolute right-3 top-2 cursor-pointer'
                                    onClick={handlepassword}
                                    priority={true}
                                />
                            </div>

                            <input
                                type="number"
                                className='w-[100%] border rounded-md py-1 pl-3'
                                placeholder='Number'
                                {...register('number', {
                                    required: 'Number is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Number must be 10 digits'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Number must be 10 digits'
                                    }
                                })}
                            />
                            {errors.number && <p className='text-red-500 text-xs'>{errors.number.message}</p>}

                            <div className='w-[100%] my-5'>
                                <button
                                    type='submit'
                                    className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {isJoinIn && (
                    <div className='w-[100%] lg:w-[35%] JoinIn mt-5 md:mt-20 ml-0 md:ml-0 mr-0 md:mr-10 border border-gray-400 rounded-md h-[580px] p-3 md:p-10 overflow-x-hidden'>
                        <div className='flex gap-7 text-2xl poppins-semibold'>
                            <div className='text-gray-400 cursor-pointer' onClick={handleSignIn}>Sign Up</div>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer'>Log In</div>
                        </div>
                        <div className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with Google</button>
                                <Image className='absolute w-7 left-4 top-1' src={Google} alt="Google" priority={true} />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with Facebook</button>
                                <Image className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" priority={true} />
                            </div>
                        </div>
                        <div className='w-[100%] flex my-5'>
                            <div className='w-[100%] flex justify-center items-center gap-5'>
                                <div className='bg-gray-600 min-h-0.5 w-[26%] lg:w-[34%]'></div>
                                <div className=' poppins-semibold'>Or Sign in with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[26%] lg:w-[34%]'></div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col w-[100%] mt-10 gap-3'>
                            <input
                                type="text"
                                className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                placeholder='Email'
                                {...register('email', { required: 'Email is required' })} // Add email validation if needed
                            />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>} 

                            <div className='relative w-[100%]'>
                                <input
                                    type={ispassword ? 'password' : 'text'}
                                    className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                    placeholder='Password'
                                    {...register('password', { required: 'Password is required' })}
                                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                                />
                                <Image src={ispassword ? Password : CutEye} alt="Password" className='absolute right-3 top-2 cursor-pointer' onClick={handlepassword} priority={true} />
                            </div>
                            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

                            <div className='w-[100%] my-5'>
                                <button
                                    type='submit'
                                    className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;