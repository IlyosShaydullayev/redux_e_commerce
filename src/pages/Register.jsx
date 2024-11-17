import React, { useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import { firebaseDB } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const registerSchema = yup.object().shape({
    familyName: yup.string().required("First name is required"),
    givenName: yup.string().required("Given name is required"),
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            familyName: "",
            givenName: "",
            email: "",
            password: "",
            name: "",
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            handleRegister({
                ...values,
                name: values.familyName + " " + values.givenName,
            });
        },
    });

    const handleRegister = async (values) => {
        try {
            const { email, password, name } = values;
            const res = await createUserWithEmailAndPassword(
                firebaseDB,
                email,
                password
            );

            await updateProfile(res.user, {
                displayName: name,
                photoURL: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            });
            console.log(res);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 lg:px-20 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold mb-4">
                            The best offer <br />
                            <span className="text-purple-300">for your business</span>
                        </h1>
                        <p className="text-lg opacity-80">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita, tempore mollitia dolorum consequatur nulla quasi ab
                            ipsum nisi dolorem.
                        </p>
                    </div>
                    <div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="border rounded-lg w-full p-2 focus:ring focus:ring-purple-300"
                                            name="familyName"
                                            value={formik.values.familyName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.familyName && formik.errors.familyName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.familyName}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="border rounded-lg w-full p-2 focus:ring focus:ring-purple-300"
                                            name="givenName"
                                            value={formik.values.givenName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.givenName && formik.errors.givenName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.givenName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="border rounded-lg w-full p-2 focus:ring focus:ring-purple-300"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {formik.errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="border rounded-lg w-full p-2 focus:ring focus:ring-purple-300"
                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-3 text-gray-500"
                                            onClick={() =>
                                                setShowPassword((prevState) => !prevState)
                                            }
                                        >
                                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                        </button>
                                    </div>
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {formik.errors.password}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-purple-500 hover:bg-purple-600 text-white w-full py-2 rounded-lg shadow-md transition duration-200"
                                >
                                    Sign up
                                </button>
                            </form>
                            <div className="mt-4 text-center">
                                <p>or sign up with:</p>
                                <div className="flex justify-center gap-4 mt-2">
                                    <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
                                    <FaGoogle className="text-red-500 hover:scale-110 transition" />
                                    <FaTwitter className="text-blue-400 hover:scale-110 transition" />
                                    <FaGithub className="text-gray-800 hover:scale-110 transition" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
