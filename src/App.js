
import './App.css';
import Mainpage from './mainpagecomponents/Mainpage';
import Viewpassbook from './mainpagecomponents/Viewpassbook';
import Debitcard from './mainpagecomponents/Debitcard';
import LandingPage from './LandingPageComponents/LandingPage/LandingPage';
import Scoreboard from './ScoreboardComponents/Scoreboard';
import Login from './LoginComponents/Login';
import LevelsPage from './LandingPageComponents/LevelsPage/LevelsPage';
import Level1 from './Level1components/Level1';
import Level2  from './Level2components/Level2';
import Level6  from './Level6components/Level6';
import QuickTransfer from './Level2components/QuickTransfer';

import Level7  from './Level7components/Level7';
import Level7EnterOTP  from './Level7components/Level7EnterOTP';
import Level7SelectCard  from './Level7components/Level7SelectCard';
import Level7Enter2DigitPin  from './Level7components/Level7Enter2DigitPin';
import Level7Enter4DigitPin  from './Level7components/Level7Enter4DigitPin';
import Level7CreatedPIN  from './Level7components/Level7CreatedPIN';
import Level7SelectDebitAccount from './Level7components/Level7SelectDebitAccount';

import Level8  from './Level8components/Level8';

import Level9 from './Level9components/Level9';
import TopupRecharge from './Level9components/TopupRecharge';
import ElectricityBill from './Level9components/ElectricityBill';

import Level10 from './Level10components/Level10';
import BeSafe from './Level10components/BeSafe';

import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Viewdebitcard" element={<Debitcard/>} />
        <Route path="/Viewpassbook" element={<Viewpassbook/>} />
        <Route path="/Scoreboard" element={<Scoreboard/>} />
        <Route path="/LevelsPage" element={<LevelsPage/>} />
        <Route path="/Level1" element={<Level1/>} />
        <Route path="/Level2" element={<Level2/>} />
        <Route path="/Level6" element={<Level6/>} />
        <Route path="/Level7" element={<Level7/>} />
        <Route path="/Level7EnterOTP" element={<Level7EnterOTP/>} />
        <Route path="/Level7SelectDebitAccount" element={<Level7SelectDebitAccount/>} />
        <Route path="/Level7SelectCard" element={<Level7SelectCard/>} />
        <Route path="/Level7Enter2DigitPin" element={<Level7Enter2DigitPin/>} />
        <Route path="/Level7Enter4DigitPin" element={<Level7Enter4DigitPin/>} />
        <Route path="/Level7CreatedPIN" element={<Level7CreatedPIN/>} />
        <Route path="/Level8" element={<Level8/>} />
        <Route path="/Level9" element={<Level9/>} />
        <Route path="/TopUpRecharge" element={<TopupRecharge/>} />
        <Route path="/ElectricityBill" element={<ElectricityBill/>} />
        <Route path="/QuickTransfer" element={<QuickTransfer/>} />

        <Route path="/Level10" element={<Level10/>} />
        <Route path="/BeSafe" element={<BeSafe/>} />


        

        
        
      </Routes>
    </>
  );
}

export default App;
