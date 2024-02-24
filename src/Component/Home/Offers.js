import Datapass from "./Datapass"
import { Offr} from './FakeData';
import { Link } from "react-router-dom";
//import Story from "./Story";
//import Catering from "./Catering";
//import Oorder from "./Oorder";

export default function Offers(){
    
    return (
        <>
            <div className="row headingbg text-center ">
                <div className="title mt-4">
                    <h5 className="heading text-center">
                         WHAT WE OFFER 
                    </h5>
                   <div className="row">
                   {
                      Offr.map((items)=>{
                        return <Datapass Data={items}/>
                      })
                    }
                    </div>
                    <Link className="btn btn-outline-dark btncolor mb-5" to={"/menu"} role="button">
                        Learn More
                    </Link>
                </div>
                {/* <Story/>
                <Catering/>
                <Oorder/> */}
            </div>
        </>
    )
}