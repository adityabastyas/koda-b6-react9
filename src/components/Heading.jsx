import React from "react";
import { Link, Outlet } from "react-router-dom";

function Heading() {
  return (
    <>
      <header className='flex justify-center items-center p-6 sticky top-0 w-full'>
        <ul className='flex justify-center items-center'>
          <li>
            <Link className='border p-2.5 rounded-lg' to='/login'>
              logout
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}

export default Heading;
