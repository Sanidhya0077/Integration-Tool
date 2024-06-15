import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/admin.css";
import userManagementImage from "../../images/user-management-image.jpg";
import functionalityManagementImage from "../../images/functionality-management-image.jpg";

const AdminLandingPage = () => {
  return (
    <div className="card-container mt-5">
      <Card
        style={{ width: "18rem", margin: "10px", border: "2px solid #101735" }}
      >
        <div className="image-box">
          <Card.Img src={userManagementImage} className="card-img" />
        </div>
        <Card.Body className="card-body">
          <Card.Title>User Management</Card.Title>
          <Card.Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Card.Text>
          <div className="text-center">
            <Link to="/admin/userManagement">View</Link>
          </div>
        </Card.Body>
      </Card>

      <Card
        style={{ width: "18rem", margin: "10px", border: "2px solid #101735" }}
      >
        <div className="image-box">
          <Card.Img src={functionalityManagementImage} className="card-img" />
        </div>
        <Card.Body className="card-body">
          <Card.Title>Functionality Management</Card.Title>
          <Card.Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Card.Text>
          <div className="text-center">
            <Link to="/admin/functionalityDetails/listing">View</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminLandingPage;
