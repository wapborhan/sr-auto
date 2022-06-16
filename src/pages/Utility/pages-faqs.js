import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const PagesFaqs = () => {
  const [faq1, setFaq1] = useState(true)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)
  const [faq5, setFaq5] = useState(true)
  const [faq6, setFaq6] = useState(false)
  const [faq7, setFaq7] = useState(false)
  const [faq8, setFaq8] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>FAQs | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="FAQs" />


          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row className="justify-content-center mb-5">
                    <Col lg={5}>
                      <div className="text-center faq-title pt-4 pb-4">
                        <div className="pt-3 pb-3">
                          <i className="ti-comments text-primary h3"></i>
                        </div>
                        <h4>Can't find what you are looking for?</h4>
                        <p className="text-muted">
                          If several languages coalesce, the grammar of the
                          resulting language is more simple and regular than
                          that of the individual languages.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mt-2 mr-1 waves-effect waves-light"
                        >
                          Email Us
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-success mt-2 waves-effect waves-light"
                        >
                          Send us a tweet
                        </button>
                      </div>
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col lg={5}>
                      <h5 className="mt-0 font-size-18 mb-4">
                        <i className="ti-agenda text-primary me-2"></i> General
                        Questions
                      </h5>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingOne">
                            <button className="accordion-button font-size-15 faq" type="button"
                              onClick={() => {
                                setFaq1(!faq1)
                              }}>
                              What is Lorem Ipsum?
                            </button>
                          </div>
                          <Collapse isOpen={faq1} className="accordion-collapse">
                            <div className="accordion-body">
                              <p className="text-muted mb-0">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                            </div>
                          </Collapse>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq2(!faq2)
                            }}>
                            Where does it come from?
                          </button>
                        </div>
                        <Collapse isOpen={faq2} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</p>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingThree">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq3(!faq3)
                            }}
                          >
                            Why do we use it?
                        </button>
                        </div>
                        <Collapse isOpen={faq3} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple</p>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq4(!faq4)
                            }}>
                            Where can I get some?
                          </button>
                        </div>
                        <Collapse isOpen={faq4} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</p>
                          </div>
                        </Collapse>
                      </div>
                    </Col>

                    <div className="col-lg-5 offset-lg-1">
                      <h5 className="mt-0 font-size-18 mb-4">
                        <i className="ti-bookmark-alt text-primary me-2"></i>{" "}
                        Pricing & Plans
                      </h5>
                      <div className="accordion" id="accordionExample2">
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq5(!faq5)
                            }}>
                             Where can I get some?
                          </button>
                        </div>
                        <Collapse isOpen={faq5} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                          </div>
                        </Collapse>
                      </div>

                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq6(!faq6)
                            }}>
                             Why do we use it?
                          </button>
                        </div>
                        <Collapse isOpen={faq6} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar.</p>
                          </div>
                        </Collapse>
                      </div>

                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq5(!faq7)
                            }}>
                            Where does it come from?
                          </button>
                        </div>
                        <Collapse isOpen={faq7} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple.</p>
                          </div>
                        </Collapse>
                      </div>

                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button className="accordion-button font-size-15 faq collapsed" type="button"
                            onClick={() => {
                              setFaq5(!faq8)
                            }}>
                            What is Lorem Ipsum?
                          </button>
                        </div>
                        <Collapse isOpen={faq8} className="accordion-collapse">
                          <div className="accordion-body">
                            <p className="text-muted mb-0">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators. Toachieve this, it would be necessary to have uniform grammar.</p>
                          </div>
                        </Collapse>
                      </div>

                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>

            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment >
  )
}

export default PagesFaqs
