import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import loginImg from "../../../public/assets/images/login/login.svg"
import Navbar2 from "../Home/Navbar/Navbar2/Navbar2";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

                logOut()
                    .then(() => {
                        console.log('Log Out successfully')
                        navigate("/signIn")
                    })
                    .catch(error => {
                        console.error(error);
                    })
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
                            <form onSubmit={handleSignUp} className="card-body">
                                <h1 className="text-4xl text-[#444] font-bold text-center mb-12 space-y-5">Sign Up</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
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
                                    <input className="btn bg-[#FF3811] text-white font-bold " type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="text-center text-[#444]">Or Sign In with</p>
                            <div className="flex  gap-5 items-center justify-center mt-8">
                                <button className='text-blue-800 btn btn-circle text-3xl'><FaFacebook></FaFacebook></button>
                                <button className='text-blue-600 btn btn-circle text-3xl'><FaLinkedin></FaLinkedin></button>
                                <button className='text-[#1DA1F2] btn btn-circle text-3xl'><FaGoogle></FaGoogle></button>
                            </div>
                            <p className="text-[#737373] text-center mt-8">Already have an account?  <Link to="/signIn"><span className="text-[#FF3811]">Sign In</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;