import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Help from './pages/Help';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/help" element={<Help></Help>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
