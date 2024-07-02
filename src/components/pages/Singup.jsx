import React, { useState } from 'react'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import Container from '../layers/Container'
import HeadingForPages from '../layers/HeadingForPages'
import { FaEye, FaEyeLowVision } from 'react-icons/fa6'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import InputFieldText from '../layers/InputFieldText'
import InputFieldDropDown from '../layers/InputFieldDropDown'
import InputFieldPassword from '../layers/InputFieldPassword'
import { Link, useNavigate } from 'react-router-dom'
import FromError from '../layers/FromError'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { DNA } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Singup = () => {
 let [cheackbox, setcheackbox] = useState(false)
 let [cheackbox1, setcheackbox1] = useState(false)
    let [spinner,setspinner] = useState(true)
    let navigate = useNavigate()
    let [show2,setshow2] = useState('')
    let [showerr2,setshowerr2] = useState('')
    let changeshow2 = (e)=>{
        setshow2(e.target.value);
        setshowerr2("")
    }
    let [show3,setshow3] = useState('')
    let [showerr3,setshowerr3] = useState('')
    let changeshow3 = (e)=>{
        setshow3(e.target.value);
        setshowerr3("")
    }
    let [show4,setshow4] = useState('')
    let [showerr4,setshowerr4] = useState('')
    let changeshow4 = (e)=>{
        setshow4(e.target.value);
        setshowerr4("")
    }
    let [show5,setshow5] = useState('')
    let [showerr5,setshowerr5] = useState('')
    let changeshow5 = (e)=>{
        setshow5(e.target.value);
        setshowerr5("")
    }
    let [show6,setshow6] = useState('')
    let [showerr6,setshowerr6] = useState('')
    let changeshow6 = (e)=>{
        setshow6(e.target.value);
        setshowerr6("")
    }
    let [show7,setshow7] = useState('')
    let [showerr7,setshowerr7] = useState('')
    let changeshow7 = (e)=>{
        setshow7(e.target.value);
        setshowerr7("")
    }    
    let [show8,setshow8] = useState('')
    let [showerr8,setshowerr8] = useState('')
    let changeshow8 = (e)=>{
        setshow8(e.target.value);
        setshowerr8("")
    }
    let [show9,setshow9] = useState('')
    let [showerr9,setshowerr9] = useState('')
    let changeshow9 = (e)=>{
        setshow9(e.target.value);
        setshowerr9("")
    }    
    let [show10,setshow10] = useState('')
    let [showerr10,setshowerr10] = useState('')
    let changeshow10 = (e)=>{
        setshow10(e.target.value);
        setshowerr10("")
    }
    let [show11,setshow11] = useState('')
    let [showerr11,setshowerr11] = useState('')
    let changeshow11 = (e)=>{
        setshow11(e.target.value);
        setshowerr11("")
    }




    const auth = getAuth();
    let [show,setshow] = useState('')
    let [showerr,setshowerr] = useState('')
    let changeshow = (e)=>{
        setshow(e.target.value);
        setshowerr(" ")
    }
    let submit = ()=>{
        
        if (!show) {
            setshowerr("First Name is required")
        }
        if (!show2) {
            setshowerr2("Last Name is required")
        }
        if (!show3) {
            setshowerr3("Telephone Number is required")
        }
        if (!show4) {
            setshowerr4("Address is required")
        }
        if (!show5) {
            setshowerr5("City Name is required")
        }
        if (!show6) {
            setshowerr6("Post code is required")
        }
        if (!show7) {
            setshowerr7("Division Name is required")
        }
        if (!show8) {
            setshowerr8("District Name is required")
        }
        if (!show9) {
            setshowerr9("Email is required")
        }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(show9)){
            setshowerr9("Email is not currect")
        }
        if (!show10) {
            setshowerr10("Password is required")
        }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(show10)) {
            setshowerr10("1 lowercase, 1 uppercase, 1 numeric character, one special character and more then eight characters is required")
        }
        if (!show11) {
            setshowerr11("Input the password again")
        }
            
        



        // ==================================================================================


        if (show && show2 && show3 && show4 && show5 && show6 && show7 && show8 && show9 && show10 && show11 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/ ) {
            createUserWithEmailAndPassword(auth, show9 , show10)
            .then((userCredential) => {
              // Signed up 
              toast('☑ Registration Successful!')
              const user = userCredential.user;
            setTimeout(() => {
                setshow("")
                setshow2("")
                setshow3("")
                setshow4("")
                setshow5("")
                setshow6("")
                setshow7("")
                setshow8("")
                setshow9("")
                setshow10("")
                setshow11("")
            }, 2000);
              // ...
            })

            .then(()=>{
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                        setTimeout(() => {
                            navigate("/login")
                        }, 2000);
                })
            })
            .catch((error) => {
                if (error.code.includes("auth/email-already-in-use")) {
                    setshowerr9("Email Already In Use")
                }
                setspinner(false)

              // ..
            });
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
            <HeaderForBreadcrumb text="Sign up"/>
            <div className="px-3 lg:px-0">
                <div className='lg:pb-[62px] md:pb-[52px] sm:pb-[44px] pb-8 border-b border-[#F0F0F0] lg:mb-[57px] md:mb-12 sm:mb-8 mb-6'>
                <p className='max-w-[644px] font-DM lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                </div>

                <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6'>
                    <HeadingForPages text="Your Personal Details"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                        <InputFieldText value={show} onchange={changeshow} label={"First Name"} id={"First Name"} palceholder={"First Name"} type={"text"}>
                            <FromError err={showerr}/>
                        </InputFieldText>
                        <InputFieldText value={show2} onchange={changeshow2} label={"Last Name"} id={"Last Name"} palceholder={"Last Name"} type={"text"}>
                            <FromError err={showerr2}/>
                        </InputFieldText>
                        <InputFieldText value={show9} onchange={changeshow9}  label={"Email address"} id={"Email address"} palceholder={"company@domain.com"} type={"Email"}>
                            <FromError err={showerr9}/>
                        </InputFieldText>
                        <InputFieldText value={show3} onchange={changeshow3} label={"Telephone"} id={"Telephone"} palceholder={"Your phone number"} type={"text"}>
                            <FromError err={showerr3}/>
                        </InputFieldText>
                    </div>
                </div>
                {/* -======================================================================== */}
                <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6'>
                    <HeadingForPages text="New Customer"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                        <InputFieldText value={show4} onchange={changeshow4} label={"Address 1"} id={"Address 1"} palceholder={"4279 Zboncak Port Suite 6212"} type={"text"}>
                            <FromError err={showerr4}/>
                        </InputFieldText>
                        <InputFieldText label={"Address 2"} id={"Address 2"} palceholder={"—"} type={"text"}/>
                        <InputFieldText value={show5} onchange={changeshow5} label={"City"} id={"City"} palceholder={"Your city"} type={"text"}>
                            <FromError err={showerr5}/>
                        </InputFieldText>
                        <InputFieldText value={show6} onchange={changeshow6} label={"Post Code"} id={"Post Code"} palceholder={"05228"} type={"text"}>
                            <FromError err={showerr6}/>
                        </InputFieldText>
                        <InputFieldDropDown value={show7} onchange={changeshow7} label={"Division"} id={"Division"} palceholder={"First Name"} type={"text"} Option1="Slect Your Division" Option2="abcd" Option3="abcd" Option4="abcd" Option5="abcd">
                            <FromError err={showerr7}/>
                        </InputFieldDropDown>
                        <InputFieldDropDown value={show8} onchange={changeshow8} label={"District"} id={"District"} palceholder={"First Name"} type={"text"} Option1="Slect Your District" Option2="abcd" Option3="abcd" Option4="abcd" Option5="abcd">
                        <FromError err={showerr8}/>
                        </InputFieldDropDown>
                    </div>
                </div>
                {/* ============================================================================= */}
                <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6 '>
                    <HeadingForPages text="Your Password"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                    <InputFieldPassword value={show10} onchange={changeshow10} label="Password" id="Password" placeholder="Password">
                        <FromError err={showerr10}/>
                    </InputFieldPassword>
                    <InputFieldPassword value={show11} onchange={changeshow11} label="Repeat Password" id="Repeat Password" placeholder="Repeat Password">
                        <FromError err={showerr11}/>
                    </InputFieldPassword>
                    </div>
                </div>
            </div>
            <div className="px-3 lg:px-0">
            <div className=' flex gap-x-[15px] '>
            <div onClick={()=>{setcheackbox1(!cheackbox1)}} className='relative w-4 h-4 border-2 border-[#767676]'>
                <div className={`w-2 h-2 bg-[#767676] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${cheackbox1 ? "absolute":"hidden"}`}></div>
                </div>
                <p className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'>I have read and agree to the Privacy Policy</p>
            </div>
            <div className='flex gap-x-[15px] lg:mb-[27px] md:mb-5 sm:mb-4 mb-3 '>
                <p className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'>Subscribe Newsletter</p>
                <div onClick={()=>{setcheackbox(!cheackbox)}} className='relative w-4 h-4 border-2 border-[#767676]'>
                <div className={`w-2 h-2 bg-[#767676] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${cheackbox ? "absolute":"hidden"}`}></div>
                </div>
                <label className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' htmlFor="yes">Yes</label>
                <div onClick={()=>{setcheackbox(!cheackbox)}} className='relative w-4 h-4 border-2 border-[#767676]'>
                <div className={`w-2 h-2 bg-[#767676] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${cheackbox ? "hidden":"absolute"}`}></div>
                </div>
                <label className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' htmlFor="no">No</label>
            </div>
                <Link to="">
                    {
                        spinner ?
                        <ButtonForCartDropdown onclick={submit}  text="Sign Up" className="w-[200px] py-3 lg:mb-[140px] md:mb-32 sm:mb-24 mb-20"/>
                        :
                        <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                    }

                </Link>
            </div>
        </Container>
    </>
  )
}

export default Singup