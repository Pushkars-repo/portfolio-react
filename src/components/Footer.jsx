import React from 'react'
import { FaGithub} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Footer = () => {
    const footlinks = [
        {
            id: 1,
            child: (
              <>
                CV <HiOutlineAcademicCap size={30} />
              </>
            ),
            href: "https://linkedin.com",
           
          },
          {
            id: 2,
            child: (
              <>
                GitHub <FaGithub size={30} />
              </>
            ),
            href: "https://github.com/theyashpatel",
            
          },
      ];
  return (
    <div className='h-auto w-full flex justify-around items-center px-2 py-6 bg-slate-900 bg-opacity-95'>
        <div>
            <h1 className='text-white text-4xl'>Portfolio</h1>
        </div>
        <div className='text-white'>
            <ul className=' flex justify-between gap-2'>
            {footlinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "px-2 hover:rounded-md duration-300 font-saira font-semibold" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between gap-2 items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
            </ul>
        </div>
    </div>
  )
}

export default Footer
