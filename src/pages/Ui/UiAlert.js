import React from "react"
import MetaTags from 'react-meta-tags';
import {
  Alert,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  UncontrolledAlert,
  Container,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiAlert = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Alerts | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Alerts" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Alerts are available for any length of text, as well as an
                    optional dismiss button. For proper styling, use one of the
                    four <strong>required</strong> contextual classes (e.g.,{" "}
                    <code className="highlighter-rouge">.alert-success</code>).
                    For inline dismissal, use the alerts jQuery plugin.{" "}
                  </p>

                  <div className="">
                    <Alert color="success">
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </Alert>

                    <Alert color="info">
                      <strong>Heads up!</strong> This alert needs your
                      attention, but it's not super important.
                    </Alert>

                    <Alert color="warning">
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </Alert>

                    <Alert color="danger" className="mb-0">
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Link color</h4>
                  <p className="card-title-desc">
                    Use the{" "}
                    <code className="highlighter-rouge">.alert-link</code>{" "}
                    utility className to quickly provide matching colored links
                    within any alert.
                  </p>

                  <div className="">
                    <Alert color="success">
                      <strong>Well done!</strong> You successfully read{" "}
                      <Link to="#" className="alert-link">
                        this important alert message
                      </Link>
                      .
                    </Alert>
                    <Alert color="info">
                      <strong>Heads up!</strong> This{" "}
                      <Link to="#" className="alert-link">
                        alert needs your attention
                      </Link>
                      , but it's not super important.
                    </Alert>
                    <Alert color="warning">
                      <strong>Warning!</strong> Better check yourself, you're{" "}
                      <Link to="#" className="alert-link">
                        not looking too good
                      </Link>
                      .
                    </Alert>
                    <Alert color="danger" className="mb-0">
                      <strong>Oh snap!</strong>{" "}
                      <Link to="#" className="alert-link">
                        Change a few things up
                      </Link>{" "}
                      and try submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dismissing </CardTitle>
                  <p className="card-title-desc">
                    You can see this in action with a live demo:
                  </p>

                  <div className="">
                    <UncontrolledAlert color="success">
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="info" role="alert">
                      <strong>Heads up!</strong> This alert needs your
                      attention, but it's not super important.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" role="alert">
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="danger" className="mb-0" role="alert">
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Additional content</h4>
                  <p className="card-title-desc">
                    Alerts can also contain additional HTML elements like
                    headings and paragraphs.
                  </p>

                  <div className="">
                    <div className="alert alert-success mb-0" role="alert">
                      <h4 className="alert-heading font-18">Well done!</h4>
                      <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                      </p>
                      <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Alerts are available for any length of text, as well as an
                    optional dismiss button. For proper styling, use one of the
                    fourr <strong>required</strong> contextual classes (e.g.,{" "}
                    <code className="highlighter-rouge">
                      .alert-success .bg-**
                    </code>
                    ). For inline dismissal, use the alerts jQuery plugin.{" "}
                  </p>

                  <div className="">
                    <Alert color="success" className="bg-success text-white">
                      <strong>Well done!</strong> You successfully read this important alert message.
                    </Alert>

                    <Alert color="info" className="bg-info text-white">
                      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                    </Alert>

                    <Alert color="warning" className="bg-warning text-white">
                      <strong>Warning!</strong> Better check yourself, you're not looking too good.
                    </Alert>

                    <Alert color="danger" className="bg-danger text-white mb-0">
                      <strong>Oh snap!</strong> Change a few things up and try submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiAlert
