import { Link } from "react-router-dom";

export default function Oorder() {
  return (
    <>
      <div className="row whiteibg">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 m-0 mb-0 order-lg-1 order-md-1">
          <div className="order-2">
          <h3 className=" text-center fontsize pt-3 ">READY TO ORDER...</h3>
          <div className=" m-0 p-0 mb-3 text-center justify=content-center ">
            <p className="adjustpara text-center px-5">
              Our catering’s versatile chefs can accommodate any type of event
              with food from our extensive menus or even prepare specially
              requested dishes with the highest quality food on site. Treat
              yourself and your guests with our delicious food.
            </p>
            <Link className="btn btn-outline-dark mt-3" href="#Home" role="button">
              Learn More
            </Link>
          </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 riyasatsweets mt-3 p-0 m-0 order-lg-2 order-md-2">
          <img
            src="https://riyasatsweets.ca/wp-content/uploads/2022/01/Booking-1.jpg"
            alt="Catering services"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </>
  );
}
