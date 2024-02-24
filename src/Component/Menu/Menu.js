import Footer from "../Home/Footer";
import Nav from "../Nav/NavBar";
import { Beverages } from "./Beverages";
import {Etobicoke} from "./Etobicoke";
import { Food} from "./Food-item";
import { Food2 } from "./Food-item2";


export default function Menu(){
    return(
        <>
        <Nav/>
            <div className="row">
                <div className="Meennuu text-center">
                    <div className="positon justify-content-center">
                        <h3 className="menuu">
                            menu
                        </h3>
                        <div className="underline-menuu"></div>
                        <div className="sub-title"> RIYASAT SWEETS & RESTAURANT</div>
                    </div>
                </div>

                <div className="row">
                    <div className="tdm-title pt-5 text-center">
                    <h3 className="vc-row"> MENU - ETOBICOKE</h3>
                    <div className="Under-title"> </div>
                </div>
                    <div className="text-center mt-4">
                      <h5 className="pb-3">VEG. APPETIZERS </h5>
                    </div>
                </div>
                <div className="row justify-content-around">
                    {
                        Food.map((items)=>{
                           return <Etobicoke Indianfood={items}/>
                         })
                    }
                </div>
                {/* <Beverages/> */}
                <div className="row">
                    <div className="text-center mt-4">
                      <h5 className="pb-3">BEVERAGES</h5>
                    </div>
                </div>
                <div className="row justify-content-around">
                    {
                        Food2.map((items)=>{
                           return <Beverages Indian={items}/>
                         })
                    }
                </div>
                

            </div>
            <Footer/>
        </>
    )
}