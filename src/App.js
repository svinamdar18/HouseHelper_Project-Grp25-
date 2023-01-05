import './App.css';
import { Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
// import CustomerRegistration from './components/CustomerRegistration';
import HelperRegistration from './components/HelperRegistration';
import About from './components/About';
import CustomerLoginForm from './components/CustomerLoginForm';
import HelperLoginForm from './components/HelperLoginForm';
import HomePage from './components/HomePage';
import ListCustomers from './components/ListCustomers';
import ListHelpers from './components/ListHelpers';
import EditCustomer from './components/EditCustomer';
// import TempCustReg from './components/TempCustReg';
import EditHelper from './components/EditHelper';
import CustomerRegistration from './components/CustomerRegistration';
import Footer from './components/Footer'
import CustomerLoginPage from './components/CustomerLoginPage'
import ListOrders from './components/ListOrders';
import ListGardener from './components/ListGardener';
import ListNanny from './components/ListNanny';
import ListMaid from './components/ListMaid';
import ListPetcare from './components/ListPetcare';
import AdminLogin from './components/AdminLogin';
import AdminPage  from './components/AdminPage';
import Successfull from './components/Successfull';
import Temphelperloginpage from './components/Temphelperloginpage';
import { Login } from './components/Login';
import ShowNanny from './components/ShowNanny';
import ShowMaid from './components/ShowMaid';
import ShowGardener from './components/ShowGardener';
import ShowPetcare from './components/ShowPetcare';
import Tempcustomerloginpage from './components/Tempcustomerloginpage';
// import HelperLoginPage from './components/HelperLoginPage';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/custreg' element={<CustomerRegistration />} />
          <Route exact path='/helpreg' element={<HelperRegistration />} />
          <Route exact path='/custlogin' element={<CustomerLoginForm />} />
          <Route exact path='/helplogin' element={<HelperLoginForm />} />
          <Route exact path='/custlist' element={<ListCustomers />} />
          <Route exact path='/helplist' element={<ListHelpers />} />
          <Route exact path='/edit-customer/:id' element={<EditCustomer />} />
          <Route exact path='/edit-helper/:id' element={<EditHelper />} />
          <Route exact path='/custlog/:id' element={<CustomerLoginPage />} />
          <Route exact path='/ordlist' element={<ListOrders />} />
          <Route exact path='/gardener/:id' element={<ListGardener />} />
          <Route exact path='/nanny/:id' element={<ListNanny />} />
          <Route exact path='/maid/:id' element={<ListMaid />} />
          <Route exact path='/petcare/:id' element={<ListPetcare />} />
          <Route exact path='/adminlogin' element={<AdminLogin />} />
          <Route exact path='/adminpage' element={<AdminPage/>} />
          <Route exact path='/success' element={<Successfull/>} />
          <Route exact path='/helplog/:id' element={<Temphelperloginpage/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/shownanny/:id' element={<ShowNanny/>} />
          <Route exact path='/showmaid/:id' element={<ShowMaid/>} />
          <Route exact path='/showgardener/:id' element={<ShowGardener/>} />
          <Route exact path='/showpetcare/:id' element={<ShowPetcare/>} />
          <Route exact path='/custorder/:id' element={<Tempcustomerloginpage/>} />

        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
