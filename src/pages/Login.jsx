import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseDB } from '../firebase'
import { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required")
})

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: loginSchema,
        onSubmit: (values) => {
            handleLoginUser(values)
        }
    })

    const handleLoginUser = async (values) => {
        try {
            const { user } = await signInWithEmailAndPassword(firebaseDB, values.email, values.password)

            localStorage.setItem('token', JSON.stringify(user.accessToken))
            localStorage.setItem('user', JSON.stringify({
                name: user.displayName,
                email: user.email,
                imageUrl: user.photoURL
            }))

            navigate('/')
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <section className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden'>
            <div className='container mx-auto px-4 py-10 text-center lg:text-left'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div className='space-y-6 relative z-10'>
                        <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
                            The best offer <br />
                            <span className='text-purple-300'>for your business</span>
                        </h1>
                        <p className='text-lg text-gray-200 opacity-80'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto rerum perspiciatis id reiciendis eveniet in tempora blanditiis! Impedit facilis libero sequi, pariatur tempora corrupti velit quo quis, unde, at deleniti!
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-xl'></div>
                        <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-xl'></div>
                        <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6'>
                            <form onSubmit={formik.handleSubmit} className='sapce-y-4'>
                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-white'>
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        id='email'
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        className='w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring focus:ring-purple-500'
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className='text-red-500 text-sm mt-1'>
                                            {formik.errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className='block text-sm font-medium text-white'>
                                        Password
                                    </label>
                                    <div className='flex items-center mt-1'>
                                        <input
                                            type="text"
                                            id='password'
                                            name='password'
                                            value={formik.values.password}
                                            onChange={formik.handleChange('password')}
                                            onBlur={formik.handleBlur('password')}
                                            className='w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring focus:ring-purple-500'
                                        />
                                        <button
                                            type='button'
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className='bg-gray-700 text-white px-3 rounded-r-lg'
                                        >
                                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                        </button>
                                    </div>
                                    {formik.touched.password && formik.errors.password && (
                                        <p className='text-red-500 text-sm mt-1'>
                                            {formik.errors.password}
                                        </p>
                                    )}
                                </div>
                                <div className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        id='newLetter'
                                        defaultChecked
                                        className='text-purple-500 focus:ring focus:ring-purple-500'
                                    />
                                    <label htmlFor="newLetter" className='ml-2 text-sm text-white'>
                                        Subscribe to our newsletter
                                    </label>
                                </div>
                                <button
                                    type='submit'
                                    className='w-full py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition'
                                >
                                    Sign In
                                </button>
                                <p className='text-white text-sm text-center'>
                                    Don't have an account? {' '}
                                    <Link to='/register' className='text-purple-300 hover:underline'>
                                        Register
                                    </Link>
                                </p>
                                <div className='text-center space-x-2 mt-4'>
                                    <p className='text-white text-sm'>or sign up with:</p>
                                    <button type='button' className='text-blue-600'>
                                        <FaFacebook />
                                    </button>
                                    <button type='button' className='text-blue-600'>
                                        <FaGoogle />
                                    </button>
                                    <button type='button' className='text-blue-600'>
                                        <FaTwitter />
                                    </button>
                                    <button type='button' className='text-blue-600'>
                                        <FaGithub />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login