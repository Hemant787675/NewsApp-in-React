import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logo from '../assets/logo.png';

const Navbar = ({ setCategory }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-200'>
      <ul className='text-center text-xl p-20'>
        <div spy={true.toString()} smooth={true.toString()} onClick={() => setCategory('general')}>
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>General</li>
        </div>
        <div spy={true.toString()} smooth={true.toString()} onClick={() => setCategory('health')}>
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>Health</li>
        </div>
        <div spy={true.toString()} smooth={true.toString()} onClick={() => setCategory('sports')}>
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>Sports</li>
        </div>
        <div spy={true.toString()} smooth={true.toString()} onClick={() => setCategory('business')}>
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>Business</li>
        </div>
        <div spy={true.toString()} smooth={true.toString()} onClick={() => setCategory('technology')}>
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>Technology</li>
        </div>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 lg:py-5 px-20 py-4 bg-slate-800 text-white font-black'>
        <div className='flex items-center'>
          <span>
            <img
              src={logo}
              style={{ height: '50px', width: '90px', borderRadius: '7px', boxShadow: '0px 0px 5px white' }}
              alt="logo"
            />
          </span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div>
            <ul className='flex gap-12 mr-16'>
              <div
                className='hover:text-blue-400 transition hover:border-blue-400 cursor-pointer'
                spy={true.toString()}
                smooth={true.toString()}
                onClick={() => setCategory('general')}
              >
                <li>General</li>
              </div>
              <div
                className='hover:text-blue-400 transition cursor-pointer'
                spy={true.toString()}
                smooth={true.toString()}
                onClick={() => setCategory('health')}
              >
                <li>Health</li>
              </div>
              <div
                className='hover:text-blue-400 transition cursor-pointer'
                spy={true.toString()}
                smooth={true.toString()}
                onClick={() => setCategory('sports')}
              >
                <li>Sports</li>
              </div>
              <div
                className='hover:text-blue-400 transition cursor-pointer'
                spy={true.toString()}
                smooth={true.toString()}
                onClick={() => setCategory('business')}
              >
                <li>Business</li>
              </div>
              <div
                className='hover:text-blue-400 transition cursor-pointer'
                spy={true.toString()}
                smooth={true.toString()}
                onClick={() => setCategory('technology')}
              >
                <li>Technology</li>
              </div>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className='block md:hidden lg:hidden text-blue-500' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
