import React from 'react';
import { Alert, Progress, Row, Col } from 'reactstrap';

export const DropzonePreview = (dropzoneProps) => {

    const {
        meta: { name = '', percent = 0, size = 0, previewUrl, status, duration, validationError },
        fileWithMeta: { remove },
    } = dropzoneProps;


    let title = `${name || '?'}, ${size}`
    if (duration) title = `${title}, ${duration}`

    if (status === 'error_file_size' || status === 'error_validation') {
        return (
            <Row className="d-flex h-100">
                <Col className="justify-content-center align-self-center" md="10">
                    <Alert>
                        <span >{title}</span>
                        {status === 'error_file_size' && <span>{'File size is not valid'}</span>}
                        {status === 'error_validation' && <span>{String(validationError)}</span>}
                    </Alert>
                </Col>
                <Col className="justify-content-center align-self-center pb-2" md="1">
                    <button onClick={remove} className="btn btn-round btn-danger btn-simple btn-icon btn-sm">
                        <i className="fa fa-times" />
                    </button>
                </Col>
            </Row>

        )
    }

    if (status === 'error_upload_params' || status === 'exception_upload' || status === 'error_upload') {
        title = `${title} (upload failed)`
    }
    if (status === 'aborted') title = `${title} (cancelled)`

    return (
        <div>
            <br />
            <Row>
                <Col  className="image-container" md="5">
                    {previewUrl && <img  className="img-upload" title={title} alt={title} src={previewUrl} />}
                    {!previewUrl && <span >{title}</span>}
                </Col>
                <Col className="justify-content-center align-self-center" md="5">
                    <div className="progress-container progress-success">
                        <span className="progress-badge">{name}</span>
                        {status !== 'done' ? (
                            <Progress max={100} value={percent} >
                                <span>{Math.round(percent)}</span>
                            </Progress>
                        ) : null
                        }
                    </div>
                </Col>
                <Col className="align-self-center" md="1">
                    <button onClick={remove} className="btn btn-round btn-danger btn-simple btn-icon btn-sm">
                        <i className="fa fa-times" />
                    </button>
                </Col>
            </Row>
            <br />
        </div >

    )


}