import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      description: 'Educational programs and literacy initiatives for all age groups'
    },
    {
      icon: 'fas fa-medkit',
      title: 'Healthcare',
      description: 'Health awareness programs and medical assistance for the needy'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Environment',
      description: 'Environmental conservation and awareness programs'
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Social Support',
      description: 'Support programs for underprivileged sections of society'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive programs for community development</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;