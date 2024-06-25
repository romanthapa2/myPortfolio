import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-[50px] md:py-[50px]">
      <div className="w-full md:w-[1100px] m-auto px-[15px]">
        <div className="flex justify-center items-center flex-col gap-y-3 text-center mb-2 md:w-[60%] m-auto">
          <div
            className="flex
    justify-center items-center flex-col gap-y-4 text-white">
            <div className="flex items-center justify-center rounded-full px-5 py-1 text-base font-sm font-poppins bg-gray-700 text-dimWhite tracking-wide">
              Get in touch
            </div>
            <p className="text-xl font-medium font-poppins ">
              What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or
              simply want to connect.
            </p>
          </div>
        </div>
        <div className="md:w-[60%] m-auto mt-6 text-center flex justify-center items-center flex-col gap-3">
          <h3 className="font-poppins text-lg md:text-4xl font-semibold tracking-[-0.02em] text-white flex justify-center items-center gap-2">
            <HiOutlineMail size={40} /> thaparoman970@gmail.com
          </h3>
          <h3 className="font-poppins text-lg md:text-4xl font-semibold tracking-[-0.02em] text-white flex justify-center items-center gap-2">
            <HiOutlinePhone size={40} /> 9826179640
          </h3>
        </div>
        <div className="mt-6 flex justify-center items-center flex-col gap-3">
          <p className="flex items-center justify-center text-base font-sm font-poppins text-dimWhite tracking-wide text-center">
            You may also find me on these platforms!
          </p>
          <div className="flex gap-3">
            <a to={""} className="scale-box">
              <FaLinkedin size={25} color="#0077b5" className="scale-child" />
            </a>
            <a to={""} className="scale-box">
              <FaGithubSquare size={25} color="#d1d5db" className="scale-child" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
