import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Row, Col } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Images
import errorImg from "../../assets/images/error.png";

const Pages404 = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>404 Error Page | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>
      <div className="authentication-bg d-flex align-items-center pb-0 vh-100">
        <div className="content-center w-100">
          <div className="container">
            <div className="row justify-content-center">
              <Col xl={10}>
                <Card>
                  <CardBody>
                    <div className="row align-items-center">
                      <div className="col-lg-4 ms-auto">
                        <div className="ex-page-content">
                          <h1 className="text-dark display-1 mt-4">404!</h1>
                          <h4 className="mb-4">Sorry, page not found</h4>
                          <p className="mb-5">It will be as simple as Occidental in fact, it will be Occidental to an English person</p>
                          <a className="btn btn-primary mb-5 waves-effect waves-light" href="/"><i className="mdi mdi-home"></i> Back to Dashboard</a>
                        </div>

                      </div>
                      <div className="col-lg-5 mx-auto">
                        <img
                          src={errorImg}
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Pages404
