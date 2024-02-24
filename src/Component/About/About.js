import Footer from "../Home/Footer";
import Offers from "../Home/Offers";
import Nav from "../Nav/NavBar";
import Mission from "./Missoin";

export default function About() {
  return (
    <>
      <Nav />
      <div className="row">
        <div className="text-co justify-content-center  ">
          <div className=" about-uss justify-content-center">
            <h3 className=" text-center">About us</h3>
            <div className="Under"></div>
          </div>
        </div>
      </div>

      <div className="row  pt-5 pb-5">
        <div className=" col-12 col-lg-5 col-md-6 col-sm-12 mt-lg-2  mt-md-0 mt-sm-0 pb-md-2 pb-sm-2 mt-md-5 pt-md-5">
          <img
            src="https://www.theriyasat.ca/wp-content/uploads/2023/02/NMPCanada82-Copy.JPG.png"
            className="img-fluid sharmamukesh "
            alt="mukesh sharma"
            
          />
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 col-12 mt-lg-5 mt-md-0 mt-sm-0 pb-md-2 pb-sm-2">
          <div className="sub-title "> Hi! I'm</div>
            <h5 className="Sharma mb-4">
               mukesh sharma
            </h5>
            <p className="paragraph">
              Riyasat means heritage in Indian, says Mukesh Sharma. It actually
              fits quite well, because, in the Indian food kingdom, the restaurant
              owner is concerned with the little extras. The tables in the
              restaurant are referred to as a stage by our chef. They perform
              their miracle of cooking delicious food for our customers every day.
              <br></br><br></br>
              We want to give our customers the best experience with both customer
              service and good food. It is important to us to make good food that
              people like and they feel that they are well looked after. To cook
              food, the best raw material needs to be picked for it. So, we
              hand-picked our own ingredients such as spices, lentils, meats,
              flour, etc. Each spice, we picked have health benefit which
              increases immunity in one's body.
            </p>
        </div>
      </div>

      {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 m-0 mb-0"> */}

      <Offers/>
      <Mission/>
      <Footer/>
      
    </>
  );
}
