import React from "react";
import { reduxForm, Field } from 'redux-form';
import classnames from "classnames";
import { compose } from 'redux';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import * as actions from '../../actions';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Form,
    Input,
    InputGroup,
    Container,
    Row,
    Col,
    InputGroupAddon,
    InputGroupText,


} from "reactstrap";

import GoogleMaps from '../googleMaps/GoogleMaps';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import { DropzonePreview } from '../imageUpload/DropzonePreview';
import AlertMessage from '../ui/AlertMessage';

class AccommodationRegister extends React.Component {


    state = {
        accommodationImages: []
    };


    componentDidMount() {

        document.body.classList.toggle("profile-page");

        this.props.getAccommodationTypes();

    }


    componentWillUnmount() {
        this.props.clearMessage();
    }


    onAddressChange = (event) => {

        this.props.addressToCords(event.target.value);

    }
    onFileDrop = ({ meta, file }, status) => {


        if (status === 'done') {
            this.setState({ accommodationImages: [...this.state.accommodationImages, file] });
        }

    }



    onSubmit = (formProps) => {

        const { token, latitude, longitude, place, country, address } = this.props;

        const fd = new FormData();
        Object.keys(formProps).forEach(key => fd.append(key, formProps[key]));

        const images = this.state.accommodationImages;

        images.forEach(image => fd.append('images[]', image));


        if (latitude && longitude) {
            fd.append('latitude', latitude)
            fd.append('longitude', longitude)
        }

        if (place && address && country) {


            fd.append('placeName', place);
            fd.append('address', address);
            fd.append('country', JSON.stringify(country));

        }

        const { user } = jwt.decode(token);
        fd.append('userId', user.id);

        this.props.accommodationRegister(fd, () => {
            this.props.history.push('/my-accommodation')
        });

    };


    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <div className="wrapper">


                    <img
                        alt="..."
                        className="dots"
                        src={require("../../assets/img/dots.png")}
                    />
                    <img
                        alt="..."
                        className="path"
                        src={require("../../assets/img/path4.png")}
                    />

                    <section className="section">
                        <br /><br />
                        <br /><br />
                        <Container>
                            <Row className="container">
                                <Col className="mr-auto" md="6">
                                    <Card className="card-plain">
                                        <CardHeader>
                                            <h1 className="profile-title text-left">Register accommodation</h1>
                                            <h3 className="text-on-back"><i className="tim-icons icon-notes" /></h3>
                                        </CardHeader>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="d-flex h-100">
                                <Col className="mr-auto justify-content-start align-self-start" md="6">
                                    <Card className="card-plain">
                                        <CardBody>
                                            <Form
                                                onSubmit={handleSubmit(this.onSubmit)}
                                                type="multipart/form-data">
                                                <Row>
                                                    <Col >
                                                        <label>Accommodation name</label>
                                                        <InputGroup className={classnames({
                                                            "input-group-focus": this.state.nameFocus
                                                        })}>
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="tim-icons icon-istanbul" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                tag={Field}
                                                                name="name"
                                                                component="input"
                                                                placeholder="Villa Palace"
                                                                type="text"
                                                                onFocus={e =>
                                                                    this.setState({ nameFocus: true })
                                                                }
                                                                onBlur={e =>
                                                                    this.setState({ nameFocus: false })
                                                                }
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col >
                                                        <label>Address</label>
                                                        <InputGroup className={classnames({
                                                            "input-group-focus": this.state.addressFocus
                                                        })}>
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="tim-icons icon-square-pin" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                name="address"
                                                                onChange={this.onAddressChange}
                                                                placeholder="Baker Street 4, London, U.K."
                                                                type="text"
                                                                onFocus={e =>
                                                                    this.setState({ addressFocus: true })
                                                                }
                                                                onBlur={e =>
                                                                    this.setState({ addressFocus: false })
                                                                }
                                                            />

                                                        </InputGroup>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <label >Select accommodation type</label>
                                                        <Input
                                                            tag={Field}
                                                            component="select"
                                                            type="select"
                                                            name="accommodationType" >
                                                            {this.props.accommodationTypes.map(type => <option value={type.id} key={type.id}>{type.name}</option>)}
                                                        </Input>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <label>Description</label>
                                                        <InputGroup className={classnames({
                                                            "input-group-focus": this.state.descriptionFocus
                                                        })}>

                                                            <Input
                                                                tag={Field}
                                                                component="textarea"
                                                                name="description"
                                                                bsSize="lg"
                                                                placeholder="Write something about your accommodation..."
                                                                type="textarea"
                                                                onFocus={e =>
                                                                    this.setState({ descriptionFocus: true })
                                                                }
                                                                onBlur={e =>
                                                                    this.setState({ descriptionFocus: false })
                                                                }
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="mr-auto">

                                                        <Field
                                                            name="accommodationImages"
                                                            component={Dropzone}
                                                            type="file"
                                                            inputWithFilesContent="Add more"
                                                            inputContent="Drag Images or Click to Browse"
                                                            PreviewComponent={DropzonePreview}
                                                            onChangeStatus={this.onFileDrop}
                                                            classNames={{
                                                                inputLabelWithFiles: 'btn btn-success btn-simple btn-sm mr-auto'
                                                            }}
                                                            accept="image/*"
                                                        />

                                                    </Col>
                                                </Row>
                                                <br /><br />
                                                <AlertMessage />
                                                <br /><br />
                                                <Button
                                                    className="btn-round btn-simple float-right"
                                                    size="lg"
                                                    color="success"
                                                    type="submit"
                                                >
                                                    Register
                                                      </Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className="ml-auto justify-content-start align-self-start pt-4" md="5">

                                    <GoogleMaps
                                        height="300px"
                                        width="550px"
                                    />

                                </Col>
                            </Row>
                        </Container>
                        <br /><br />
                        <br /><br />

                    </section>

                </div>

            </div>

        );
    }
}

function mapStateToProps(state) {

    return {
        latitude: state.accommodation.lat,
        longitude: state.accommodation.lng,
        place: state.accommodation.place,
        country: state.accommodation.country,
        accommodationTypes: state.accommodation.accommodationTypes,
        token: state.auth.token,
        address: state.accommodation.address
    };

}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'accommodationRegister',
        initialValues: {
            accommodationType: 1
        }
    })
)(AccommodationRegister)