export default function Datapass(props){
    let offerss = props.Data
    return(
        <>
            <div className="col-lg-4 col-md-6 col-sm-10 col-12 gx-2 gy-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 card-body">
                          {/* <img src=" " className="img-fluid rounded-start" alt=" "> */}
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <h5 className="card-title"> 
                            {offerss.title}
                             </h5>
                            <p className="card-text">
                               {offerss.text}
                               </p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}