import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import "../styles/ManageSubscription.css";

const ManageSubscription = () => {
  const isSubscribed = true;
  const subscriptionCards = Array.from({ length: 4 }, (_, index) => ({
    title: `Service ${index + 1}`,
    description: `This is card description`,
  }));
  return (
    <div className="card-grid">
      {subscriptionCards.map((card, index) => (
        <SubscriptionCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default ManageSubscription;
