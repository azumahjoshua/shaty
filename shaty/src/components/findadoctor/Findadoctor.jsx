import React, { useState, useMemo } from "react";
import {
	FaFilter,
	FaGraduationCap,
	FaStethoscope,
	FaSortAmountDownAlt,
} from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import doctorsData from "./doctorsData";
import DoctorCard from "./DoctorCard";
const FindADoctor = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const filteredResults = useMemo(() => {
		const result = doctorsData.filter(
			(doctor) =>
				doctor.name.toLowerCase().includes(searchQuery) ||
				doctor.hospital.toLowerCase().includes(searchQuery)
		);
		return result;
	}, [searchQuery]);
	// const [isSort, setIsSort] = useState(false);
	const style = { color: "white", fontSize: "1em", marginRight: 250 };

	return (
		<div>
			<div className='flex flex-col items-center justify-center px-6 mt-32'>
				<h3 className='text-3xl font-semibold tracking-wider text-center sm:text-left'>
					Search for Doctor, Make an Appointment
				</h3>
				<p className='text-gray-500 text-base font-light text-center sm:text-left mt-2'>
					Discover the best doctors, clinics, and hospitals in your nearest
					cities that suit your calendar
				</p>
			</div>
			{/* Side Bar */}
			<div className='flex flex-row mt-5 w-full'>
				<div>
					<div className='w-80 mr-10 h-full border-t-2 border-r-2 border-gray-300 hidden md:inline-block'>
						{/* Search */}
						<div className='mt-5 flex flex-col ml-10'>
							<div className='mb-5'>
								<p>Search</p>
							</div>
							<label>
								<input
									className='w-52 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-md'
									type='text'
									value={searchQuery}
									placeholder=' Search Doctor by name'
									onChange={(e) => setSearchQuery(e.target.value.trim())}
								/>
							</label>
						</div>
						{/* Filter */}
						<div className='mt-5 flex flex-col ml-10'>
							<div className='mb-2 flex flex-row justify-between'>
								<p>Filter</p>
								<p className='text-red-500 mr-20'>Cancel</p>
							</div>
							<div className='flex flex-row flex-wrap'>
								<button className='w-36 mr-2 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-md'>
									Neurologist
								</button>
								<button className='w-20 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-md'>
									Rabat
								</button>
								<button className='w-36 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-md'>
									ibn sina hospital
								</button>
							</div>
						</div>
						{/* District or State */}
						<div className='mt-5 flex flex-col ml-10'>
							<div className='mb-2 flex flex-row justify-between'>
								<p>District or Region</p>
							</div>
							<div className='flex flex-row flex-wrap'>
								<select
									className='w-52 mr-2 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-md'
									name='Select District or Region'
								>
									<option value=''>Select District or Region</option>
									<option value='Rabat'>Rabat</option>
									<option value='Agadir'>Agadir</option>
									<option value='Casablanca'>Casablanca</option>
								</select>
							</div>
						</div>
						{/* Gender of doctor */}
						<div className='mt-5 flex flex-col ml-10 '>
							<div className='mb-2 flex flex-row justify-between'>
								<p>Gender of doctor</p>
							</div>
							<div className='flex flex-row flex-wrap font-bold gap-5'>
								<label className='text-teal-100'>
									<input
										className='mr-2'
										type='radio'
										name='male'
										value='Male'
									/>
									Male
								</label>
								<label className='text-teal-100'>
									<input
										className='mr-2'
										type='radio'
										name='female'
										value='Female'
									/>
									Female
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='grid  gap-y-5 md:gap-y-6 md:items-end grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 md:gap-x-5 '>
					{filteredResults.map((doctor, index) => {
						return <DoctorCard key={index} doctor={doctor} />;
					})}
				</div>
			</div>
			{/* add a sort and filter button in mobile version here put in a diffent component later */}

			<div>
				<div
					className={`absolute top-0 h-fit pb-10 bg-teal-200 md:hidden ${
						isOpen ? "inline-block" : "hidden"
					}`}
				>
					<div className='flex h-40   bg-teal-700 w-full flex-col items-center px-6 transition duration-150 ease-in '>
						<div className='flex  mt-3 flex-row justify-between'>
							<button
								className='text-white font-bold text-lg'
								onClick={() => {
									setIsOpen(!isOpen);
								}}
							>
								<GrClose
									style={style}
									// className='text-white font-bold text-lg'
									// size={50}
								/>
							</button>
							<span className='text-white font-bold text-base'>Filters</span>
						</div>
						<div className='mx-auto mt-10'>
							<label>
								<input
									className='w-52 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-md'
									type='text'
									value={searchQuery}
									placeholder=' Search Doctor by name'
									onChange={(e) => setSearchQuery(e.target.value.trim())}
								/>
							</label>
						</div>
					</div>
					<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-40 mx-5 mt-2 w-70 sm:px-0'>
						<h4 className='mb-2 mt-5 flex flex-row gap-2'>
							<FaGraduationCap /> Title
						</h4>
						<div className='flex flex-row flex-wrap gap-5'>
							<label htmlFor='professor'>
								<input type='checkbox' />
								<span className='ml-2'>Professor</span>
							</label>
							<label htmlFor='Specialist'>
								<input type='checkbox' />
								<span className='ml-2'>Specialist</span>
							</label>
							<label htmlFor='Consultant'>
								<input type='checkbox' />
								<span className='ml-2'>Consultant</span>
							</label>
						</div>
					</div>
					<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-36 mx-5 mt-2 w-70 sm:px-0'>
						<h4 className='mb-2 mt-5 flex flex-row gap-2'>
							<div className='flex flex-row'>
								<CgGenderMale />
								<CgGenderFemale />
							</div>
							Gender
						</h4>
						<div className='flex flex-row flex-wrap gap-5'>
							<label htmlFor='Male'>
								<input type='checkbox' />
								<span className='ml-2'>Male</span>
							</label>
							<label htmlFor='Female'>
								<input type='checkbox' />
								<span className='ml-2'>Female</span>
							</label>
						</div>
					</div>
					<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-44 mx-5 mt-2 w-70 sm:px-0'>
						<h4 className='mb-2 mt-5 flex flex-row gap-2'>
							<div className='flex flex-row'>
								<FcCalendar />
							</div>
							Availiabilty
						</h4>
						<div className='flex flex-col gap-5'>
							<label htmlFor='Anyday'>
								<input type='checkbox' />
								<span className='ml-2'>Anyday</span>
							</label>
							<label htmlFor='today'>
								<input type='checkbox' />
								<span className='ml-2'>Today</span>
							</label>
							<label htmlFor='Tomorrow'>
								<input type='checkbox' />
								<span className='ml-2'>Tomorrow</span>
							</label>
						</div>
					</div>
					<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-44 mx-5 mt-2 w-70 sm:px-0'>
						<h4 className='mb-2 mt-5 flex flex-row gap-2'>
							<div className='flex flex-row'>
								<FaStethoscope />
							</div>
							Entity
						</h4>
						<div className='flex flex-col gap-5'>
							<label htmlFor='Hospetal'>
								<input type='checkbox' />
								<span className='ml-2'>Hospetal</span>
							</label>
							<label htmlFor='today'>
								<input type='checkbox' />
								<span className='ml-2'>Clinic</span>
							</label>
						</div>
					</div>
					<div className='flext justify-between mx-auto mt-5 ml-5'>
						<button className='w-28 py-2 mr-6 bg-red-500 hover:bg-teal-600 text-white font-semibold rounded-r-lg'>
							Filter
						</button>
						<button className="'w-28 py-2 px-10 text-white border-2 border-slate-500 rounded-md text-center ">
							Cancle
						</button>
					</div>
				</div>

				<div className='flex flex-row justify-center gap-10 ml-10 md:hidden'>
					{/* <Select
						className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
						options={options}
					/> */}
					<button className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '>
						<FaSortAmountDownAlt className='mr-2' /> Sort
						{/* <select
							onClick={() => {
								// setIsOpen(!isOpen);
								console.log("you click this sorting button");
							}}
						>
							<option value='Best Match'>Best Match</option>
							<option value='Top Rated'>Top Rated</option>
							<option value='price-low-to-high'>Price Low to High</option>
							<option value='price-high-to-low'>Price High to Low</option>
						</select> */}
					</button>

					<button
						className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
						onClick={() => {
							setIsOpen(!isOpen);
							// console.log("you click this filte button");
						}}
					>
						<FaFilter className='mr-2' />
						Filter
					</button>
				</div>
			</div>
		</div>
	);
};

export default FindADoctor;
