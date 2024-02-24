import { Link } from "react-router-dom";
import "../../App.css";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-0 mx-0 p-0">
        <div className="container-fluid">
            <div className="logo p-0">
          <Link className="navbar-brand p-0" to={"/"}>
            <img
              src="https://www.theriyasat.ca/wp-content/uploads/2023/02/Franchise-Logo-Copy-_2_-1-300x87.webp"
              width="90%" className="img-fluid" alt="riayasat"/>
          </Link>
          </div>
          <div className=" my-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
           
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/Home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/about"}>
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to={"/Services"}>
                  Services
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link active" to={"/Contact"}>
                   Contact
                 </Link>  
              </li> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to={"/"}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to={"/menu"}>
                      Etobicoke
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" href={"/"}>
                      Deep Dropdown
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to={"/"}>
                      Drop Down-2
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to={"/"}>
                      Drop Down-3
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/Reservation"}>
                   Reservation
                 </Link>  
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
