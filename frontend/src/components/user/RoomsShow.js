import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions';


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink

} from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import GoogleMaps from '../googleMaps/GoogleMaps';
import RoomReservation from './RoomReservation';







class RoomsShow extends React.Component {




    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getRooms(id, false);

    }

    onReserveClick = (room) => {

        this.props.history.push(`/accommodation/${this.props.match.params.id}/rooms/${room.id}/reserve`);
    }


    render() {

        if (this.props.rooms && this.props.rooms.data && this.props.rooms.data.length > 0) {



            const { rooms } = this.props;
            const roomData = this.props.rooms.data;


            this.props.getLatLng(roomData[0].accommodation);


            return (
                <div>
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path3.png")}
                        />

                        <Container>
                            <Row className="d-flex">
                                <Col className="align-self-start" md="5">

                                    <Row >
                                        <p className="my-h1 text-white">{roomData[0].accommodation.name}</p>


                                    </Row>
                                    <Row>
                                        <hr className="new-line" />
                                        <br /> <br />
                                    </Row>
                                    <Row >
                                        <p className="h4 text-white">{'Description:'}&nbsp;</p>
                                        <p className="my-h5 text-light d-flex align-self-end">
                                            {roomData[0].accommodation.description}
                                        </p>
                                    </Row>
                                    <Row >

                                        <p className="h4 text-white">{'Address:'}&nbsp;
                                            </p>
                                        <p className="my-h5 text-light d-flex align-self-end">
                                            {roomData[0].accommodation.address}
                                        </p>

                                    </Row>
                                    <Row >
                                        <p className="h4 text-white d-flex align-self-center">{'Type:'}&nbsp;
                                            </p>
                                        <p className="my-h5 text-light d-flex align-self-end">
                                            {roomData[0].accommodation.accommodation_type.name}
                                        </p>

                                    </Row>
                                    <Row>
                                        <p className="h4 text-white d-flex align-self-end">{'Rating:'}&nbsp;</p>
                                        <p className="my-h5 text-light d-flex align-self-end pl-2">
                                            7.5
                                            </p>
                                        &nbsp;
                                            <img
                                            className="star d-flex align-self-end"
                                            src={require("../../assets/img/star.png")}
                                            alt="rating" />
                                        <Col className="d-flex align-self-end">
                                            <Button size="lg" color="success" className="btn-round btn-simple" >
                                                Rate
                                                  </Button>
                                        </Col>
                                    </Row>
                                    <Row  >


                                    </Row>
                                </Col>
                                <Col className="d-flex align-self-end">
                                    <GoogleMaps

                                        height="35vh"
                                        width="100%"
                                    />
                                </Col>

                            </Row>

                        </Container>
                        <Container>
                            <br />


                            <br />
                        </Container>
                        <Container>
                            <Row>

                                <Col >

                                    <Row className="justify-content-end align-self-start">
                                        <Pagination >
                                            <PaginationItem >
                                                <PaginationLink
                                                    disabled={!rooms.prev_page_url}
                                                    onClick={() => this.props.getRooms(this.props.match.params.id, rooms.prev_page_url)}>
                                                    <i className="tim-icons icon-minimal-left" />
                                                </PaginationLink>
                                            </PaginationItem>

                                            <PaginationItem>
                                                <PaginationLink
                                                    disabled={!rooms.next_page_url}
                                                    onClick={() => this.props.getRooms(this.props.match.params.id, rooms.next_page_url)}>
                                                    <i className="tim-icons icon-minimal-right" />
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </Row>
                                </Col>
                            </Row>
                            <br /><br /><br /><br /><br />
                            <Row>
                                {roomData.map(room => {


                                    return (
                                        <Col key={room.id} md="4">
                                            <Card className="card-coin h-75">
                                                <CardHeader>
                                                    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
                                                        {room.room_images.map(img => {
                                                            return (
                                                                <div key={img.id} className="img-carousel">
                                                                    <img

                                                                        alt={img.name}
                                                                        src={`http://localhost:8000/${img.image_source}`} />

                                                                </div>
                                                            );
                                                        })}
                                                    </Carousel>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row>
                                                        <Col className="text-center" md="12">
                                                            <h4 className="text-uppercase">{room.name}</h4>
                                                            <span className="text-light">{room.description}</span>
                                                            <hr className="line-success" />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <ListGroup>
                                                            <ListGroupItem>{room.bed_count}&nbsp;beds</ListGroupItem>
                                                            <ListGroupItem>{room.price_per_night}&nbsp;€ / night</ListGroupItem>
                                                        </ListGroup>
                                                    </Row>
                                                </CardBody>
                                                <CardFooter className="text-center">
                                                    <RoomReservation

                                                        room={room}
                                                    />
                                                </CardFooter>
                                            </Card>
                                            <br /><br />
                                            <br /><br />
                                            <br /><br />
                                        </Col>

                                    );

                                })}

                            </Row>



                        </Container>
                    </section>
                </div>
            )


        }

        return (
            <div>
                <br /><br />
                <br /><br />
                <div>
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path4.png")}
                        />
                        <Container>
                            <Row className="d-flex">
                                <p className="h1 text-white mx-auto pb-3">No rooms registered yet...</p>
                            </Row>

                            <Row className="d-flex">
                                <Link className="mx-auto" to={'/'} >
                                    <Button
                                        className="btn-simple"
                                        color="success"
                                    >
                                        Back to Home
                                 </Button>
                                </Link>
                            </Row>
                        </Container>
                    </section>
                </div>
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
            </div>

        );
    }
}

function mapStateToProps(state) {

    return {

        rooms: state.room.rooms

    };

}

export default connect(mapStateToProps, actions)(RoomsShow);
