//import React from 'react';
// import ReactDOM from 'react-dom';
import './assets/css/dist/tailwind.css';
function  App(){
    return(
      <div className="bg-gray-200 flex p-4">
        <section className="bg-white max-w-sm rounded-lg shadow py-8 px-5">
          <h1 className="text-2xl font-bold text-indigo-700" >Login</h1>
          <p className="text-gray-400">Doesn't have any account yet?
          <a className="text-indigo-700 underline ml-1">Sing up</a>
          </p>
          <div className="mt-4">
          <b className="block text-grey-darker text-xm  mb-1" for="username">
            Email Address
          </b>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
            id="username"
            type="text"
            placeholder="you@example.com" />
        </div>
        <div className="mt-4">
          <div></div>
          <b className="block text-grey-darker text-sm  mb-1 flex justify-between" for="username">
            Password
            <a className="text-indigo-700 underline ml-1">Forgot Password?</a>
          </b>
          <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
            id="username"
            type="text"
            placeholder="Enter 6 character or more" />
        </div>
        <div className="mt-4 text-gray-500">
          <input type="checkbox" />
          <label className="ml-2">Remember me</label>
        </div>
        <button className="btn text-2xl mt-4 font-bold btn w-full ">Login</button>
        <div className="h-px bg-gray-200 mt-8 relative">
          <span className="absolute absolute-x absolute-y bg-white px-3 -mt-px text-sm text-gray-400">or login with</span>
        </div>
        <div className="flex space-x-3 mt-5">
          <button className="flex items-center px-4 py-2  rounded  font-bold w-full text-red-600  border border-red-600">
            {/* <i class="fab fa-google"></i> */}
            <img className="w-5 mr-4" src="./assets/Image/7465f30319191e2729668875e7a557f2.png" />
          Google
        </button>
          <button className="flex items-center px-4 py-2  rounded  font-bold w-full text-blue-600  border border-blue-600">
            {/* <i class="fab fa-google"></i> */}
            <img className="w-7 mr-2" src="./assets/Image/1200px-Facebook_Logo_(2019).png" />
          Facebook
        </button>
        </div>
        </section><section className="">
            I love you 
        </section>
      </div>
    )
}
export default App;