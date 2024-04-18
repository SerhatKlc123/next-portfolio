import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SocialLinks() {
    return(
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
        <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black rounded-r-xl'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/SerhatKlc123'
              target='_blank'
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-r-xl'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/serhat-k%C4%B1l%C4%B1%C3%A701/'
              target='_blank'
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-r-xl'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='mailto:kilicserhat975@gmail.com'
              target='_blank'
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    )
}