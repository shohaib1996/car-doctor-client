import Navbar from "../../Pages/Home/Navbar/Navbar";
import detailsImg from "../../../public/assets/images/checkout/checkout.png"
import Footer from "../../Pages/Home/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const Checkout = () => {
    const clipPathStyle = {
        clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0 100%)',
    };
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    console.log(service);
    const { price, title, _id, img } = service

    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const order = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            price,
            img
        }
        console.log(order);
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data._id){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

    }
    return (
        <div>
            <div className="max-w-6xl mx-auto"><Navbar></Navbar></div>
            <div className="max-w-6xl mx-auto">
                <div className="relative">
                    <img src={detailsImg} alt="" />
                    <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 w-full h-full rounded-xl right-0">
                        <div className="relative h-full w-full">
                            <h1 className="text-4xl font-bold text-white absolute top-32 left-24">Check Out</h1>
                            <p className="text-xl text-white bg-[#FF3811] p-3 w-72 text-center absolute left-[450px] bottom-0" style={clipPathStyle}>Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto bg-[#F3F3F3] mt-32 mb-12 p-28 rounded-lg">
                <form onSubmit={handleCheckout}>
                    <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={`$` + price} placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>

                    </div>
                    <textarea name="message" placeholder="Your Message" className="textarea mt-12 textarea-bordered textarea-lg w-full" ></textarea>

                    <input className="btn mt-5 btn-block bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
                </form>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Checkout;