import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/jquery/dist/jquery.min.js';
import Home from './Home';
import Howwework from './Howwework';
import Customers from './ Customers';
import Services from './Services';
import Blog from './Blog';
import Review from './Review';
import Talktoexperts from './Talktoexperts';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Navbar  from './Components/Navbar'
import Footer from './Components/Footer.js';
import { BrowserRouter as Router ,Switch ,Route, Redirect} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.js';



const App = () => {
   return(
        <>
        {/* <Loader/> */}
      <Router>
      <ScrollToTop />
     <Navbar/>

        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Howwework" component={Howwework}/>
            <Route exact path="/Customers" component={Customers}/>
            <Route exact path="/Services" component={Services}/>
            <Route exact path="/Blog" component={Blog}/>
            <Route exact path="/Review" component={Review}/>
            <Route exact path="/Talktoexperts" component={Talktoexperts}/>
            <Route exact path="/Aboutus" component={Aboutus}/>
            <Route exact path="/Contactus" component={Contactus}/>
            <Redirect to="/Home"/>
        </Switch>
        <Footer/>
        </Router>
        
        </>
    );
};
export default App;