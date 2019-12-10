import React from "react";
import { reduxForm, Field } from 'redux-form';
import classnames from "classnames";
import { compose } from 'redux';
import { connect } from 'react-redux';
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


import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import { DropzonePreview } from '../imageUpload/DropzonePreview';

class RoomEdit extends React.Component {


    state = {
        roomImages: []
    };


    componentDidMount() {

        this.props.getRoom(this.props.match.params.roomId)

        document.body.classList.toggle("profile-page");


    }



    onFileDrop = ({ meta, file }, status) => {


        if (status === 'done') {
            this.setState({ roomImages: [...this.state.roomImages, file] });
        }

    }



    onSubmit = (formProps) => {

        const { id } = this.props.room;

        const fd = new FormData();
        Object.keys(formProps).forEach(key => fd.append(key, formProps[key]));

        const images = this.state.roomImages;

        fd.append('id', id);

        fd.append('accommodation_id', this.props.match.params.id);

        images.forEach(image => fd.append('images[]', image));

        fd.append('_method', 'PUT');

        this.props.editRoom(fd, () => {
            this.props.history.push('/')
        });

    };

    onClickRemoveImage = (img) => {
        this.props.deleteImage(img, 'room');
    };


    render() {

        const { handleSubmit } = this.props;

        if (this.props.room) {

            const { room } = this.props;

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
                            src={require("../../assets/img/path3.png")}
                        />

                        <section className="section">
                            <br /><br />
                            <br /><br />
                            <Container>
                                <Row className="d-flex h-100 justify-content-center">
                                    <Col className="" md="6">
                                        <Card className="card-plain">
                                            <CardHeader>
                                                <h1 className="profile-title text-left">{room.name}{' room edit'}</h1>
                                                <h3 className="text-on-back">
                                                    <i className="tim-icons icon-settings" />
                                                </h3>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="d-flex h-100 justify-content-center">
                                    <Col md="6">
                                        <Card className="card-plain">
                                            <CardBody>
                                                <Form
                                                    onSubmit={handleSubmit(this.onSubmit)}
                                                    type="multipart/form-data">
                                                    <Row>
                                                        <Col >
                                                            <label>Room name</label>
                                                            <InputGroup className={classnames({
                                                                "input-group-focus": this.state.nameFocus
                                                            })}>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="fas fa-door-closed" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    tag={Field}
                                                                    name="name"
                                                                    component="input"
                                                                    placeholder="Room Extravaganza"
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
                                                        <Col>
                                                            <label >Select bed count</label>
                                                            <InputGroup className={classnames({
                                                                "input-group-focus": this.state.bedCount
                                                            })}>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="fas fa-bed" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    tag={Field}
                                                                    component="select"
                                                                    type="select"
                                                                    name="bed_count"
                                                                    onFocus={e =>
                                                                        this.setState({ bedCount: true })
                                                                    }
                                                                    onBlur={e =>
                                                                        this.setState({ bedCount: false })
                                                                    }>
                                                                    <option value={1} >1</option>
                                                                    <option value={2} >2</option>
                                                                    <option value={3} >3</option>
                                                                    <option value={4} >4</option>
                                                                    <option value={5} >5</option>
                                                                    <option value={6} >6</option>
                                                                </Input>
                                                            </InputGroup>
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
                                                                    placeholder="Write something about room..."
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
                                                        <Col >
                                                            <label>Price per night</label>
                                                            <InputGroup className={classnames({
                                                                "input-group-focus": this.state.priceFocus
                                                            })}>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="fas fa-money-bill-alt" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    tag={Field}
                                                                    name="price_per_night"
                                                                    component="input"
                                                                    placeholder="$82.99"
                                                                    type="number"
                                                                    onFocus={e =>
                                                                        this.setState({ priceFocus: true })
                                                                    }
                                                                    onBlur={e =>
                                                                        this.setState({ priceFocus: false })
                                                                    }
                                                                />
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="mr-auto">
                                                            <div>{
                                                                room.room_images.map(img => {
                                                                    return <div key={img.id}>
                                                                        <br />
                                                                        <Row >
                                                                            <Col className="image-container" md="5">
                                                                                <img className="img-upload" src={`http://localhost:8000/${img.image_source}`} alt={img.name} />
                                                                            </Col>
                                                                            <Col className="justify-content-center align-self-center" md="5">
                                                                                <span className="text-light">{img.name}</span>
                                                                            </Col>
                                                                            <Col className="align-self-center" md="1">
                                                                                <button onClick={() => this.onClickRemoveImage(img)} className="btn btn-round btn-danger btn-simple btn-icon btn-sm" type="button">
                                                                                    <i className="tim-icons icon-simple-remove" />
                                                                                </button>
                                                                            </Col>

                                                                        </Row>
                                                                        <br />
                                                                    </div>
                                                                })
                                                            }
                                                            </div>
                                                            <Field
                                                                name="roomImages"
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
                                                    <div className="d-flex justify-content-center" >
                                                        <Button
                                                            className="btn-round btn-simple"
                                                            size="lg"
                                                            color="success"
                                                            type="submit"
                                                        >
                                                            Save
                                                      </Button>
                                                    </div>
                                                </Form>
                                            </CardBody>
                                        </Card>
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
        return null;
    }
}

function mapStateToProps(state) {

    const { room } = state.room;


    if (room) {

        return {

            room,
            initialValues: {
                name: room.name,
                description: room.description,
                bed_count: room.bed_count,
                price_per_night: room.price_per_night
            }

        };

    }
    return {};
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'roomEdit'
    })
)(RoomEdit)