import React from "react"
import MetaTags from "react-meta-tags"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const SalesAuto = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Sales | SR Auto</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            maintitle="SR Auto"
            title="Auto"
            breadcrumbItem="Add Sale"
          />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SalesAuto
