import React from "react"
import { Container, Row } from "reactstrap"
import MetaTags from 'react-meta-tags';


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Pricing Cards
import CardPricing from "./card-pricing"

const PagesPricing = () => {
  const pricings = [
    {
      id: 1,
      title: "Starter",
      description: "Sed ut neque unde",
      icon: "ion ion-ios-airplane",
      price: "19",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check" , title: "Free Live Support" },
        {  icon: "mdi mdi-check" ,title: "Unlimited User" },
        {  icon: "mdi mdi-check" ,title: "No Time Tracking" },
        {  icon: "mdi mdi-close" ,title: "Free Setup" },
      ],
    },
    {
      id: 2,
      title: "Professional",
      description: "Quis autem iure",
      icon: "ion ion-ios-trophy",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check" , title: "Free Live Support" },
        {  icon: "mdi mdi-check" ,title: "Unlimited User" },
        {  icon: "mdi mdi-check" ,title: "No Time Tracking" },
        {  icon: "mdi mdi-close" ,title: "Free Setup" },
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      description: "Sed ut neque unde",
      icon: "ion ion-ios-umbrella",
      price: "39",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check" , title: "Free Live Support" },
        {  icon: "mdi mdi-check" ,title: "Unlimited User" },
        {  icon: "mdi mdi-check" ,title: "No Time Tracking" },
        {  icon: "mdi mdi-close" ,title: "Free Setup" },
      ],
    },
    {
      id: 4,
      title: "Unlimited",
      description: "Itaque earum hic",
      icon: "ion ion-ios-cube",
      price: "49",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check" , title: "Free Live Support" },
        {  icon: "mdi mdi-check" ,title: "Unlimited User" },
        {  icon: "mdi mdi-check" ,title: "No Time Tracking" },
        {  icon: "mdi mdi-close" ,title: "Free Setup" },
      ],
    },
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Pricing | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="Pricing" />

          <Row>
            {pricings.map((pricing, key) => (
              <CardPricing pricing={pricing} key={"_pricing_" + key} />
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default PagesPricing
