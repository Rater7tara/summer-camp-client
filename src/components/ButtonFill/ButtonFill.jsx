import React from 'react';
import useTheme from '../../hooks/useTheme';
import { BsArrowRightShort } from "react-icons/bs";

const ButtonFill = ({name}) => {
    const {isDarkTheme} = useTheme();
    return (
        <button className={`btn px-3 rounded-full border border-primary text-base font-bold font-kanit bg-orange-500 hover:bg-orange-700 hover:animate-pulse transition-all duration-300 text-white flex justify-center items-center`} >
            {name}
            <BsArrowRightShort className='w-6 h-6 '></BsArrowRightShort>
        </button>
    );
};

export default ButtonFill;