import React, { Component } from 'react'
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
    Input,
    Pagination,
    PaginationItem,
    PaginationLink

} from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




class AccommodationsShow extends Component {



    componentDidMount() {

        this.props.searchAccommodation();
        this.props.getAccommodationTypes();



    }


    onTermSearch = (event) => {
        this.props.searchAccommodation({ term: event.target.value })
    }

    onTypeSearch = (event) => {

        this.props.searchAccommodation({ type: event.target.value })

    }

    onClickRooms = (accommId) => {

        this.props.history.push(`/accommodation/${accommId}/rooms`)
    }

    render() {

        if (this.props.accommodations && this.props.accommodations.data) {


            const { accommodations } = this.props;
            const accommodationsData = this.props.accommodations.data;
            return (
                <div>
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("../../assets/img/path3.png")}
                        />
                        <Container>
                            <Row>
                                <Col md="12" className="d-flex">
                                    <h1 className="mr-auto">Accommodation
                                                     <hr className="line-primary" />
                                        <br />

                                    </h1>
                                    <Col md="6">
                                        <Row className="justify-content-end align-self-start">
                                            <Col md="5">
                                                <Input
                                                    onChange={this.onTypeSearch}
                                                    type="select"
                                                    name="accommodationType" >
                                                    <option value=''>Select type</option>
                                                    {this.props.accommodationTypes.map(type => <option value={type.id} key={type.id}>{type.name}</option>)}
                                                </Input>
                                            </Col>
                                            <Col md="7" className="justify-content-end align-self-end">
                                                <Input
                                                    onChange={this.onTermSearch}

                                                    placeholder="Search"
                                                    type="text" />
                                            </Col>
                                        </Row>
                                        <br /><br />
                                        <Row className="justify-content-end align-self-start">
                                            <Pagination >
                                                <PaginationItem >
                                                    <PaginationLink
                                                        disabled={!accommodations.prev_page_url}
                                                        onClick={() => this.props.searchAccommodation(null, accommodations.prev_page_url)}>
                                                        <i className="tim-icons icon-minimal-left" />
                                                    </PaginationLink>
                                                </PaginationItem>

                                                <PaginationItem>
                                                    <PaginationLink
                                                        disabled={!accommodations.next_page_url}
                                                        onClick={() => this.props.searchAccommodation(null, accommodations.next_page_url)}>
                                                        <i className="tim-icons icon-minimal-right" />
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                            {accommodationsData.length > 0 ?
                                <Row>
                                    {accommodationsData.map(accomm => {


                                        return (
                                            <Col key={accomm.id} md="4">
                                                <Card className="card-coin card-plain">
                                                    <CardHeader>
                                                        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
                                                            {accomm.accommodation_images.map(img => {

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
                                                                <h4 className="text-uppercase">{accomm.name}</h4>
                                                                <span className="text-light">{accomm.description}</span>
                                                                <hr className="line-primary" />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <ListGroup>
                                                                <ListGroupItem>
                                                                    <div>
                                                                        <p className="h4 text-white">Accommodation type</p>
                                                                    </div>
                                                                    <div className="text-light">
                                                                        {accomm.accommodation_type.name}
                                                                    </div>

                                                                </ListGroupItem>
                                                                <br />
                                                                <ListGroupItem>
                                                                    <div>
                                                                        <p className="h4 text-white">Address</p>
                                                                    </div>
                                                                    <div className="text-light">
                                                                        {accomm.address}
                                                                    </div>
                                                                </ListGroupItem>
                                                                <br />
                                                                <ListGroupItem><i className="tim-icons icon-single-02" />{' '}{accomm.user.name}</ListGroupItem>
                                                            </ListGroup>
                                                        </Row>
                                                    </CardBody>
                                                    <CardFooter className="text-center">
                                                        <Button
                                                            onClick={() => this.onClickRooms(accomm.id)}
                                                            className="btn-simple"
                                                            color="primary">
                                                            View rooms
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                                <br /><br />
                                                <br /><br />
                                                <br /><br />
                                            </Col>

                                        );

                                    })}

                                </Row>
                                : <div>
                                    <br /><br />
                                    <h1 className="d-flex justify-content-center">Nothing found...</h1>
                                    <br /><br />
                                    <br /><br />
                                </div>
                            }

                        </Container>
                    </section>
                </div>
            )
        }






        return null;
    }
}

function mapStateToProps(state) {

    return {
        accommodations: state.accommodation.accommodations,
        accommodationTypes: state.accommodation.accommodationTypes,


    };

}

export default connect(mapStateToProps, actions)(AccommodationsShow);
