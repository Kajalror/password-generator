import { Link } from "react-router-dom";
export default function Catering(){
  return (
    <>
      <div className="row whiteibg">
        <div className="col-lg-6 col-md-6 col-sm-10 col-12 event-catering order-lg-1 order-md-1 order-sm-2 order-2 p-0">
          <img src="https://riyasatsweets.ca/wp-content/uploads/2022/01/Booking-1.jpg" className="img-fluid"alt="riyasatweets"></img>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 col-12 text-center order-1">
          <h3 className=" text-center fontsize pt-0 m-0 ">
            Event<br></br> Catering
          </h3>
          <div className="mb-0 mt-0 pt-2 pb-0 p-0 text-center order-lg-2 order-md-2 order-sm-1 order-1">
          <p>
            Our chefs are specialized in cooking best Indian Cuisines. We
            servers a variety of vegetarian  and non-vegetarian cuisines for
            parties,events and other occassions.
          </p>
          <Link className="btn btn-outline-dark mb-3" to={"/Home"} role="button">
            Get in Touch
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
