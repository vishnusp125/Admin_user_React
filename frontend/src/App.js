import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';


function App(){
  return(
    <div>
      <Router>
      <Header />
      <Routes>
     <Route path='/' element={<LandingPage/>} exact/>
     <Route path='/mynotes' element={<MyNotes/>} />
    </Routes>
    <Footer />
    </Router>
    </div>
    
  );
   
};

export default App;
