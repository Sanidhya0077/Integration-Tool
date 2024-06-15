import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logoUrl from "../images/LTIMindtree_logo.png";
import { Link } from "react-router-dom";
import { CardFooter } from "react-bootstrap";
import FunctionalityView from "./FunctionalityView";

function SubscriptionCard(props) {
  const isSubscribed = true;
  return (
    <Card style={{ width: "18rem", margin: "auto", padding: "1rem" }}>
      <Card.Img variant="top" src={logoUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div style={{ alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            {" "}
            <Card.Link href="/functionalityview">View</Card.Link>
            {isSubscribed ? (
              <Card.Link href="#subscribe">Subscribe</Card.Link>
            ) : (
              <Card.Link>Subscribed</Card.Link>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SubscriptionCard;
