import React from "react";
import { Card, CardImg, CardText, CardTitle, CardSubtitle, CardImgOverlay, Button  } from "reactstrap";
import { Property } from "../Offered/properties.js";
import { Link } from "react-router-dom";



function RenderProp({proj}) {
    return (
        <Card className="properties">
            <CardImg width="100%" src={proj.image} alt={proj.name} />
            <CardImgOverlay>
                <CardText style = {{color: "white"}}>{proj.city}</CardText>
            </CardImgOverlay>
            <div className="row">
                <div className="col-7 col-md-7">
                    <CardTitle tag="h5">{proj.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 ">{proj.owner}</CardSubtitle>
                    <CardText tag="h6" className="text-muted">{proj.type}</CardText>
                </div>
                <div className="col-5 col-md-5 text-right" id="price">
                    <CardTitle tag="h5">{proj.price}<br /><div className="text-muted" style={{fontSize: "small"}}>onwards</div></CardTitle>
                    <Link to={{pathname: '/details' }} >
                        <Button>See Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

const Projects = () => {

    const latestprop = Property.map((proj) => {
        return(
            <div className="col-12 col-md-5 m-1" key={proj.id}>
                <RenderProp proj={proj} />
            </div>
        );
    });
    return (
        <div className="container">
            <b><h2>Latest Projects</h2></b>
            <div className="row justify-content-center">
                {latestprop}
            </div>
        </div>
    );
}

export default Projects;