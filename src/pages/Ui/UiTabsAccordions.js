import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"

class UiTabsAccordions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      activeTab1: "5",
      activeTab2: "9",
      activeTab3: "13",
      verticalActiveTab: "1",
      customActiveTab: "1",
      activeTabJustify: "5",
      col1: true,
      col2: false,
      col3: false,
      col5: true,
      col6: true,
      col7: true,
      col8: true,
      col9: true,
      col10: false,
      col11: false,
    }
    this.toggle = this.toggle.bind(this)
    this.toggle1 = this.toggle1.bind(this)

    this.t_col1 = this.t_col1.bind(this)
    this.t_col2 = this.t_col2.bind(this)
    this.t_col3 = this.t_col3.bind(this)
    this.t_col5 = this.t_col5.bind(this)
    this.t_col6 = this.t_col6.bind(this)
    this.t_col7 = this.t_col7.bind(this)
    this.t_col8 = this.t_col8.bind(this)
    this.t_col9 = this.t_col9.bind(this)
    this.t_col10 = this.t_col10.bind(this)
    this.t_col11 = this.t_col11.bind(this)

    this.toggle2 = this.toggle2.bind(this)
    this.toggle3 = this.toggle3.bind(this)

    this.toggleVertical = this.toggleVertical.bind(this)
    this.toggleCustom = this.toggleCustom.bind(this)
  }

  t_col1() {
    this.setState({ col1: !this.state.col1 })
  }

  t_col2() {
    this.setState({ col2: !this.state.col2 })
  }

  t_col3() {
    this.setState({ col3: !this.state.col3 })
  }

  t_col5() {
    this.setState({ col5: !this.state.col5 })
  }

  t_col6() {
    this.setState({ col6: !this.state.col6 })
  }

  t_col7() {
    this.setState({ col7: !this.state.col7 })
  }

  t_col8() {
    this.setState({
      col6: !this.state.col6,
      col7: !this.state.col7
    })
  }

  t_col9() {
    this.setState({ col9: !this.state.col9 })
  }

  t_col10() {
    this.setState({ col10: !this.state.col10 })
  }

  t_col11() {
    this.setState({ col11: !this.state.col11 })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      })
    }
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      })
    }
  }

  toggle3(tab) {
    if (this.state.activeTab3 !== tab) {
      this.setState({
        activeTab3: tab,
      })
    }
  }

  toggleVertical(tab) {
    if (this.state.verticalActiveTab !== tab) {
      this.setState({
        verticalActiveTab: tab,
      })
    }
  }

  toggleCustom(tab) {
    if (this.state.customActiveTab !== tab) {
      this.setState({
        customActiveTab: tab,
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Tabs & Accordions | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs
              title="UI Elements"
              breadcrumbItem="Tabs & Accordions"
            />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Default Tabs</CardTitle>
                    <p className="card-title-desc">
                      Use the tab JavaScript plugin—include it individually or
                      through the compiled{" "}
                      <code className="highlighter-rouge">bootstrap.js</code>{" "}
                      file—to extend our navigational tabs and pills to create
                      tabbable panes of local content, even via dropdown menus.
                    </p>

                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "1",
                          })}
                          onClick={() => {
                            this.toggle("1")
                          }}
                        >
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "2",
                          })}
                          onClick={() => {
                            this.toggle("2")
                          }}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "3",
                          })}
                          onClick={() => {
                            this.toggle("3")
                          }}
                        >
                          Messages
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "4",
                          })}
                          onClick={() => {
                            this.toggle("4")
                          }}
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab} className="p-3 text-muted">
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth. Cosby sweater eu banh mi, qui irure terry
                              richardson ex squid. Aliquip placeat salvia cillum
                              iphone. Seitan aliquip quis cardigan american
                              apparel, butcher voluptate nisi qui.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Food truck fixie locavore, accusamus mcsweeney's
                              marfa nulla single-origin coffee squid.
                              Exercitation +1 labore velit, blog sartorial PBR
                              leggings next level wes anderson artisan four loko
                              farm-to-table craft beer twee. Qui photo booth
                              letterpress, commodo enim craft beer mlkshk
                              aliquip jean shorts ullamco ad vinyl cillum PBR.
                              Homo nostrud organic, assumenda labore aesthetic
                              magna delectus mollit. Keytar helvetica VHS salvia
                              yr, vero magna velit sapiente labore stumptown.
                              Vegan fanny pack odio cillum wes anderson 8-bit.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Etsy mixtape wayfarers, ethical wes anderson tofu
                              before they sold out mcsweeney's organic lomo
                              retro fanny pack lo-fi farm-to-table readymade.
                              Messenger bag gentrify pitchfork tattooed craft
                              beer, iphone skateboard locavore carles etsy
                              salvia banksy hoodie helvetica. DIY synth PBR
                              banksy irony. Leggings gentrify squid 8-bit cred
                              pitchfork. Williamsburg banh mi whatever
                              gluten-free, carles pitchfork biodiesel fixie etsy
                              retro mlkshk vice blog. Scenester cred you
                              probably haven't heard of them, vinyl craft beer
                              blog stumptown. Pitchfork sustainable tofu synth
                              chambray yr.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="4">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Trust fund seitan letterpress, keytar raw denim
                              keffiyeh etsy art party before they sold out
                              master cleanse gluten-free squid scenester freegan
                              cosby sweater. Fanny pack portland seitan DIY, art
                              party locavore wolf cliche high life echo park
                              Austin. Cred vinyl keffiyeh DIY salvia PBR, banh
                              mi before they sold out farm-to-table VHS viral
                              locavore cosby sweater. Lomo wolf viral, mustache
                              readymade thundercats keffiyeh craft beer marfa
                              ethical. Wolf salvia freegan, sartorial keffiyeh
                              echo park vegan.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Justify Tabs</CardTitle>
                    <p className="card-title-desc">
                      Use the tab JavaScript plugin—include it individually or
                      through the compiled{" "}
                      <code className="highlighter-rouge">bootstrap.js</code>{" "}
                      file—to extend our navigational tabs and pills to create
                      tabbable panes of local content, even via dropdown menus.
                    </p>

                    <Nav pills className="navtab-bg nav-justified">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab1 === "5",
                          })}
                          onClick={() => {
                            this.toggle1("5")
                          }}
                        >
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab1 === "6",
                          })}
                          onClick={() => {
                            this.toggle1("6")
                          }}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab1 === "7",
                          })}
                          onClick={() => {
                            this.toggle1("7")
                          }}
                        >
                          Messages
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab1 === "8",
                          })}
                          onClick={() => {
                            this.toggle1("8")
                          }}
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab1} className="p-3 text-muted">
                      <TabPane tabId="5">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth. Cosby sweater eu banh mi, qui irure terry
                              richardson ex squid. Aliquip placeat salvia cillum
                              iphone. Seitan aliquip quis cardigan american
                              apparel, butcher voluptate nisi qui.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="6">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Food truck fixie locavore, accusamus mcsweeney's
                              marfa nulla single-origin coffee squid.
                              Exercitation +1 labore velit, blog sartorial PBR
                              leggings next level wes anderson artisan four loko
                              farm-to-table craft beer twee. Qui photo booth
                              letterpress, commodo enim craft beer mlkshk
                              aliquip jean shorts ullamco ad vinyl cillum PBR.
                              Homo nostrud organic, assumenda labore aesthetic
                              magna delectus mollit. Keytar helvetica VHS salvia
                              yr, vero magna velit sapiente labore stumptown.
                              Vegan fanny pack odio cillum wes anderson 8-bit.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="7">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Etsy mixtape wayfarers, ethical wes anderson tofu
                              before they sold out mcsweeney's organic lomo
                              retro fanny pack lo-fi farm-to-table readymade.
                              Messenger bag gentrify pitchfork tattooed craft
                              beer, iphone skateboard locavore carles etsy
                              salvia banksy hoodie helvetica. DIY synth PBR
                              banksy irony. Leggings gentrify squid 8-bit cred
                              pitchfork. Williamsburg banh mi whatever
                              gluten-free, carles pitchfork biodiesel fixie etsy
                              retro mlkshk vice blog. Scenester cred you
                              probably haven't heard of them, vinyl craft beer
                              blog stumptown. Pitchfork sustainable tofu synth
                              chambray yr.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>

                      <TabPane tabId="8">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Trust fund seitan letterpress, keytar raw denim
                              keffiyeh etsy art party before they sold out
                              master cleanse gluten-free squid scenester freegan
                              cosby sweater. Fanny pack portland seitan DIY, art
                              party locavore wolf cliche high life echo park
                              Austin. Cred vinyl keffiyeh DIY salvia PBR, banh
                              mi before they sold out farm-to-table VHS viral
                              locavore cosby sweater. Lomo wolf viral, mustache
                              readymade thundercats keffiyeh craft beer marfa
                              ethical. Wolf salvia freegan, sartorial keffiyeh
                              echo park vegan.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Custom Tabs</CardTitle>
                    <p className="card-title-desc">
                      Example of custom tabs
                    </p>

                    <Nav tabs className="nav-tabs-custom">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "1",
                          })}
                          onClick={() => {
                            this.toggleCustom("1")
                          }}
                        >
                          <span className="d-none d-sm-block">Home</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "2",
                          })}
                          onClick={() => {
                            this.toggleCustom("2")
                          }}
                        >
                          <span className="d-none d-sm-block">Profile</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "3",
                          })}
                          onClick={() => {
                            this.toggleCustom("3")
                          }}
                        >
                          <span className="d-none d-sm-block">Messages</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "4",
                          })}
                          onClick={() => {
                            this.toggleCustom("4")
                          }}
                        >
                          <span className="d-none d-sm-block">Settings</span>
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.customActiveTab} className="p-3 text-muted">
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth. Cosby sweater eu banh mi, qui irure terry
                              richardson ex squid. Aliquip placeat salvia cillum
                              iphone. Seitan aliquip quis cardigan american
                              apparel, butcher voluptate nisi qui.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Food truck fixie locavore, accusamus mcsweeney's
                              marfa nulla single-origin coffee squid.
                              Exercitation +1 labore velit, blog sartorial PBR
                              leggings next level wes anderson artisan four loko
                              farm-to-table craft beer twee. Qui photo booth
                              letterpress, commodo enim craft beer mlkshk
                              aliquip jean shorts ullamco ad vinyl cillum PBR.
                              Homo nostrud organic, assumenda labore aesthetic
                              magna delectus mollit. Keytar helvetica VHS salvia
                              yr, vero magna velit sapiente labore stumptown.
                              Vegan fanny pack odio cillum wes anderson 8-bit.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Etsy mixtape wayfarers, ethical wes anderson tofu
                              before they sold out mcsweeney's organic lomo
                              retro fanny pack lo-fi farm-to-table readymade.
                              Messenger bag gentrify pitchfork tattooed craft
                              beer, iphone skateboard locavore carles etsy
                              salvia banksy hoodie helvetica. DIY synth PBR
                              banksy irony. Leggings gentrify squid 8-bit cred
                              pitchfork. Williamsburg banh mi whatever
                              gluten-free, carles pitchfork biodiesel fixie etsy
                              retro mlkshk vice blog. Scenester cred you
                              probably haven't heard of them, vinyl craft beer
                              blog stumptown. Pitchfork sustainable tofu synth
                              chambray yr.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="4">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Trust fund seitan letterpress, keytar raw denim
                              keffiyeh etsy art party before they sold out
                              master cleanse gluten-free squid scenester freegan
                              cosby sweater. Fanny pack portland seitan DIY, art
                              party locavore wolf cliche high life echo park
                              Austin. Cred vinyl keffiyeh DIY salvia PBR, banh
                              mi before they sold out farm-to-table VHS viral
                              locavore cosby sweater. Lomo wolf viral, mustache
                              readymade thundercats keffiyeh craft beer marfa
                              ethical. Wolf salvia freegan, sartorial keffiyeh
                              echo park vegan.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Custom Tabs Justified</CardTitle>
                    <p className="card-title-desc">
                      Example of custom tabs
                    </p>

                    <Nav tabs justified className="nav-tabs-custom">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTabJustify === "5",
                          })}
                          onClick={() => {
                            this.toggleCustom("1")
                          }}
                        >
                          <span className="d-none d-sm-block">Home</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTabJustify === "6",
                          })}
                          onClick={() => {
                            this.toggleCustom("2")
                          }}
                        >
                          <span className="d-none d-sm-block">Profile</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTabJustify === "7",
                          })}
                          onClick={() => {
                            this.toggleCustom("3")
                          }}
                        >
                          <span className="d-none d-sm-block">Messages</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTabJustify === "8",
                          })}
                          onClick={() => {
                            this.toggleCustom("4")
                          }}
                        >
                          <span className="d-none d-sm-block">Settings</span>
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTabJustify} className="p-3 text-muted">
                      <TabPane tabId="5">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth. Cosby sweater eu banh mi, qui irure terry
                              richardson ex squid. Aliquip placeat salvia cillum
                              iphone. Seitan aliquip quis cardigan american
                              apparel, butcher voluptate nisi qui.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="6">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Food truck fixie locavore, accusamus mcsweeney's
                              marfa nulla single-origin coffee squid.
                              Exercitation +1 labore velit, blog sartorial PBR
                              leggings next level wes anderson artisan four loko
                              farm-to-table craft beer twee. Qui photo booth
                              letterpress, commodo enim craft beer mlkshk
                              aliquip jean shorts ullamco ad vinyl cillum PBR.
                              Homo nostrud organic, assumenda labore aesthetic
                              magna delectus mollit. Keytar helvetica VHS salvia
                              yr, vero magna velit sapiente labore stumptown.
                              Vegan fanny pack odio cillum wes anderson 8-bit.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="7">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Etsy mixtape wayfarers, ethical wes anderson tofu
                              before they sold out mcsweeney's organic lomo
                              retro fanny pack lo-fi farm-to-table readymade.
                              Messenger bag gentrify pitchfork tattooed craft
                              beer, iphone skateboard locavore carles etsy
                              salvia banksy hoodie helvetica. DIY synth PBR
                              banksy irony. Leggings gentrify squid 8-bit cred
                              pitchfork. Williamsburg banh mi whatever
                              gluten-free, carles pitchfork biodiesel fixie etsy
                              retro mlkshk vice blog. Scenester cred you
                              probably haven't heard of them, vinyl craft beer
                              blog stumptown. Pitchfork sustainable tofu synth
                              chambray yr.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="8">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Trust fund seitan letterpress, keytar raw denim
                              keffiyeh etsy art party before they sold out
                              master cleanse gluten-free squid scenester freegan
                              cosby sweater. Fanny pack portland seitan DIY, art
                              party locavore wolf cliche high life echo park
                              Austin. Cred vinyl keffiyeh DIY salvia PBR, banh
                              mi before they sold out farm-to-table VHS viral
                              locavore cosby sweater. Lomo wolf viral, mustache
                              readymade thundercats keffiyeh craft beer marfa
                              ethical. Wolf salvia freegan, sartorial keffiyeh
                              echo park vegan.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Default Collapse</CardTitle>
                    <p className="card-title-desc">
                      You can use a link with the{" "}
                      <code className="highlighter-rouge">href</code> attribute,
                      or a button with the{" "}
                      <code className="highlighter-rouge">data-target</code>{" "}
                      attribute. In both cases, the{" "}
                      <code className="highlighter-rouge">
                        {" "}
                        data-toggle="collapse"
                      </code>{" "}
                      is required.
                    </p>
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      <Link
                        to="#"
                        onClick={this.t_col5}
                        style={{ cursor: "pointer" }}
                        className="btn btn-primary mo-mb-2"
                      >
                        Link with href{" "}
                      </Link>
                      <button
                        onClick={this.t_col5}
                        className="btn btn-primary mo-mb-2"
                        type="button"
                        style={{ cursor: "pointer" }}
                      >
                        Button with data-target
                             </button>
                    </div>
                    <Collapse isOpen={this.state.col5}>
                      <Card>
                        <CardBody>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                              </CardBody>
                      </Card>
                    </Collapse>
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Multiple targets</h4>
                    <p>A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code>href</code> or <code>data-bs-target</code> attribute.
                                            Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide an element if they each reference it with their <code>href</code> or <code>data-bs-target</code> attribute</p>

                    <div className="d-flex gap-2 flex-wrap mb-3">
                      <Link
                        to="#"
                        onClick={this.t_col6}
                        style={{ cursor: "pointer" }}
                        className="btn btn-primary"
                      >
                        Toggle first element
                            </Link>
                      <button
                        onClick={this.t_col7}
                        className="btn btn-primary"
                        type="button"
                        style={{ cursor: "pointer" }}
                      >
                        Toggle second element
                             </button>

                      <button
                        onClick={this.t_col8}
                        className="btn btn-primary"
                        type="button"
                        style={{ cursor: "pointer" }}
                      >
                        Toggle both element
                             </button>
                    </div>
                    <div className="row">
                      <div className="col">
                        <Collapse isOpen={this.state.col6}>
                          <Card>
                            <CardBody className="border shadow-none text-muted mb-0">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                              </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                      <div className="col">
                        <Collapse isOpen={this.state.col7}>
                          <Card>
                            <CardBody className="border shadow-none text-muted mb-0">
                              Anim pariatur cliche reprehenderit, enim eiusmod high
                              life accusamus terry richardson ad squid. Nihil anim
                              keffiyeh helvetica, craft beer labore wes anderson
                              cred nesciunt sapiente ea proident.
                                  </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Accordion example</CardTitle>
                    <p className="card-title-desc">
                      Click the accordions below to expand/collapse the accordion content.
                    </p>

                    <div className="accordion" id="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button fw-medium" type="button" onClick={this.t_col1} style={{ cursor: "pointer" }}>
                            Accordion Item #1
                              </button>
                        </h2>


                        <Collapse isOpen={this.state.col1} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col2} style={{ cursor: "pointer" }}>
                            Accordion Item #2
                              </button>
                        </h2>

                        <Collapse isOpen={this.state.col2} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col3} style={{ cursor: "pointer" }}>
                            Accordion Item #3
                              </button>
                        </h2>
                        <Collapse isOpen={this.state.col3} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Accordion example Flush</CardTitle>
                    <p>Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFlushOne">
                          <button className="accordion-button fw-medium" type="button" onClick={this.t_col9} style={{ cursor: "pointer" }}>
                            Accordion Item #1
                              </button>
                        </h2>


                        <Collapse isOpen={this.state.col9} className="accordion-collapse">
                          <div className="accordion-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>

                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFlushTwo">
                          <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col10} style={{ cursor: "pointer" }}>
                            Accordion Item #2
                              </button>
                        </h2>

                        <Collapse isOpen={this.state.col10} className="accordion-collapse">
                          <div className="accordion-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFlushThree">
                          <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col11} style={{ cursor: "pointer" }}>
                            Accordion Item #3
                              </button>
                        </h2>
                        <Collapse isOpen={this.state.col11} className="accordion-collapse">
                          <div className="accordion-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                        </Collapse>
                      </div>
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
}

export default UiTabsAccordions
