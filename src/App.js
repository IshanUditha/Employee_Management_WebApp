import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Header/>
        
         <Routes> 
           <Route exact path="/" element={<Home/>}/> 
           <Route exact path="adduser" element={<AddUser/>}/>
         </Routes>
        
      

        
       </BrowserRouter>
     
     
     </div>
  );
}

export default App;
