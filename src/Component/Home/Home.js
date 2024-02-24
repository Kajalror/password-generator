import '../../App.css';
import Nav from '../Nav/NavBar';
import Offers from './Offers';
import Vision from './Vision';
 import Story from './Story';
 import Catering from './Catering';
 import Oorder from './Oorder';
import Footer from './Footer';
// import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
        <Nav/>
        <div className="row">
            <div className= "col-12 Main justify-content-center">
                <div className="Riyasat-text">
                    <h3 className='title text-center pt-0'>
                        The Riyasat
                    </h3>
                    <h2 className='text-center'> Authentic & Traditional Indian Food</h2>
                </div>
            </div>
        </div>  
        
        <Vision/>
        {/* <div className='text-center'>
            <Link to="Offers"> Offers</Link>
        </div> */}
        <Offers/>
        <Story/>
        <Catering/>
        <Oorder/>
        <div className='mt-3'>
        <Footer/>
        </div>
        
        
        
       </>
    )
} 