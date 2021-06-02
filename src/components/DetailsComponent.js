import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardSubtitle, CardImgOverlay, Button} from 'reactstrap';
import { NrProperty } from '../Offered/nrproperty';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Details()
{
    return(
        <div>
            <Card>
                <CardImg style={{height:"400px", boxShadow:"2px 10px #dcdcdc"}} width = "100%" object src="/assets/Offer6.png" alt="Search buildings" />
            </Card>
            <br />
            <div className="container text-left">
                <h3 className="mb-2"><b>Shyam Tenaments</b></h3>
                <p>By Balaji group <br />
                    <span className="text-muted"><FaMapMarker /> Kolkata</span>
                </p>
                <h5><b>₹ 40 Lac</b></h5>
                <hr style={{backgroundColor:"#696969"}}/>
                <br />
                <h5>About Shyam Tenaments</h5>
                <p>Description XYZ</p>
                <br />
                <div className="row">
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">Status</p>
                        <b><p>Available</p></b>
                    </div>
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">Type</p>
                        <b><p>Residential</p></b>
                    </div>
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">Dimensions</p>
                        <b><p>50 sq. ft</p></b>
                    </div>
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">State</p>
                        <b><p>West Bengal</p></b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">City</p>
                        <b><p>Kolkata</p></b>
                    </div>
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">Address</p>
                        <b><p>Opp, R.F Camp, SP Ring Road, Vastral, Kolkata,382418</p></b>
                    </div>
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">Furnished</p>
                        <b><p>YES</p></b>
                    </div>
                    <div className="col-3 col-sm-3">
                        <p className="text-muted">Parking Lot</p>
                        <b><p>Available</p></b>
                    </div>
                </div>
                <br/>
                <h5>Contact No. - </h5>
                9876543212
                <br />
                <br />
                <h4>Nearby Projects</h4>
                <br/>
                <div className="row">
                    <div className="col-6 col-sm-4">
                        <Card className="properties">
                            <CardImg width="100%" src={NrProperty[0].image} alt={NrProperty[0].name} />
                            <CardImgOverlay>
                                <CardText style = {{color: "white"}}>{NrProperty[0].city}</CardText>
                            </CardImgOverlay>
                            <div className="row">
                                <div className="col-7 col-md-7">
                                    <CardTitle tag="h5">{NrProperty[0].name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 ">{NrProperty[0].owner}</CardSubtitle>
                                    <CardText tag="h6" className="text-muted">{NrProperty[0].type}</CardText>
                                </div>
                                <div className="col-5 col-md-5 text-right" id="price">
                                    <CardTitle tag="h5">{NrProperty[0].price}<br /><div className="text-muted" style={{fontSize: "small"}}>onwards</div></CardTitle>
                                    <Link to={{pathname: '/details' }} >
                                        <Button>See Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-6 col-sm-4">
                        <Card className="properties">
                            <CardImg width="100%" src={NrProperty[1].image} alt={NrProperty[1].name} />
                            <CardImgOverlay>
                                <CardText style = {{color: "white"}}>{NrProperty[1].city}</CardText>
                            </CardImgOverlay>
                            <div className="row">
                                <div className="col-7 col-md-7">
                                    <CardTitle tag="h5">{NrProperty[1].name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 ">{NrProperty[1].owner}</CardSubtitle>
                                    <CardText tag="h6" className="text-muted">{NrProperty[1].type}</CardText>
                                </div>
                                <div className="col-5 col-md-5 text-right" id="price">
                                    <CardTitle tag="h5">{NrProperty[1].price}<br /><div className="text-muted" style={{fontSize: "small"}}>onwards</div></CardTitle>
                                    <Link to={{pathname: '/details' }} >
                                        <Button>See Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-6 col-sm-4">
                        <Card className="properties">
                            <CardImg width="100%" src={NrProperty[2].image} alt={NrProperty[2].name} />
                            <CardImgOverlay>
                                <CardText style = {{color: "white"}}>{NrProperty[2].city}</CardText>
                            </CardImgOverlay>
                            <div className="row">
                                <div className="col-7 col-md-7">
                                    <CardTitle tag="h5">{NrProperty[2].name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 ">{NrProperty[2].owner}</CardSubtitle>
                                    <CardText tag="h6" className="text-muted">{NrProperty[2].type}</CardText>
                                </div>
                                <div className="col-5 col-md-5 text-right" id="price">
                                    <CardTitle tag="h5">{NrProperty[2].price}<br /><div className="text-muted" style={{fontSize: "small"}}>onwards</div></CardTitle>
                                    <Link to={{pathname: '/details1' }} >
                                        <Button>See Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;