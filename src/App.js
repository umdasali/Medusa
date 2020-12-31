import './App.css';
import About from './component/About';
import Clints from './component/Clints';
import Contact from './component/Contact';
import Home from './component/Home';
import Ourwork from './component/Ourwork';
function App() {
  return (
    <div className="App">
         <Home/>
         <About/>
         <Ourwork/>
         <Clints/>
         <Contact/>
    </div>
  );
}

export default App;
