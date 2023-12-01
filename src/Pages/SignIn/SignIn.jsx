import Navbar2 from "../Home/Navbar/Navbar2/Navbar2";
import loginImg from "../../../public/assets/images/login/login.svg"
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import axios from "axios";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // const user = { email }
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : "/")

                // axios.post(`https://car-doctor-server-beta-eight.vercel.app/jwt`, user, {withCredentials: true})
                //     .then(res => {
                //         console.log(res.data);
                //         if(res.data.success){
                //             navigate(location?.state ? location.state : "/")
                //         }
                //     })
                //     .then(error => {
                //         console.log(error);
                //     })

                


            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div><Navbar2></Navbar2></div>
                <div className="hero min-h-screen">
                    <div className="hero-content w-full flex-col lg:flex-row gap-24 justify-between">
                        <div className="text-center lg:text-left flex-1">
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card flex-1 flex-shrink-0 w-full max-w-lg border-2 border-[#D0D0D0] p-16 rounded-xl">
                            <form onSubmit={handleSignIn} className="card-body">
                                <h1 className="text-4xl text-[#444] font-bold text-center mb-12 space-y-5">Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#FF3811] text-white font-bold " type="submit" value="Sign In" />
                                </div>
                            </form>
                            <p className="text-center text-[#444]">Or Sign In with</p>
                            <div className="flex  gap-5 items-center justify-center mt-8">
                                <button className='text-blue-800 btn btn-circle text-3xl'><FaFacebook></FaFacebook></button>
                                <button className='text-blue-600 btn btn-circle text-3xl'><FaLinkedin></FaLinkedin></button>
                                <button className='text-[#1DA1F2] btn btn-circle text-3xl'><FaGoogle></FaGoogle></button>
                            </div>
                            <p className="text-[#737373] text-center mt-8">Have an account? <Link to="/signUp"><span className="text-[#FF3811]">Sign Up</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;