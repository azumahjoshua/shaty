import React from "react";
const ServicesUtility = (props) => {
	return (
		<div className=''>
			{/* <div className='flex flex-col justify-center items-center sm:mt-11 w-56 h-56 md:w-72  md:h-56 bg-yellow-500 rounded-sm  sm:mb-10'>
				<div className='bg-{props.color}-500'>
					<img src={props.src} alt='Customer Support' className='mx-auto' />
				</div> */}
			{/* <p className='text-center font-medium mt-4'>{props.paragraph}</p> */}
			{/* </div> */}
			<img
				src={props.src}
				alt={props.src}
				className='w-56 h-56 md:w-72  md:h-56 mb-2 mt-10'
			/>
		</div>
	);
};

export default ServicesUtility;
