import Footer from "../Home/Footer";
import Oorder from "../Home/Oorder";
import Nav from "../Nav/NavBar";

function Reservation(){
    return(
        <>
        <Nav/>
        <div className="row">
            <div className="reservbg">
                <div className=" position-table text-center">
                <h3>Table Reservation</h3>
                </div>
            </div>

        </div>
        <Oorder/>
        <div className="mt-3">
        <Footer/> 
        </div>
        </>
    )
}
export default Reservation;