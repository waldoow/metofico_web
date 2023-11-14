import React from 'react'
import { useFormik } from "formik";

const Login: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => console.log(values)
    })

    return (
        <section
            className='h-screen flex flex-col items-center justify-center bg-coolGray-900'
            style={{
                backgroundImage: 'url("flex-ui-assets/elements/pattern-dark.svg")',
                backgroundPosition: 'center',
            }}
        >
            <div className='container px-4 mx-auto'>
                <div className='relative max-w-xl mx-auto pt-14 pb-16 px-8 bg-white rounded-2xl'>
                    <a
                        className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-block'
                        href='#'
                    >
                        <img
                            className='h-16'
                            src='flex-ui-assets/logos/flex-circle-green.svg'
                            alt=''
                        />
                    </a>
                    <div className='max-w-sm mx-auto'>
                        <div className='mb-6 text-center'>
                            <h3 className='mb-4 text-2xl md:text-3xl font-bold'>
                                Sign in to your account
                            </h3>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='mb-6'>
                                <label
                                    className='block mb-2 text-coolGray-800 font-medium'
                                    htmlFor='email'
                                >
                                    Email
                                </label>
                                <input
                                    className='appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg drop-shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
                                    type='email'
                                    placeholder='dev@shuffle.dev'
                                    id='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='block mb-2 text-coolGray-800 font-medium'
                                    htmlFor='password'
                                >
                                    Password
                                </label>
                                <input
                                    className='appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg drop-shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
                                    type='password'
                                    placeholder='************'
                                    id='password'
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            <div className='flex flex-wrap items-center justify-between mb-6'>
                            {/*    <div className='w-full md:w-1/2'>*/}
                            {/*        <label className='relative inline-flex items-center'>*/}
                            {/*            <input*/}
                            {/*                className='form-checkbox appearance-none'*/}
                            {/*                type='checkbox'*/}
                            {/*            />*/}
                            {/*            <img*/}
                            {/*                className='absolute top-1/2 transform -translate-y-1/2 left-0'*/}
                            {/*                src='flex-ui-assets/elements/sign-up/checkbox-icon.svg'*/}
                            {/*                alt=''*/}
                            {/*            />*/}
                            {/*            <span className='ml-7 text-xs text-coolGray-800 font-medium'>*/}
                            {/*                Remember me*/}
                            {/*            </span>*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                                <div className='w-full md:w-auto mt-1'>
                                    <a
                                        className='inline-block text-xs font-medium text-green-500 hover:text-green-600'
                                        href='#'
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm'
                            >
                                Sign In
                            </button>
                            {/*<p className='text-center'>*/}
                            {/*    <span className='text-xs font-medium'>Don’t have an account?</span>*/}
                            {/*    <a*/}
                            {/*        className='inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline'*/}
                            {/*        href='#'*/}
                            {/*    >*/}
                            {/*        Sign up*/}
                            {/*    </a>*/}
                            {/*</p>*/}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
