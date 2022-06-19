import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap"
import Select from "react-select"
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const optionGroup = [
  {
    label: "Showroom",
    options: [
      { label: "Bheramara", value: "Bheramara" },
      { label: "Bajaj", value: "Bajaj" },
      { label: "Dashuriya", value: "Dashuriya" },
      { label: "Mirpur", value: "Mirpur" },
      { label: "Dorga", value: "Dorga" },
      { label: "Kushtia", value: "Kushtia" },
      { label: "Meherpur", value: "Meherpur" },
      { label: "Chuadanga", value: "Chuadanga" },
      { label: "Alomdanga", value: "Alomdanga" },
      { label: "Vadu Auto", value: "Vadu Auto" },
      { label: "Mela", value: "Mela" },
    ],
  },
]

const SalesMC = () => {
  const [selectedGroup, setselectedGroup] = useState(null)
  const [selectedMulti1, setselectedMulti1] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }
  function handleMulti1(selectedMulti1) {
    setselectedMulti1(selectedMulti1)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Sales | SR Auto</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            maintitle="Veltrix"
            title="Form"
            breadcrumbItem="Form Advanced"
          />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <form>
                    {/* Genaral Data */}
                    <Row>
                      <Col lg="6">
                        <div>
                          <Label>Date</Label>
                          <Select
                            value={selectedMulti1}
                            isMulti={true}
                            onChange={() => {
                              handleMulti1()
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                            isDisabled={true}
                          />
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="mb-3">
                          <Label>Showroom</Label>
                          <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup()
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>
                      </Col>
                    </Row>
                    {/* Customer Data */}

                    <Row>
                      <AvForm className="needs-validation">
                        <h1 className="mt-4 mb-4">Customer Information</h1>
                        <Row>
                          <Col md="12">
                            <Row>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Customer Name
                                  </Label>
                                  <AvField
                                    name="customername"
                                    placeholder="Customer Name"
                                    type="text"
                                    errorMessage="Enter Customer Name"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Father Name
                                  </Label>
                                  <AvField
                                    name="fathername"
                                    placeholder="Father Name"
                                    type="text"
                                    errorMessage="Enter Father Name"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom03">
                                    Media Name
                                  </Label>
                                  <AvField
                                    name="medianame"
                                    placeholder="Media Name"
                                    type="text"
                                    // errorMessage="Enter Father Name"
                                    className="form-control"
                                    // validate={{ required: { value: true } }}
                                    id="validationCustom03"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="12">
                            <Row>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Customer Mobile Num.
                                  </Label>
                                  <div className="mb-3">
                                    <AvField
                                      name="number"
                                      placeholder="Enter Only number"
                                      type="number"
                                      errorMessage="Enter Only Number"
                                      validate={{
                                        required: { value: true },
                                        pattern: {
                                          value: "^[0-9]+$",
                                          errorMessage: "Only Numbers",
                                        },
                                      }}
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Father Mobile Num.
                                  </Label>
                                  <div className="mb-3">
                                    <AvField
                                      name="number"
                                      placeholder="Enter Only number"
                                      type="number"
                                      errorMessage="Enter Only Number"
                                      validate={{
                                        required: { value: true },
                                        pattern: {
                                          value: "^[0-9]+$",
                                          errorMessage: "Only Numbers",
                                        },
                                      }}
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Media Mobile Num.
                                  </Label>
                                  <div className="mb-3">
                                    <AvField
                                      name="number"
                                      placeholder="Enter Only number"
                                      type="number"
                                      errorMessage="Enter Only Number"
                                      validate={{
                                        required: { value: true },
                                        pattern: {
                                          value: "^[0-9]+$",
                                          errorMessage: "Only Numbers",
                                        },
                                      }}
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="12">
                            <Row>
                              <Col md="3">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom03">
                                    Village
                                  </Label>
                                  <AvField
                                    name="village"
                                    placeholder="Village"
                                    type="text"
                                    errorMessage=" Please provide a valid Village."
                                    className="form-control"
                                    id="validationCustom03"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="3">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom04">
                                    Post Office
                                  </Label>
                                  <AvField
                                    name="postoffice"
                                    placeholder="Post Office"
                                    type="text"
                                    errorMessage="Please provide a valid post office."
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom04"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="3">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom05">
                                    Thana
                                  </Label>
                                  <AvField
                                    name="thana"
                                    placeholder="Thana"
                                    type="text"
                                    errorMessage=" Please provide a valid Thana."
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom05"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="3">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom06">
                                    District
                                  </Label>
                                  <AvField
                                    name="district"
                                    placeholder="District"
                                    type="text"
                                    errorMessage=" Please provide a valid District."
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom06"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <h1 className="mt-4 mb-4">Guarantor</h1>
                        <Row>
                          <Col md="12">
                            <Row>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Guarantor-1 Name
                                  </Label>
                                  <AvField
                                    name="guarantorname1"
                                    placeholder="Guarantor-1 Name"
                                    type="text"
                                    // errorMessage="Guarantor Name 1"
                                    className="form-control"
                                    // validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Guarantor-1 Father Name
                                  </Label>
                                  <AvField
                                    name="fathername"
                                    placeholder="Guarantor-1 Father Name"
                                    type="text"
                                    // errorMessage="Enter Guarantor Father Name 2"
                                    className="form-control"
                                    // validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Guarantor-1 Mobile Num.
                                  </Label>
                                  <div className="mb-3">
                                    <AvField
                                      name="number"
                                      placeholder="Guarantor-1 Mobile Num."
                                      type="number"
                                      // errorMessage="Enter Only Number"
                                      // validate={{
                                      //   required: { value: true },
                                      //   pattern: {
                                      //     value: "^[0-9]+$",
                                      //     errorMessage: "Only Numbers",
                                      //   },
                                      // }}
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="12">
                            <Row>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Guarantor-2 Name
                                  </Label>
                                  <AvField
                                    name="guarantorname1"
                                    placeholder="Guarantor-2 Name"
                                    type="text"
                                    // errorMessage="Guarantor Name 1"
                                    className="form-control"
                                    // validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Guarantor-2 Father Name
                                  </Label>
                                  <AvField
                                    name="fathername"
                                    placeholder="Guarantor-2 Father Name"
                                    type="text"
                                    // errorMessage="Enter Guarantor Father Name 2"
                                    className="form-control"
                                    // validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Guarantor-2 Mobile Num.
                                  </Label>
                                  <div className="mb-3">
                                    <AvField
                                      name="number"
                                      placeholder="Guarantor-2 Mobile Num."
                                      type="number"
                                      // errorMessage="Enter Only Number"
                                      // validate={{
                                      //   required: { value: true },
                                      //   pattern: {
                                      //     value: "^[0-9]+$",
                                      //     errorMessage: "Only Numbers",
                                      //   },
                                      // }}
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Button color="primary" type="submit">
                          Submit form
                        </Button>
                      </AvForm>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SalesMC
