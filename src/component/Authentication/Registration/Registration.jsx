import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(''); // State for gender selection

  const handleRegistration = async (event) => {
    event.preventDefault();

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    if(user){
      navigate('/login')
    }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });

    
  //   try {
  //     // Replace with your API endpoint for registration
  //     const response = await axios.post('YOUR_API_ENDPOINT', {
  //       username,
  //       email,
  //       password,
  //       gender,
  //     });

  //     // Handle registration success, you might want to set user state here
  //     console.log('Registration successful', response.data);

  //     // For now, simulate setting the user state
  //     setUser(response.data);

  //     // Redirect to the desired page
  //     navigate(location?.state?.prevUrl);
  //   } catch (error) {
  //     // Handle registration error
  //     console.error('Registration error', error);
  //   }
  // };

  // useEffect(() => {
  //   if (user) {
  //     navigate(location?.state?.prevUrl);
  //   }
  // }, [user, location, navigate]);
  }
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '35rem' }}>
          <div className="w-72">
            <h1 className="text-xl font-semibold">Create an Account</h1>
            <small className="text-gray-400">Please enter your details</small>

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Username</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Your Username"
                  value={username}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <Link to="/login" className="text-xs font-semibold text-purple-700">
                  Already have an account? Sign in
                </Link>
              </div>

              <div className="mb-3">
                <button onClick={handleRegistration} className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
