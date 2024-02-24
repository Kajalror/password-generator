
 function Etobicoke(props) {
    let dishes = props.Indianfood;
  return (
    <>
    
      {/* <div className="row justify-content-around"> */}
        <div className="col-lg-6 col-md-5 col-sm-12 col-12 ">
          <div className=" row coke justify-content-between">
            <div className="item-name col-8 text-start"> <strong>
                 {dishes.name}
                  </strong> </div>
            <div className="item-prices col-3 text-end">
                {dishes.price}
                 </div>
          </div>
          <div className=" Indian ">
            <p className="item-text">
            {dishes.Text}
            </p>
          </div>
        </div>
        
    </>
  );
}

export {Etobicoke};
