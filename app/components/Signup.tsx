function Signup({setSignup}:{setSignup:any}){
    return(
        <div className="w-md h-[512px] pt-0 px-6 py-6 ">
            <section className="flex justify-between items-center">
                <h2 className="text-[30px]">Signup</h2>
                <div className="flex justify-center items-center w-[30px] h-[30px]">
                    <img onClick={()=>setSignup(false)} className="w-6 h-6" src="x.png" alt="" />
                </div>
            </section>

            {/* form */}
            <section className="flex flex-col gap-1 w-[400px] h-[394px] mt-6">

                {/* FullName */}
                <div className="flex flex-col  items-center  w-full max-w-[400px] h-16  ">
                    <input className="border rounded-lg w-full p-3 text-start" type="text" name="" id="" placeholder="Full Name"/>
                    <div className="mt-0.5 w-full h-3 text-[11px] text-[#E03546]">Enter a valid name</div>
                </div>

                {/* email */}
                <div className="flex flex-col  items-center  w-full max-w-[400px] h-16  ">
                    <input className="border rounded-lg w-full p-3 text-start" type="text" name="" id="" placeholder="Full Name" />
                    <div className="mt-0.5 w-full h-3 text-[11px] text-[#E03546]">Invalid Email id</div>
                </div>

                <div className="flex w-full h-8 mb-5">
                    <label className="w-[30px] h-6" htmlFor=""></label>
                    <span className="text-xs w-[370px] h-8 text-[#696969]">I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</span>
                </div>

                {/* Create Account */}
                <div className="w-[400px] h-11 px-4 bg-[#EF4F5F] text-white flex justify-center items-center rounded-lg"> Create account </div>

                {/* or */}
                <div className="flex justify-between items-center w-[400px] h-[17px] mb-6">
                    <div className="w-full h-1"></div>
                    <span className="size-[30px] text-[18px]">or</span>
                    <div className="w-full h-1"></div>
                </div>

                {/* sign in with google */}
                <div className="w-[400px] h-[68px] ">
                    <div className="flex items-center justify-center w-[400px] h-11 border rounded-lg">
                        <img className="size-[18px]" src="google.png" alt="" />
                        <span className="w-[129px] h-4 text-sm ml-2">Sign in with Google</span>
                    </div>

                </div>

                {/* Login */}
                <div className="w-[400px] h-[17px] mb-6 text-lg">
                    <span>Already have an account?</span>
                    <span className="text-[#EF4F5F]">Log in</span>
                </div>
                
            </section>

        </div>
    )

}
export default Signup