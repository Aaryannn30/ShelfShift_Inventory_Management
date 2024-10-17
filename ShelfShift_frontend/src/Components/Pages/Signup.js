import React, { useState, useContext } from "react";
import AuthContext from '../../context/AuthContext';
import i6 from './i6.jpeg';

const Signup = ({ handleToggle }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <section className="w-screen bg-[#DDE6ED] dark:bg-[#030637]">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage: `url(${i6})`
          }}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-4xl font-semibold tracking-wider text-[#424874] dark:text-[#EEEDEB]">
              Get your free account now.
            </h1>

            <p className="mt-4 text-[#526D82] dark:text-[#EEEDEB]">
              Let’s get you all set up so you can verify your personal account and begin setting up your profile.
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm text-[#364F6B] dark:text-[#EEEDEB] mt-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Snow"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-[#3C0753] dark:text-[#EEEDEB] dark:border-gray-700"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-[#364F6B] dark:text-[#EEEDEB] mt-1">Email Address</label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-[#3C0753] dark:text-[#EEEDEB] dark:border-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-[#364F6B] dark:text-[#EEEDEB] mt-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-[#3C0753] dark:text-[#EEEDEB] dark:border-gray-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-[#364F6B] dark:text-[#EEEDEB] mt-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-[#3C0753] dark:text-[#EEEDEB] dark:border-gray-700"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 px-6 py-3 text-white bg-[#526D82] dark:bg-[#720455] rounded-lg hover:bg-blue-400">
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-[#526D82] dark:text-[#720455]">
              Already have an account?{" "}
              <button onClick={handleToggle} className="text-blue-500 focus:underline hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
