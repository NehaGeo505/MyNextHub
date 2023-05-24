import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Navibar from './components/Navibar';
import Statebasics from  './components/Statebasics';
import State2 from './components/State2';
import Tablo from './components/Tablo';
import {Route,Routes} from 'react-router-dom'
import Apiget from './components/Apiget';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Statebasics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Tablo/>}/>
        <Route path='/navigationbar' element={<Navibar/>}/>
        <Route path='/axios' element={<Apiget/>}/>
      </Routes>
    {/*<First/>*/}
    <Navibar/>
    {/*<Statebasics/>
    <State2/>
    <Tablo/>*/}
    </div>
  );
}

export default App;
