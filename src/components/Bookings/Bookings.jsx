import { useContext, useEffect, useState } from "react";

import Navbar from "../../Pages/Home/Navbar/Navbar";
import detailsImg from "../../../public/assets/images/checkout/checkout.png"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../../Pages/Home/Footer/Footer";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hokkes/useAxiosSecure";
// import axios from "axios";


const Bookings = () => {
    const clipPathStyle = {
        clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0 100%)',
    };
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [bookings, setBookings] = useState([])
    // const URL = `https://car-doctor-server-beta-eight.vercel.app/bookings?email=${user?.email}`
    const URL = `/bookings?email=${user?.email}`
    useEffect(() => {
        // axios.get(URL, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data)
        //     })

        // fetch(URL, {credentials: "include"})   //, {credentials: "include"}
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
        //     .catch(error => console.error('Error:', error));
        axiosSecure.get(URL)
        .then(res => setBookings(res.data))

    }, [URL, axiosSecure])
    console.log(bookings);
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                        }

                    })

            }
        })

    }
    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data._id) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = "confirm"
                    console.log(updated);
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
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
                            <h1 className="text-4xl font-bold text-white absolute top-32 left-24">Cart Details</h1>
                            <p className="text-xl text-white bg-[#FF3811] p-3 w-72 text-center absolute left-[450px] bottom-0" style={clipPathStyle}>Home / Product Details</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 mb-12">
                <h1 className="text-2xl font-bold text-center">Total Booking: {bookings.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingsRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                ></BookingsRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Bookings;