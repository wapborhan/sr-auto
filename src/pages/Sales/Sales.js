import React from "react"
import MetaTags from "react-meta-tags"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Sales = () => {
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
            title="Sales"
            breadcrumbItem="Add Sale"
          />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Sales
