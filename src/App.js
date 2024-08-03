// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import DashboardBody from './pages/DashboardBody';
import Building from './pages/Building';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <Header/> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardBody/>}/>
          <Route path='/Building' element={<Building/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>

   



  );
}

export default App;
