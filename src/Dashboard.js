import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './4MichBlack.png';
import logo2 from './4MichWhite.png';
import './SignIn.css';
import { logInInfo } from './sql';


function Dashboard() {
  const [givenCollege, setGivenCollege] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = logInInfo(givenCollege)
      const college = givenCollege;
      console.log(college);
      console.log(givenCollege);
      navigate('/login-information', { state: { data, college } }); // Navigate to '/regionprofile' with data as state
      console.log("success");
    } catch (error) {
      console.log(error);
      if (error.code) {
        if (error.code === 404) {
          setErrors('College not found.');
        } else {
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };

  //dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options =
    ['Central Michigan University',
      'Delta College',
      'Jackson College',
      'Kalamazoo College',
      'Kalamazoo Valley Community College',
      'Lansing Community College',
      'Lawerence Technological University',
      'Macomb Community College',
      'Madonna University',
      'Mid Michigan College',
      'Michigan State University',
      'Oakland University',
      'Saginaw Valley State University',
      'University of Michigan - Ann Arbor',
      'Wayne State University',
      'University of Michigan - Flint',
      'Mott Community College',
      'Kettering College',
      'Grand Valley State University',
      'University of Detriot Mercy',
      'Eastern Michigan University',
      'Schoolcraft College'
    ];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  //logo
  const [appMode, setAppMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  useEffect(()=> {
    const mode = (e) => {
      setAppMode(e.matches ? 'dark' : 'light'); 
    }; 
    const dark = window.matchMedia('(prefers-color-scheme:dark'); 
    dark.addEventListener('change', mode); 
    return () =>{
      dark.removeEventListener('change',mode); //clean up
    }
  },[]); 

  const logoChange = appMode == 'dark' ? logo2 : logo; 

  return (
    <div className='bg-beige-light dark:bg-maple-dark min-h-screen w-screen overflow-y-scroll flex flex-col items-center md:justify-center'>
      <div className="flex flex-col justify-center items-center">
        <img
          src={logoChange}
          className='mt-10 w-1/3 md:w-1/4 lg:w-1/5'
          alt="Logo"
        />
        <h1 className="text-center text-5xl font-extrabold text-maple-dark dark:text-beige mb-10"> Welcome </h1>
      </div>
      <div className="w-full flex flex-col mb-10 mt-10 md:mb-20 lg:flex-row lg:mb-60 items-center justify-center h-1/2 md:h-1/3 lg:h-1/2">
        <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light py-4 rounded w-3/4 mt-5 h-full px-2 md:w-1/2 md:mb-5 lg:w-1/4 mx-4 flex flex-col justify-center items-center '>
          <h3 className="dark:text-slate-900 font-semibold mb-5 md:mb-12 text-base md:mb-7 text-xl lg:mb-12">Enter College </h3>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div className="flex-col flex items-center justify-center items-center">
              <select
                type="dropdown"
                name="Region"
                className="px-1 py-1 mb-1 text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300"
                value={givenCollege}
                onChange={(e) => setGivenCollege(e.target.value)}>
                <option value="Select Select College" className='px-1 mb-1 italic text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'> 
                Select College</option>
                <option value="Central Michigan University">Central Michigan University</option>
                <option value="Delta College">Delta College</option>
                <option value="Eastern Michigan University">Eastern Michigan University</option>
                <option value="Grand Valley State University">Grand Valley State University</option>
                <option value="Jackson College">Jackson College</option>
                <option value="Kalamazoo College">Kalamazoo College</option>
                <option value="Kalamazoo Valley Community College">Kalamazoo Valley Community College</option>
                <option value="Kettering College">Kettering College</option>
                <option value="Lansing Community College">Lansing Community College</option>
                <option value="Lawerence Technological University">Lawerence Technological University</option>
                <option value="Macomb Community College">Macomb Community College</option>
                <option value="Madonna University">Madonna University</option>
                <option value="Mid Michigan College">Mid Michigan College</option>
                <option value="Michigan State University">Michigan State University</option>
                <option value="Mott Community College">Mott Community College</option>
                <option value="Oakland University">Oakland University</option>
                <option value="Saginaw Valley State University">Saginaw Valley State University</option>
                <option value="Schoolcraft College">Schoolcraft College</option>
                <option value="University of Detriot Mercy">University of Detriot Mercy</option>
                <option value="University of Michigan - Ann Arbor">University of Michigan - Ann Arbor</option>
                <option value="University of Michigan - Flint">University of Michigan - Flint</option>
                <option value="Wayne State University">Wayne State University</option>
              </select>
              <button
                type="submit"
                className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark mt-5"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {errors && <div className="text-sm md:text-base text-red-600 dark:text-red-200 font-bold top-0 absolute text-center"> <p className="text-xl">{errors}</p></div>}
    </div>
  );
}

export default Dashboard;