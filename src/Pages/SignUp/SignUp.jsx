// import React from "react";
// import { useState } from "react";
// import { useNavigation } from "react-router-dom";
// import "./SignUp.css";
// const SignUp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigation();

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (firstName && lastName && username && password) {
//     }
//   };

//   return (
//     <>
//       <form className="signup-form">
//         <div className="signup-container">
//           <h2>Thank you for signing up</h2>

//           <div className="signup-form-group">
//             <label>First Name:</label>
//             <input
//               className="signup-input-first-name"
//               type="text"
//               required
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <label>Last Name:</label>
//             <input
//               className="signup-input-last-name"
//               type="text"
//               required
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <button className="signup-btn" onSubmit={handleSubmit}>
//             Sign In
//           </button>
//         </div>
//         <div>
//           I accept the <a href="terms and conditions"> of use</a>
//         </div>
//       </form>
//     </>
//   );
// };
// export default SignUp;
