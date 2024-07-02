import React, { useState } from 'react'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import Container from '../layers/Container'
import HeadingForPages from '../layers/HeadingForPages'
import { FaEye, FaEyeLowVision } from 'react-icons/fa6'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import InputFieldText from '../layers/InputFieldText'
import InputFieldDropDown from '../layers/InputFieldDropDown'
import InputFieldPassword from '../layers/InputFieldPassword'
import { Link } from 'react-router-dom'
import FromError from '../layers/FromError'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    let [show1,setshow1] = useState('')
    let [showerr1,setshowerr1] = useState('')
    let changeshow1 = (e)=>{
        setshow1(e.target.value);
        setshowerr1("")
    }
    let [show2,setshow2] = useState('')
    let [showerr2,setshowerr2] = useState('')
    let changeshow2 = (e)=>{
        setshow2(e.target.value);
        setshowerr2("")
    }
    let submit = ()=>{
        if (!show1) {
            setshowerr1("Email is required")
        }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(show1)){
            setshowerr1("Email is not currect")
        }
        if (!show2) {
            setshowerr2("Password is required")
        }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(show2)) {
         setshowerr2("1 lowercase, 1 uppercase, 1 numeric character, one special character and more then eight characters is required")}
         
         console.log("Hello");
         
        if (show1 && show2  && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/ ) {
            signInWithEmailAndPassword(auth, show1 , show2)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
            if (user) {
                toast('☑ Registration Successful!')
                setspinner(false)
                    setTimeout(() => {
                        navigate("/")
                    }, 2000);
                    setshow1("")
                    setshow2("")
            }
              // ...
            })
            .catch((error) => {
                if (error.code.includes("auth/email-already-in-use")) {
                    setshowerr1("Email Already In Use")
                }
             })
              }
        }
  return (
    <>
        <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="light"
/>
        <Container className="">
            <HeaderForBreadcrumb text="Login"/>
            <div className="px-3 lg:px-0 'border-b border-[#F0F0F0]">
                <div className='lg:pb-[62px] md:pb-[52px] sm:pb-[44px] pb-8 border-b border-[#F0F0F0] lg:mb-[57px] md:mb-12 sm:mb-8 mb-6'>
                <p className='max-w-[644px] font-DM lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                </div>
                {/* ============================================================================= */}
            <div className="border-b border-[#F0F0F0] lg:mb-14 md:mb-9 sm:mb-7 mb-5">
            <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6'>
                    <HeadingForPages text="Returning Customer"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                    <InputFieldText value={show1} onchange={changeshow1} label="Email address" id="Email address" palceholder="company@domain.com">
                        <FromError err={showerr1}/>
                    </InputFieldText>
                    <InputFieldPassword value={show2} onchange={changeshow2} classNameforplaceholder="placeholder:font-bold placeholder:text-[30px] placeholder:text-[#767676]" label="Password" id="Password" placeholder=". . . . . . .">
                        <FromError err={showerr2}/>
                    </InputFieldPassword>                
                    </div>
                </div>
                    <Link to="">
                        <ButtonForCartDropdown onclick={submit} text="Log in" className="w-[200px] py-3 lg:mb-[140px] md:mb-25 sm:mb-20 mb-15"/>
                    </Link>
            </div>
            </div>
            <div className="px-3 lg:px-0">
                 <HeadingForPages text="New Customer"/>
                 <p className='max-w-[644px] lg:pb-[51px] md:pb-10 sm:pb-7 pb-5 font-DM lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                <Link to="/sign/up">
                <ButtonForCartDropdown  text="Continue" className="w-[200px] py-3 lg:mb-[140px] md:mb-32 sm:mb-24 mb-20"/>
                </Link>
            </div>
        </Container>
    </>
  )
}

export default Login