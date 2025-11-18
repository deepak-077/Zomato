function Login(){
    return(
        <div className="flex flex-col  w-md h-[468px] pt-0 px-6 py-6 ">
            <section className="flex justify-between items-center">
                <h2 className="text-[30px]">Login</h2>
                <div className="flex justify-center items-center w-[30px] h-[30px]">
                    <img className="w-6 h-6" src="x.png" alt="" />
                </div>
            </section>

            {/* form */}
            <section className="flex flex-col gap-4 w-[400px] h-[354px] mt-5">

                {/* phone number */}
                <div className="flex justify-between items-center border w-[400px] h-12 p-2 rounded-lg">
                    <div className="flex justify-center items-center w-[107px] h-[30px] ">
                        <div className="flex justify-center items-center w-[97px] h-[30px] ">
                            <div className="w-[68px] h-[30px]  flex items-center justify-between ">
                                <img className="rounded-xl w-[23px] h-5 " src="flag.png" alt="" />
                                <span className="w-10 h-[22px] ">+91</span>
                            </div>
                            <img className="w-4 h-4 " src="down.png" alt="" />
                        </div>

                    </div>

                    <input className="py-0.5 px-[1px] text-start" type="number" name="" id="" placeholder="Phone" />

                </div>

                {/* otp button */}
                <div className="w-[400px] h-11 px-4 bg-[#EF4F5F] text-white text-center rounded-lg"> Send One Time Password </div>

                {/* or */}
                <div className="flex justify-between items-center w-[400px] h-[17px] mb-6">
                    <div className="w-full h-1"></div>
                    <span className="size-[30px] text-[18px]">or</span>
                    <div className="w-full h-1"></div>
                </div>

                {/* sign in with email */}
                <div className="flex items-center justify-center w-[400px] h-[43px] border rounded-lg">
                    <img className="size-[18px]" src="mail.png" alt="" />
                    <span className="w-[129px] h-4 text-sm ml-2">Continue with Email</span>
                </div>

                {/* sign in with google */}
                <div className="w-[400px] h-[68px] ">
                    <div className="flex items-center justify-center w-[400px] h-11 border rounded-lg">
                        <img className="size-[18px]" src="google.png" alt="" />
                        <span className="w-[129px] h-4 text-sm ml-2">Sign in with Google</span>
                    </div>

                </div>

                {/* new to zomato */}
                <div className="w-[400px] h-[17px] mb-6">
                    <span>New to Zomato?</span>
                    <span className="text-[#EF4F5F]">Create account</span>
                </div>
                


            </section>

        </div>
    )

}
export default Login