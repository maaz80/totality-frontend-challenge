'use client'
import React, { useState } from 'react'
import CutEye from '../images/CutEye.png'
import Google from '../images/Google.webp'
import Facebook from '../images/Facebook.png'
import Lock from '../images/Lock.png'
import Password from '../images/Password.png'
import image16 from '../images/image16.avif'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const [isSignIn, setIsSignIn] = useState(true)
    const [isJoinIn, setIsJoinIn] = useState(false)
    const [ispassword, setIspassword] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [username, setUsername] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const handleSignIn = () => {
        setIsSignIn(!isSignIn)
        setIsJoinIn(false)
    }

    const handleJoinIn = () => {
        setIsJoinIn(!isJoinIn)
        setIsSignIn(false)
    }
    const handlepassword = () => {
        setIspassword(!ispassword)
    }

    // SIgnUp function 
    const handleSubmit = () => {
        if (password) {
            const formData = { username, email, number };
            localStorage.setItem(password, JSON.stringify(formData));
            alert("Data saved successfully!");
            setEmail('')
            setIspassword('')
            setNumber('')
            setUsername('')
        } else {
            alert("Every field is required");
        }
    };

    // Handle login by checking password in localStorage
    const handleLogin = () => {
        if (password) {
            const storedData = localStorage.getItem(password);
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setEmail(parsedData.email);
                // Setting the username to localStorage Currently i dont have the backend so i did this 
                const username = parsedData.username;
                localStorage.setItem('username', username);
                setIsLogin(true)
                // Setting Loggin true 
                localStorage.setItem('LoggedIn', true)
                router.push('/')
            } else {
                alert("Invalid password. Data not found.");
                setIsLogin(false)
                localStorage.setItem('LoggedIn', false)
            }
        } else {
            alert("Please enter your password.");
        }
    };


    return (
        <div className='poppins-regular '>
            <div className=' flex flex-col md:flex-row justify-between items-start w-[100%]'>
                <div className='w-[100%] lg:w-[65%] mt-20 ml-0 md:ml-10 overflow-x-hidden'>
                    <Image src={image16} alt='Random Property' className='w-[100%] rounded-md' priority={true} />
                </div>
                {isSignIn && (
                    <div className='w-[100%] lg:w-[35%] signIn mt-5 md:mt-20 ml-0 md:ml-0 mr-0 md:mr-10 border border-gray-400 rounded-md h-[580px] p-3 md:p-10 overflow-x-hidden'>
                        <div className='flex gap-7 text-2xl poppins-semibold'>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer' onClick={handleSignIn}>Sign Up</div>
                            <div className='text-gray-400 cursor-pointer' onClick={handleJoinIn}>Log In</div>
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
                                <div className=' poppins-semibold'>Or Sign with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[26%] lg:w-[34%]'></div>
                            </div>
                        </div>

                        <div className='w-[100%] flex flex-col gap-3'>
                            <input
                                type="text"
                                className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                placeholder='Name'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className='relative w-[100%]'>
                                <input
                                    type={ispassword ? 'password' : 'text'}
                                    className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
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
                                className='w-[100%] border rounded-md py-1 pl-3 '
                                placeholder='Number'
                                minLength={10}
                                maxLength={10}
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>

                        <div className='w-[100%] my-5'>
                            <div className='w-[100%] flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <input type="checkbox" />
                                    <div className='text-[11px] poppins-regular'>Remember Me</div>
                                </div>
                                <div className='flex'>
                                    <Image src={Lock} alt="Lock" priority={true} />
                                    <button className='text-[11px] poppins-regular'>Forgot Password?</button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%]'>
                            <button
                                className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'
                                onClick={handleSubmit}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                )}


                {isJoinIn &&
                    <div className='w-[100%] lg:w-[35%] JoinIn mt-5 md:mt-20 ml-0 md:ml-0 mr-0 md:mr-10 border border-gray-400 rounded-md h-[580px] p-3 md:p-10 overflow-x-hidden'>
                        <div className='flex gap-7 text-2xl poppins-semibold'>
                            <div className='text-gray-400 cursor-pointer' onClick={handleSignIn}>Sign Up</div>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer'>Log In</div>
                        </div>
                        <div className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with google</button>
                                <Image className='absolute w-7 left-4 top-1' src={Google} alt="Google" priority={true} />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with facebook</button>
                                <Image className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" priority={true} />
                            </div>
                        </div>
                        <div className='w-[100%] flex my-5'>
                            <div className='w-[100%] flex justify-center items-center gap-5'>
                                <div className='bg-gray-600 min-h-0.5 w-[26%] lg:w-[34%]'></div>
                                <div className=' poppins-semibold'>Or Sign with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[26%] lg:w-[34%]'></div>
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col gap-3'>
                            <input type="text" className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Email' />
                            <div className='relative w-[100%]'>
                                <input
                                    type={ispassword ? 'password' : 'text'}
                                    className='w-[100%] border rounded-md py-1 pl-3 poppins-regular'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Image src={ispassword ? Password : CutEye} alt="Password" className='absolute right-3 top-2 cursor-pointer' onClick={handlepassword} priority={true} />
                            </div>
                        </div>
                        <div className='w-[100%] my-2'>
                            <div className='w-[100%] flex justify-end items-center'>
                                <div className='text-[11px] text-gray-500 poppins-regular'>
                                    Password Strength
                                </div>
                            </div>
                            <div className='w-[100%] my-5 text-center'>
                                <div className='w-[100%] text-[9px] lg:text-[11px] text-gray-500 poppins-regular'>
                                    By continuing, you agree to our <span className='text-black text-[10px] lg:text-[12px]'>Terms of Service</span> and <span className='text-black text-[10px] lg:text-[12px]'>Privacy Policy.</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] my-5'>
                            <button
                                className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'
                                onClick={handleLogin}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default page
