import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = ({BackUrl}) => {
  return (
      <div className="h-[100vh] flex items-center justify-center">
        <div className="thank_you_sec  flex-col  flex place-items-center justify-center text-center h-[calc(100vh-300px)]">
          <h1 className="cinzel text-[40px] font-[300!important] text-[#705118] mb-[30px]">
            Thank you
          </h1>
          <p className="tracking-[normal]">
            Thank you for submitting your details.
          </p>
          <p className="tracking-[normal]">
            Our professional shall get in touch with you within two working
            hours. Stay with us.
          </p>
          <Link
            className="bg-[#705118] cursor-pointer text-[14px] md:text-[20px] text-white py-[12px] px-[20px] sm:px-[55px] tracking-[1px] mt-[30px] xxl:mt-[50px]"
            to={BackUrl || "/"}
          >
            Back to home
          </Link>
        </div>
      </div>
  )
}

export default ThankYou
