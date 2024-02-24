import './App.css';
import About from './Component/About/About';
import Event from './Component/Event/Event';
import Home from './Component/Home/Home';
// import Offers from './Component/Home/Offers';
import Nav from './Component/Nav/NavBar';
import Service from './Component/Services/Services';
function App(){
  return (
    <>
    <Nav/>
    <Home/>
    {/* {
           Offers.map((items)=>{
             return <Offers title={items}/>
           })
         } */}
    <About/>
    <Event/>
    <Service/>
   
    </>
  )
}

export default App;
