// import Nav from "../Nav/NavBar";
import { Link } from "react-router-dom";

export default function Story() {
  return (
    <>
    {/* <Nav/> */}
      <div className="row whiteibg"> 
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 m-0 mb-0 order-lg-1 order-md-1">
          <h3 className=" text-center fontsize pt-3  ">our story</h3>
          <div className="  m-0 p-0 mb-3 text-center justify=content-center ">
          <p className="adjustpara text-center">
            We take pride in serving food full of authenticity among the
             cuisine of India. With a wide array of speciality  dishes
            innovated and designed by our <br></br> chef  to bring out the richness of
            indian flavours and brighten up the taste buds.
            Our staff exceedslimits to represent the best of the best, world class service.
          </p>
          <Link Link className="btn btn-outline-dark" to={"/about"} role="button">Learn More</Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 riyasatsweets mt-3 m-0 p-0 order-lg-2 order-md-2">
        <img src="https://riyasatsweets.ca/wp-content/uploads/2022/01/Catering-Services.jpg" alt="Catering services" className="img-fluid"></img> 
        </div>
      </div>
    </>
  );
}
