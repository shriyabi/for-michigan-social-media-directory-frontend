import React from "react";
import { useLocation } from 'react-router-dom'; //retrieving data from app
import { useNavigate } from 'react-router-dom';


//function StaffProfile({data}){
const LogInProfile = () => {
    const location = useLocation(); //accessing the routed data given by navigate
    const navigate = useNavigate();
    const { data } = location.state || {};
    console.log('Data:', data); // Check if data is correctly passed
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    const handleSubmit = (e) => {
        navigate('/dashboard');
    };

    console.log(data);
    const parsedData = JSON.parse(data);
    return (
        <>
        <div className='bg-beige-light dark:bg-maple-dark h-screen overflow-hidden overflow-x-hidden w-screen flex flex-col justify-center'>
            <h1 className="text-3xl md:text-5xl font-extrabold text-maple-dark dark:text-amber-100 text-left ml-5 md:ml-10 mt-5 lg:ml-12">
                {parsedData[0].college}
            </h1>
            <div className="flex flex-row items-center justify-start ml-5 md:ml-10 mt-0 lg:ml-12 md:mb-10 lg:mb-0">
                <div className="text-base text-stone-400 dark:text-beige-dark md:text-xl font-semibold italic pt-1"> Campus Organizer: </div>
                <h2 className={`text-base md:text-xl font-semibold italic text-left mx-2 pt-1
        ${parsedData[0].organizer === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`}>
                    {parsedData[0].organizer}
                </h2>
            </div>

            <div className="ml-5 md:ml-10 mr-5 mt-7 md:mt-20 flex flex-col md:flex-row w-full lg:ml-12">
                <div className="w-screen md:w-1/2 lg:w-1/4 md:mr-10">
                    <h1 className="text-lg md:text-2xl overline font-bold text-maple dark:text-beige text-left"> Log-In Information </h1>
                    <div className="flex-col flex text-left text-stone-400">
                        <div className="flex flex-row items-center">
                            <div className="text-sm text-stone-400 dark:text-beige-dark md:text-lg font-semibold italic pt-2 pr-2"> Username: </div>
                            <h1 className="text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-1 bg-yellow-300 dark:bg-yellow-800"  >
                                {parsedData[0].username}
                            </h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="text-sm text-stone-400 dark:text-beige-dark md:text-lg font-semibold italic pt-2 pr-2"> Password: </div>
                            <h1 className="text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-1 bg-yellow-300 dark:bg-yellow-800"  >
                                {parsedData[0].password}
                            </h1>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="text-sm text-stone-400 dark:text-beige-dark md:text-lg font-semibold italic pt-2"> Full Name: </div>
                            <h1 className={`text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2 pt-2 ${parsedData[0].full_name === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`} >
                                {parsedData[0].full_name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-screen mt-12 md:w-1/2 lg:w-1/4 md:pl-5 md:mt-0 md:mr-40">
                    <h1 className="text-lg md:text-2xl overline font-bold text-maple dark:text-beige text-left"> Profile Information </h1>
                    <div className="flex-row text-left text-slate-800">
                        <div className="flex-row flex items-center">
                            <div className="text-sm md:text-lg text-stone-400 dark:text-beige-dark font-semibold"> Full Name: </div>
                            <h1 className={`text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2 ${parsedData[0].full_name === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`} >
                                {parsedData[0].full_name}
                            </h1>
                        </div>
                        <div className="flex-col md:flex-row flex items-start md:items-center">
                            <div className="text-sm text-stone-400 md:text-lg dark:text-beige-dark  font-semibold"> Profile:  </div>
                            <h1 className={`text-sm md:text-lg text-maple-dark dark:text-amber-100 font-bold text-left md:px-2 ${parsedData[0].profile === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`} >
                                <a href={parsedData[0].profile} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                                    {parsedData[0].profile}
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-screen mt-12 md:w-1/2 lg:w-1/4 md:pl-5 md:mt-0">
                    <h1 className="text-lg md:text-2xl overline font-bold text-maple dark:text-beige text-left"> Contact Information </h1>
                    <div className="flex-row text-left text-slate-800">
                        <div className="flex-row flex items-center">
                            <div className="text-sm md:text-lg text-stone-400 dark:text-beige-dark font-semibold"> Email: </div>
                            <h1 className={`text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2 ${parsedData[0].email === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`} >
                                {parsedData[0].email}
                            </h1>
                        </div>
                        <div className="flex-row flex items-center">
                            <div className="text-sm text-stone-400 md:text-lg dark:text-beige-dark  font-semibold"> Phone:  </div>
                            <h1 className={`text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2 ${parsedData[0].phone === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`} >
                                {parsedData[0].phone}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center md:mt-20 pt-20">
                <button
                    className="bottom-0 mt-10 mb-5 px-2 border w-1/2 md:w-1/3 lg:w-1/5 bg-maple text-beige-light dark:text-maple-dark rounded hover:bg-beige hover:text-maple-dark dark:bg-beige dark:hover:bg-amber-100 dark:hover:text-maple-dark"
                    onClick={handleSubmit}>
                    Return Back to Search </button>
            </div>
        </div>
        </>
    )
}
export default LogInProfile; 