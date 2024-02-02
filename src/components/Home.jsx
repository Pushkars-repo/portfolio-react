import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import { Link } from "react-scroll";



const Home = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              <FaLinkedin size={40} />
            </>
          ),
          href: "https://linkedin.com",
          style: "md:rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              <FaGithub size={40} />
            </>
          ),
          href: "https://github.com/theyashpatel",
        },
        {
          id: 3,
          child: (
            <>
             <HiOutlineMail size={40} />
            </>
          ),
          href: "mailto:foo@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
              <BsFillPersonLinesFill size={40} />
            </>
          ),
          href: "/resume.pdf",
          style: "md:rounded-br-md",
          download: true,
        },
      ];
  return (
    
    <>
       <div name="home">
        <div className='w-full h-screen flex justify-center items-center flex-col pt-10 bg-gradient-to-b from-black via-black to-gray-800 md:pt-20'>
            <h2 className="text-4xl sm:text-7xl font-bold text-white text-center">
                My name is <br />
                <span className="text-blue-400">Pushkar Sharma</span> <br />
                and I'm a <br />
                <span className="text-blue-400">Full Stack Developer</span>
            </h2>
            <p className="text-gray-500 py-4 px-4 max-w-md md:mx-auto font-semibold text-center">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div className="flex gap-5 mx-auto py-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={21} className="ml-1" />
              </span>
            </Link>




            
            <a
              href="/resume.pdf"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <RxDownload size={19} className="ml-2" />
              </span>
            </a>
          </div>
          <div className="md:hidden pt-20 flex justify-center items-center">
      <ul className="flex justify-center items-center gap-4">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between rounded-xl items-center h-14 px-4 md:ml-[-100px] md:hover:ml-[-10px] hover:rounded-md  bg-cyan-800 duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
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
       </div>
       

    </>
   
  )
}

export default Home
