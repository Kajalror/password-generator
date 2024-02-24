function Beverages(props){
    let diss =props.Indian;
    return(
        <>
            {/* <div className="row">
                <div className="text-center mt-4">
                  <h5 className="pb-3">VEG. APPETIZERS </h5>
                </div>
            </div> */}
            <div className="col-lg-6 col-md-5 col-sm-12 col-12 ">
          <div className=" row coke justify-content-between">
            <div className="item-name col-8 text-start"> <strong>
                 {diss.name}
                  </strong> </div>
            <div className="item-prices col-3 text-end">
                {diss.price}
                 </div>
          </div>
          <div className=" Indian ">
            <p className="item-text">
            {diss.Text}
            </p>
          </div>
        </div>


            {/* </div> */}
        </>
    )
}
export {Beverages};