import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'fas fa-heart',
      title: 'Community Service',
      description: 'Dedicated to serving the community with compassion and care'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Social Welfare',
      description: 'Implementing programs for the betterment of society'
    },
    {
      icon: 'fas fa-users',
      title: 'Human Development',
      description: 'Focusing on holistic human development and empowerment'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Working towards a better society through dedicated service</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              Vasundhara Manav Kalyan Sanstha is committed to improving the lives of people 
              through various social welfare programs and community development initiatives.
            </p>
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <i className={feature.icon}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;