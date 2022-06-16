import React from "react"
import MetaTags from 'react-meta-tags';

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"

import { Container, Row, Col, CardBody, Card, Button } from "reactstrap"

// import images
import logo from "../../assets/images/logo-sm.png";
import avatar from "../../assets/images/users/user-1.jpg"

const LockScreen = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Lock Screen | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="dashboard" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6" xl="4">
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Locked</h5>
                    <p className="text-white-50">
                      Hello Smith, enter your password to unlock the screen!
                      </p>
                      <Link to="/dashboard" className="logo logo-admin">
                        <img src={logo} height="24" alt="logo" />
                      </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm className="mt-4">
                      <div className="pt-3 text-center">
                        <img
                          src={avatar}
                          className="rounded-circle img-thumbnail avatar-lg"
                          alt="thumbnail"
                        />
                        <h5 className="font-size-16 mt-3">Maria Laird</h5>
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="row mb-0">
                        <Col xs="12" className="text-end">
                          <Link
                            className="btn btn-primary w-md waves-effect waves-light"
                            to="/"
                          >
                            Unlock
                            </Link>
                        </Col>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Not you ? return{" "}
                  <Link
                    to="/login"
                    className="fw-medium text-primary"
                  >
                    {" "}
                      Sign In{" "}
                  </Link>{" "}
                </p>
                <p>
                  © 2021 Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default LockScreen
