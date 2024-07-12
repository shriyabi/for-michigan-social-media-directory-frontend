import React from "react";
import { useLocation } from 'react-router-dom'; //retrieving data from app
import { useNavigate } from 'react-router-dom';
import msu from './PFP/MSU.png';
import cmu from './PFP/CMU.png'; 
import delt from './PFP/Delta.png';
import jc from './PFP/JC.png'; 
import kc from './PFP/KC.png'; 
import kvcc from './PFP/KVCC.png'; 
import lcc from './PFP/LCC.png'; 
import ltu from './PFP/LTU.png'; 
import mcc from './PFP/MCC.png'; 
import mid from './PFP/Mid-Mich.png'; 
import ou from './PFP/OU.png'; 
import svsu from './PFP/SVSU.png'; 
import umich from './PFP/UMICH.png'; 
import wmu from './PFP/WMU.png'; 
import wsu from './PFP/WSU.png'; 


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
                <div className='flex flex-row w-full  mx-5 md:mx-10 lg:mx-12'>
                    <div className='flex-col flex w-full'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-maple-dark dark:text-amber-100 text-left mt-5 leading-none">
                            {parsedData[0].college}
                        </h1>
                        <div className="flex flex-row items-center justify-start md:mb-10 lg:mb-0">
                            <div className="text-base text-stone-400 dark:text-beige-dark md:text-xl font-semibold italic pt-1"> Campus Organizer: </div>
                            <h2 className={`text-base md:text-xl font-semibold italic text-left mx-2 pt-1
        ${parsedData[0].organizer === 'Not Available' ? 'text-red-700 dark:text-red-400' : 'text-maple dark:text-beige'}`}>
                                {parsedData[0].organizer}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col mr-10 md:mr-20 lg:mr-60 items-center">
                        <a
                            href={` ${parsedData[0].img === 'msu' ? msu : 
                            parsedData[0].img === 'cmu' ? cmu : 
                            parsedData[0].img === 'delt' ? delt : 
                            parsedData[0].img === 'jc' ? jc : 
                            parsedData[0].img === 'kc' ? kc:
                            parsedData[0].img === 'kvcc' ? kvcc :
                            parsedData[0].img === 'lcc' ? lcc :
                            parsedData[0].img === 'ltu' ? ltu :
                            parsedData[0].img === 'mcc' ? mcc :
                            parsedData[0].img === 'mid' ? mid :
                            parsedData[0].img === 'ou' ? ou :
                            parsedData[0].img === 'svsu' ? svsu :
                            parsedData[0].img === 'umich' ? umich :
                            parsedData[0].img === 'wmu' ? wmu :
                            parsedData[0].img === 'wsu' ? wsu :'no'}
                            `}
                            download=
                            {` ${parsedData[0].img === 'msu' ? msu.png : 
                            parsedData[0].img === 'cmu' ? cmu.png : 
                            parsedData[0].img === 'delt' ? delt.png : 
                            parsedData[0].img === 'jc' ? jc.png : 
                            parsedData[0].img === 'kc' ? kc.png:
                            parsedData[0].img === 'kvcc' ? kvcc.png :
                            parsedData[0].img === 'lcc' ? lcc.png :
                            parsedData[0].img === 'ltu' ? ltu.png :
                            parsedData[0].img === 'mcc' ? mcc.png :
                            parsedData[0].img === 'mid' ? mid.png :
                            parsedData[0].img === 'ou' ? ou.png :
                            parsedData[0].img === 'svsu' ? svsu.png :
                            parsedData[0].img === 'umich' ? umich.png :
                            parsedData[0].img === 'wmu' ? wmu.png :
                            parsedData[0].img === 'wsu' ? wsu.png :'no'}
                            `}>
                            <img src=
                            {` ${parsedData[0].img === 'msu' ? msu : 
                            parsedData[0].img === 'cmu' ? cmu : 
                            parsedData[0].img === 'delt' ? delt : 
                            parsedData[0].img === 'jc' ? jc : 
                            parsedData[0].img === 'kc' ? kc:
                            parsedData[0].img === 'kvcc' ? kvcc :
                            parsedData[0].img === 'lcc' ? lcc :
                            parsedData[0].img === 'ltu' ? ltu :
                            parsedData[0].img === 'mcc' ? mcc :
                            parsedData[0].img === 'mid' ? mid :
                            parsedData[0].img === 'ou' ? ou :
                            parsedData[0].img === 'svsu' ? svsu :
                            parsedData[0].img === 'umich' ? umich :
                            parsedData[0].img === 'wmu' ? wmu :
                            parsedData[0].img === 'wsu' ? wsu :'no'}
                            `}
                                className="w-[5em] h-[5em] md:w-[14em] md:h-[10em] rounded-3xl" alt="Click to Download" /></a>
                        <p className="text-xs text-center italic dark:text-gray-300">Click to Download Logo</p>
                    </div>
                </div>

                <div className="ml-5 md:ml-10 mr-5 mt-7 md:mt-20 flex flex-col lg:flex-row w-full lg:ml-12">
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
                    <div className="w-screen mt-12 md:w-1/2 lg:w-1/4 lg:pl-5 lg:mr-40 lg:mt-0">
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
                    <div className="w-screen mt-12 md:w-1/2 lg:w-1/4 lg:pl-5 lg:mt-0">
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
                <div className="w-full flex justify-center md:mt-20 lg:pt-20">
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