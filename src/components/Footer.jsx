import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mb-0 text-center w-full bg-gray-100 pt-10 pb-5 mt-10">
      <div className="flex items-center justify-center pb-5">
        <div className="md:w-1/2">
          <p className="mb-3 md:mb-0 flex gap-3 items-center justify-center">
            Mode With ❤️ by{" "}
            <Link
              to="/"
              target="_blank"
              className="no-underline text-gray-700 hover:text-gray-900"
            >
              <IoLogoInstagram size={25} className='inline'/>: Ilyos Shaydullayev
            </Link>
            <Link
              to="https://github.com/IlyosShaydullayev"
              className="no-underline text-gray-700 hover:text-gray-900"
              target="_blank"
            >
              <FaGithub size={25} className='inline'/>: Ilyos Shaydullayev
            </Link>
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer