/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items.
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define how many rows should be in a column.
*/

// @mui material components
import InfoIcon from "@mui/icons-material/Info";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import ProductsIcon from "@mui/icons-material/Category"; // Example icon for products
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Example icon for contact

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";

const routes = [
  {
    name: "About Us",
    icon: <InfoIcon />,
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "Products",
    icon: <ProductsIcon />,
    dropdown: true,
    collapse: [
      {
        name: "Anesthesia Equipment",
        dropdown: true,
        collapse: [
          {
            name: "Anesthesia Machine",
            route: "/products/anesthesia-machine",
            component: <div>Anesthesia Machine Component</div>,
          },
          {
            name: "Boyles Apparatus",
            route: "/products/boyles-apparatus",
            component: <div>Boyles Apparatus Component</div>,
          },
          {
            name: "Anesthesia Ventilator",
            route: "/products/anesthesia-ventilator",
            component: <div>Anesthesia Ventilator Component</div>,
          },
          {
            name: "Anesthesia Workstation",
            route: "/products/anesthesia-workstation",
            component: <div>Anesthesia Workstation Component</div>,
          },
          {
            name: "Repair and Service",
            route: "/products/repair-service",
            component: <div>Repair and Service Component</div>,
          },
          {
            name: "Maintenance/AMC",
            route: "/products/maintenance-amc",
            component: <div>Maintenance/AMC Component</div>,
          },
        ],
      },
      {
        name: "Blood Bank Equipment",
        dropdown: true,
        collapse: [
          {
            name: "Centrifuge",
            route: "/products/centrifuge",
            component: <div>Centrifuge Component</div>,
          },
          {
            name: "Deep Freezer",
            route: "/products/deep-freezer",
            component: <div>Deep Freezer Component</div>,
          },
        ],
      },
      {
        name: "Critical Care Equipment",
        dropdown: true,
        collapse: [
          {
            name: "Patient Monitor",
            route: "/products/patient-monitor",
            component: <div>Patient Monitor Component</div>,
          },
          {
            name: "OT Table",
            route: "/products/ot-table",
            component: <div>OT Table Component</div>,
          },
          {
            name: "OT Light",
            route: "/products/ot-light",
            component: <div>OT Light Component</div>,
          },
          {
            name: "Surgical Diathermy",
            route: "/products/surgical-diathermy",
            component: <div>Surgical Diathermy Component</div>,
          },
          {
            name: "Intensive Care Ventilator",
            route: "/products/intensive-care-ventilator",
            component: <div>Intensive Care Ventilator Component</div>,
          },
          {
            name: "Pulse Oximeter",
            route: "/products/pulse-oximeter",
            component: <div>Pulse Oximeter Component</div>,
          },
          {
            name: "Defibrillator",
            route: "/products/defibrillator",
            component: <div>Defibrillator Component</div>,
          },
          {
            name: "Infusion Pump",
            route: "/products/infusion-pump",
            component: <div>Infusion Pump Component</div>,
          },
          {
            name: "Syringe Pump",
            route: "/products/syringe-pump",
            component: <div>Syringe Pump Component</div>,
          },
        ],
      },
      {
        name: "Modular OT",
        route: "/products/modular-ot",
        component: <div>Modular OT Component</div>,
      },
      {
        name: "Radiology Equipment",
        route: "/products/radiology-equipment",
        component: <div>Radiology Equipment Component</div>,
      },
      {
        name: "Laboratory Equipment",
        route: "/products/laboratory-equipment",
        component: <div>Laboratory Equipment Component</div>,
      },
      {
        name: "Autoclave",
        route: "/products/autoclave",
        component: <div>Autoclave Component</div>,
      },
      {
        name: "Biomedical Accessories",
        route: "/products/biomedical-accessories",
        component: <div>Biomedical Accessories Component</div>,
      },
      {
        name: "Medical Batteries",
        route: "/products/medical-batteries",
        component: <div>Medical Batteries Component</div>,
      },
      {
        name: "Keypads - Medical Equipment",
        route: "/products/keypads-medical-equipment",
        component: <div>Keypads Component</div>,
      },
      {
        name: "LED X-ray Viewer - Ultra Thin",
        route: "/products/led-xray-viewer",
        component: <div>LED X-ray Viewer Component</div>,
      },
      {
        name: "Suction Apparatus - HI-VAC",
        route: "/products/suction-apparatus",
        component: <div>Suction Apparatus Component</div>,
      },
    ],
  },
  {
    name: "Services",
    icon: <ViewDayIcon />,
    dropdown: true,
    collapse: [
      {
        name: "Operation Theatres",
        route: "/services/operation-theatres",
        component: <div>Operation Theatres Component</div>,
      },
      {
        name: "Sales",
        route: "/services/sales",
        component: <div>Sales Component</div>,
      },
      {
        name: "Services",
        route: "/services/services",
        component: <div>Services Component</div>,
      },
      {
        name: "Training",
        route: "/services/training",
        component: <div>Training Component</div>,
      },
    ],
  },
  {
    name: "Contact Us",
    icon: <ContactMailIcon />,
    route: "/contact-us",
    component: <div>Contact Us Component</div>, // Placeholder for Contact Us component
  },
];

export default routes;
