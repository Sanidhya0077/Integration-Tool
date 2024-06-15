import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { Button } from "react-bootstrap";
import "../styles/CardGrid.css";

const CardGrid = () => {
  const [view, setView] = useState("tiles");
  const subscriptionCards = Array.from({ length: 8 }, (_, index) => ({
    title: `Service ${index + 1}`,
    description: `This is card description`,
  }));
  return (
    <div>
      <div className="view-buttons">
        {/* <Button onClick={() => setView("group")}>Group View</Button> */}
        {/* <Button onClick={() => setView("list")}>List View</Button> */}
        <Button onClick={() => setView("tiles")}>Tiles View</Button>
      </div>
      <div className={`card-container ${view}`}>
        {subscriptionCards.map((card, index) => (
          <SubscriptionCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
