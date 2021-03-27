import React from "react";
import { Card, CardImg } from "reactstrap";
function Offered()
{
    return(
        <div>
            <div className="container-fluid">
                <b><h2>Exclusive Offers</h2></b>
                <div className="row justify-content-center">
                    <div className="col-6 col-md-5 m-1">
                        <Card>
                            <CardImg width='300px' height="250px" src='assets/Offer1.jpeg' alt="Offered 1"/>
                        </Card>
                    </div>
                    <div className="col-6 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' src='assets/Offer2.jpeg' alt="Offered 2"/>
                        </Card>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offered;