import React, { useState, useEffect } from 'react';
import './Subscription.css';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscribedPlan, setSubscribedPlan] = useState(null);
  const [notification, setNotification] = useState(null);

  const plans = [
    { id: 1, name: 'Basic', price: 29.99, features: ['Access to gym equipment', '2 group classes per week', 'Locker access'] },
    { id: 2, name: 'Pro', price: 49.99, features: ['Access to gym equipment', 'Unlimited group classes', 'Locker access', '1 personal training session per month'] },
    { id: 3, name: 'Elite', price: 79.99, features: ['24/7 gym access', 'Unlimited group classes', 'Premium locker', '2 personal training sessions per month', 'Nutrition consultation'] },
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = () => {
    if (selectedPlan) {
      const plan = plans.find(plan => plan.id === selectedPlan);
      setSubscribedPlan(selectedPlan);
      setNotification(`Thank you for subscribing to the ${plan.name} plan!`);
      setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
    } else {
      setNotification('Please select a plan before subscribing.');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <section id="subscription" className="subscription">
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      <h2>Choose Your Membership</h2>
      <div className="plan-container">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`plan ${selectedPlan === plan.id ? 'selected' : ''} ${subscribedPlan === plan.id ? 'subscribed' : ''}`} 
            onClick={() => handleSelectPlan(plan.id)}
          >
            <h3>{plan.name}</h3>
            <p className="price">${plan.price}<span>/month</span></p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="select-button">
              {subscribedPlan === plan.id ? 'Current Plan' : 'Select'}
            </button>
          </div>
        ))}
      </div>
      <button className="subscribe-button" onClick={handleSubscribe}>
        {subscribedPlan ? 'Change Subscription' : 'Subscribe Now'}
      </button>
    </section>
  );
};

export default Subscription;