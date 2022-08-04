import './App.css'
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import NewPassword from "./Components/NewPassword";
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import TwoFactor from "./Components/TwoFactor"
import TwoFactorTwo from "./Components/TwoFactorTwo"
import Address from "./Components/Address";
import DeleteAccount from "./Components/DeleteAccount";
import DonationPage from "./Components/DonationPage";
import EnterCode from "./Components/EnterCode";
import EnterInfo from "./Components/EnterInfo";
import HomePage from "./Components/HomePage";
import AccountPage from './Components/AccountPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Donation" element={<DonationPage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/2FA" element={<TwoFactor />} />
        <Route path="/2FA2" element={<TwoFactorTwo />} />
        <Route path="/EnterInfo" element={<EnterInfo />} />
        <Route path="/EnterCode" element={<EnterCode />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/HopeCenterAddress" element={<Address />} />
        <Route path="/DeleteAccount" element={<DeleteAccount />} />
        <Route path="/AccountPage" element={<AccountPage />} />
      </Routes>
     </Router>
      );
}

export default App;









// function App() {
//   return (
    
//   );
// }

// export default App;
