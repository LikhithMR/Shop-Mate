import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


function Form() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-3/5 h-4/5 flex justify-center items-center bg-blue-950 rounded-md">
          <div className="flex flex-col w-4/5 h-4/5 bg-white items-center justify-center">
            <h1 className="text-6xl mb-20 text-emerald-500">
              Welcome to Shopmate
            </h1>
            <div className="flex justify-start items-center w-3/5 border-b-2 border-blue-400 pb-2 ">
              {/* <FaUser /> */}
              <input
                type="text"
                placeholder="Store Name"
                className="outline-none ml-3 w-full "
              />
            </div>
            <br />
            <div className="flex justify-start items-center w-3/5 border-b-2 border-blue-400 pb-2 ">
              <FaLocationDot />
              <input
                type="text"
                placeholder="Location"
                className="outline-none ml-3  w-full"
              />
            </div>
            <br />
            <div className="flex justify-around w-3/5">
              <button className=" bg-emerald-500 text-white rounded w-1/3 p-1">
                Use Location
              </button>
              <button className=" bg-emerald-500 text-white rounded w-1/3 p-1">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
