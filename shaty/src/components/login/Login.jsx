import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
	const [currentQuote, setCurrentQuote] = useState("");
	const [currentAuthor, setCurrentAuthor] = useState("");
	// const [bgImageUrl, setBgImageUrl] = useState("");
	// const [currentImage, setCurrentImage] = useState("");

	// console.log(url);

	// useEffect(() => {
	// 	getRandomBgImage();
	// });
	// const getRandomBgImage = () => {
	// 	const category = "nature"; // Set your preferred category here
	// 	const url = `https://random.imagecdn.app/v1/image?width=500&height=150&category=${category}`;
	// 	fetch(url)
	// 		.then((response) => response)
	// 		.then((data) => {
	// 			console.log(bgImageUrl);
	// 			setBgImageUrl(data.url);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

	useEffect(() => {
		getRandomeQuote();
	});
	const getRandomeQuote = () => {
		const urlQuote = "https://api.goprogram.ai/inspiration";
		axios
			.get(urlQuote)
			.then((response) => response)
			.then((response) => {
				// setCurrentQuote(response.data.q);
				setCurrentQuote(response.data.quote);
				setCurrentAuthor(response.data.author);
			});
		// console.log("Randome quote ");
	};
	return (
		<div
		// className='h-full w-full bg-no-repeat bg-cover'
		// style={{ backgroundImage: `url(${bgImageUrl})` }}
		>
			<div className='mt-44 mx-2 pb-10 md:w-96 md:mt-36 md:mb-10 lg:flex lg:flex-cols lg:w-full justify-center gap-10'>
				<div className='lg:w-[400px] mb-10 gap-16 text-4xl text-black  font-semibold leading-10   font-overpass w-78'>
					"{currentQuote}"<h1 className='pt-5 text-2xl'>{currentAuthor}</h1>
				</div>
				<form className='abolute  flex flex-col lg:w-[400px]' action=''>
					<div className='h-full bg-teal-50 '>
						<div className='h-10 bg-teal-700 py-2 text-white text-bold rounded-t-md text-center'>
							<h4>Log in</h4>
						</div>
						<label className='flex flex-col my-10 mx-5'>
							Email
							<input
								className='py-1 border rounded-sm border-gray-500'
								type='email'
							/>
						</label>
						<label className='flex flex-col my-10 mx-5 '>
							Password
							<input
								className='py-1 border rounded-sm border-gray-500'
								type='password'
							/>
						</label>
						<button className='w-full h-10 bg-teal-600  flex items-center justify-center rounded-md text-lx font-semibold text-white'>
							<FiLogIn className='mr-2' /> Login
						</button>
						<div className='flex flex-col justify-center items-center py-2 gap-y-4  ml-5 mt-5'>
							<label htmlFor='checkbox' className='mr-2'>
								<input type='checkbox' className='mr-2 text-base' />
								Remember me
							</label>
							<a href='/'>
								<p className='text-base'>Forgot Your Password?</p>
							</a>
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
								<span className='text-teal-500 text-base'>
									<Link to={"/signup"}>sign up</Link>
								</span>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
