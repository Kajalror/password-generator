import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <>
      <div className="row justify-content-center">
        <div className=" col-12 col-lg-12 col-md-12 col-sm-12 justify-content-center mb-3 ">
          <h2 className="text-center fontsize pt-0 mb-0">OUR VISION</h2>
          <div className="underline mt-0  justify-content-center text-center"></div>
          <div className="col-12 col-lg-10 col-md-11 col-sm-12 adjustpara text-center">
            <p className="adjustpara px-4 py-4 mb-4">
              We want to deliver the taste of Traditional & Authentic dishes of
              India to everyone. Our food has a lot of variety & we are working
              to give a pleasure of variety on your plate. So you can feel the
              oasis of deliciousness into your mouth.
            </p>
          </div>
          <div className="row justify-content-center fontstyle">
            <div className=" col-lg-3 col-md-4 col-sm-10 col-12  text-center">
              <h2>10000+</h2>
              <h4>Caterings</h4>
            </div>
            <div className="col-lg-3  col-md-4 col-sm-10 col-12 text-center">
              <h2>4</h2>
              <h4> Locations</h4>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-10 col-12  text-center">
              <h2>1</h2>
              <h4>Banquet</h4>
            </div>
          </div>
          <div className=" text-center mt-4">
            <Link className="btn btn-outline-dark" to={"/reservation"} role="button">
              View Locations
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
