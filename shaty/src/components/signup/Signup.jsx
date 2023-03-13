import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
const Signup = () => {
	return (
		<div className='mx-auto pb-10 md:w-96 md:mt-36 md:mb-10'>
			<form className='abolute  flex flex-col' action=''>
				<div className='h-full bg-teal-50 '>
					<div className='h-10 bg-teal-700 py-2 text-white text-bold rounded-t-md text-center'>
						<h4>Sign up</h4>
					</div>
					<label className='flex flex-col my-10 mx-5'>
						Your name
						<input
							className='py-1 border rounded-sm border-gray-500'
							type='text'
							placeholder='First name and Last name'
						/>
					</label>
					<label className='flex flex-col my-10 mx-5'>
						Mobile Number
						<input
							className='py-1 border rounded-sm border-gray-500'
							type='tel'
						/>
					</label>
					<label className='flex flex-col my-10 mx-5'>
						Email
						<input
							className='py-1 border rounded-sm border-gray-500'
							type='email'
						/>
					</label>
					<label className='flex flex-row gap-5 my-10 mx-5 '>
						<label>
							<input type='checkbox' value='default' />
							Male
						</label>
						<label>
							<input type='checkbox' value='default' />
							Female
						</label>
					</label>
					<button className='w-full h-10 bg-teal-600  flex items-center justify-center rounded-md text-lx font-semibold text-white'>
						<FiLogIn className='mr-2' /> Sign up
					</button>
					<div className='flex flex-row  ml-5 mt-5'>
						<label htmlFor='checkbox' className='mr-2'>
							<input type='checkbox' className='mr-2 text-base' />
							Remember me
						</label>
						<p className='text-base'>Forgot Your Password?</p>
					</div>
					<div className='mt-5'>
						<hr />
						<label className=''>
							<p className='text-center'>or</p>
						</label>
					</div>
					<div className='flex flex-row items-center justify-center '>
						<FaGoogle className='border-r-2 mr-2 px-px' />
						<button className='flex flex-row items-center justify-center '>
							Connect with Google
						</button>
					</div>
					<div className='flex flex-row items-center justify-center mt-10 mb-10'>
						<p className=''>
							New User ?{" "}
							<span className='text-teal-500 text-base'>sign up</span>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Signup;