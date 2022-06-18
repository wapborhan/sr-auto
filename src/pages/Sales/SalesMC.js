import React from "react"
import MetaTags from "react-meta-tags"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const SalesMC = () => {
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
            title="Motorcycle"
            breadcrumbItem="Add Sale"
          />

          <h1>hy</h1>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SalesMC
