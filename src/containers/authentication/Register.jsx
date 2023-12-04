import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { path } from "../../utils/Variables";
import Logo from "../../assets/images/login.png";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        cin: "",
        email: "",
        nom: "",
        prenom: "",
        birthday: "",
        phone: "",
        password: "",
        confirmPassword: "",
        avatar: "avatar.png",
        role: "student",
    });

    const [errors, setErrors] = useState({
        cin: null,
        email: null,
        nom: null,
        prenom: null,
        birthday: null,
        phone: null,
        password: null,
        confirmPassword: null,
        role: 'student',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.password !== user.confirmPassword) {
            return swal("Error!", "Passwords do not match", "error");
        }

        try {
            const response = await fetch(`${path}user/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const result = await response.json();

            console.log(result);
            if (result.success === true) {
                swal("Success!", result.message, "success");
                return navigate("/login");
            } else {
                return swal("Error!", result.message, "error");
            }
        } catch (error) {
            console.error(error);
            return swal(
                "Error!",
                "Something went wrong. Please try again later.",
                "error"
            );
        }
    };

    return (
        <div className=" h-fit text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 border bg-white shadow-md sm:rounded-lg flex justify-center flex-1">
                <div className="flex flex-col lg:flex-row w-full h-fit ">
                    <div className="w-full lg:w-3/5">
                        <div className="w-full self-start">
                            <img src={Logo} className="w-32 mx-auto" alt="" />
                        </div>
                        <div className="mt-6 px-10 lg:p-4 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.cin
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="number"
                                                name="cin"
                                                value={user.cin}
                                                onChange={handleChange}
                                                placeholder="CIN"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.cin}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.email
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="email"
                                                name="email"
                                                value={user.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.email}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.nom
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="text"
                                                name="nom"
                                                value={user.nom}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.nom}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.prenom
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="text"
                                                name="prenom"
                                                value={user.prenom}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.prenom}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.birthday
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="date"
                                                name="birthday"
                                                value={user.birthday}
                                                onChange={handleChange}
                                                placeholder="Address"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.birthday}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.phone
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="phone"
                                                name="phone"
                                                value={user.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.phone}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.password
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="password"
                                                name="password"
                                                value={user.password}
                                                onChange={handleChange}
                                                placeholder="Password"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.password}
                                            </span>
                                        </div>
                                        <div className="">
                                            <input
                                                className={`w-full px-4 py-2 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${errors.confirmPassword
                                                    ? " bg-red-50 border-2 border-red-700"
                                                    : "bg-gray-100 border border-gray-200 "
                                                    }`}
                                                type="password"
                                                name="confirmPassword"
                                                value={user.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Confirm Password"
                                                required
                                            />
                                            <span className="text-sm text-red-700 font-sm -mt-1">
                                                {errors.confirmPassword}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center mt-6">
                                        {/* <button
                                            type="submit"
                                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                                        >
                                            Sign Up
                                        </button> */}
                                        <button
                                            type="submit"
                                            className="px-20 tracking-wide font-semibold bg-indigo-500 text-gray-100  py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <svg
                                                className="w-6 h-6 -ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">Sign In</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="flex mt-2 mb-4 justify-center text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link to="/login" className="ml-1 text-blue-700">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-none hidden lg:block lg:w-2/5 rounded-r-lg bg-cover bg-center  bg-register-pic" />


                </div>
            </div>
        </div>
    );
};

export default Register;
