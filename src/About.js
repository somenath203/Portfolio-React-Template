/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const About = ({title, desone, desctwo, resumeTitle}) => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          {title}
        </h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
            {desone}
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
            {desctwo}
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="#"
          >
            <i className="fas fa-download me-2"></i>
            {resumeTitle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
