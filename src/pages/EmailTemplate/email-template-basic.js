import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const EmailBasicTemplte = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
        <MetaTags>
          <title>Basic Action Email | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
          <Breadcrumbs maintitle="Veltrix" title="Email Template" breadcrumbItem="Basic Action Email" />
          <Row className="email-template">
            <Col md="12">
              <table
                className="body-wrap"
                style={{
                  fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                  boxSizing: "border-box",
                  fontSize: "14px",
                  margin: "0",
                  width: "100%",
                  backgroundColor: "transparent",
                }}
                bgcolor="#f6f6f6"
              >
                <tbody>
                  <tr
                    style={{
                      fontFamily:
                        "'Helvetica Neue',Helvetica,Arial,sans-serif",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      margin: "0",
                    }}
                  >
                    <td
                      style={{
                        fontFamily:
                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        margin: "0",
                        verticalAlign: "top",
                      }}
                      valign="top"
                    ></td>

                    <td
                      className="container"
                      width="600"
                      style={{
                        fontFamily:
                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        display: "block",
                        maxWidth: "600px",
                        clear: "both",
                        margin: "0px auto",
                        verticalAlign: "top",
                      }}
                      valign="top"
                    >
                      <div
                        className="content"
                        style={{
                          fontFamily:
                            "'Helvetica Neue',Helvetica,Arial,sans-serif",
                          boxSizing: "border-box",
                          fontSize: "14px",
                          maxWidth: "600px",
                          display: "block",
                          margin: "0px auto",
                          padding: "20px",
                        }}
                      >
                        <table
                          className="main"
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          itemProp="action"
                          itemScope
                          itemType="http://schema.org/ConfirmAction"
                          style={{
                            fontFamily:
                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            borderRadius: "7px",
                            margin: "0px",
                            border: "none",
                          }}
                        >
                          <tbody>
                            <tr
                              style={{
                                fontFamily:
                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                boxSizing: "border-box",
                                fontSize: "14px",
                                margin: "0px",
                              }}
                            >
                              <td
                                className="content-wrap"
                                style={{
                                  fontFamily:
                                    "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  verticalAlign: "top",
                                  margin: "0px",
                                  padding: "30px",
                                  borderRadius: "7px",
                                  backgroundColor: "#fff",
                                  boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03)",
                                  border: "3px solid #3c4ccf"
                                }}
                                valign="top"
                              >
                                <meta
                                  itemProp="name"
                                  content="Confirm Email"
                                  style={{
                                    fontFamily:
                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                    boxSizing: "border-box",
                                    fontSize: "14px",
                                    margin: "0px",
                                  }}
                                />

                                <table
                                  width="100%"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{
                                    fontFamily:
                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                    boxSizing: "border-box",
                                    fontSize: "14px",
                                    margin: "0px",
                                  }}
                                >
                                  <tbody>
                                    <tr
                                      style={{
                                        fontFamily:
                                          "Helvetica Neue',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        Please confirm your email address by
                                        clicking the link below.
                                        </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "Helvetica Neue',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        We may need to send you critical
                                        information about our service and it
                                        is important that we have an accurate
                                        email address.
                                        </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "Helvetica Neue',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        itemProp="handler"
                                        itemScope
                                        itemType="http://schema.org/HttpActionHandler"
                                        style={{
                                          fontFamily:
                                            "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        <Link
                                          to="#"
                                          itemProp="url"
                                          style={{
                                            fontFamily:
                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                            boxSizing: "border-box",
                                            fontSize: "14px",
                                            color: "#FFF",
                                            textDecoration: "none",
                                            lineHeight: "2em",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            borderRadius: "5px",
                                            textTransform: "capitalize",
                                            backgroundColor: "#02a499",
                                            margin: "0",
                                            borderColor: "#02a499",
                                            borderStyle: "solid",
                                            borderWidth: "8px 16px",
                                          }}
                                        >
                                          Confirm email address
                                          </Link>
                                      </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "Helvetica Neue',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        <b>Veltrix</b>
                                        <p>Support Team</p>
                                      </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "Helvetica Neue',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0",
                                          textAlign: "center",
                                        }}
                                        valign="top"
                                      >
                                        {new Date().getFullYear()} © Veltrix
                                        </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailBasicTemplte;
