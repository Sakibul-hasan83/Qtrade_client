import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import axios from "axios";

const Signup = () => {

  const { createUser,logout,user } = useContext(AuthContext);  // FIXED
const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
const user ={email,password}
    console.log(user);


axios.post("http://localhost:5000/users",user,{withCredentials:true})
.then(res=>console.log(res.data))


    // --- Firebase Signup ---
    createUser(email, password)
      .then((result) => {
        console.log("Signup Success:", result.user);
        alert("Successfully Created ")
        return logout(); 
      })

      .then(()=>{
        navigate("/login")
      })
   
      .catch((error) => {
        console.log("Signup Error:", error.message);
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-xl border border-gray-800">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create QTrade Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

       

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
          >
            Signup
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
