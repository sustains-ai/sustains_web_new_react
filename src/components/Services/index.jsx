import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Handshake,
  Plus,
  Minus,
  Check,
  Lightbulb,
  Code,
  Users,
  ArrowRight,
  Clock,
  CheckCircle,
  Star,
  Briefcase,
  Target,
  Zap,
  X,
} from "lucide-react";
import "./index.css";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: null,
      isModalOpen: false,
    };
  }

  openModal = (service) => {
    this.setState({
      selectedService: service,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedService: null,
      isModalOpen: false,
    });
  };

  render() {
    const simpleServices = [
      {
        id: "ai-automation",
        title: "AI Automation",
        description:
          "Building intelligent automation tools and AI-powered solutions across sectors including finance, energy, marketing, and retail. From portfolio diagnostics and red-flag detection to smart meeting schedulers and client insight dashboards, we apply advanced machine learning to streamline operations and generate real-time value.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        items: [
          "Portfolio diagnostics and early warning systems",
          "AI-driven task scheduling and workflow automation",
          "Client behavior and sentiment insights",
          "Predictive performance indicators and anomaly detection",
          "Cross-sector automation templates and dashboards",
        ],
      },
      {
        id: "collaborative",
        title: "Collaborative Innovations",
        description:
          "Specialized in driving large-scale, multi-partner projects in partnership with academic institutions and industry teams. We co-develop proposals, platform architectures, simulation models, and algorithmic logic.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        items: [
          "Joint grant proposal development & liaison",
          "Algorithm integration and simulation model development",
          "Platform architecture aligned with academic and industry standards",
          "Technical documentation and stakeholder alignment",
        ],
      },
    ];

    const detailedServices = [
      {
        name: "AI Consultation & Strategy",
        description:
          "Work with our experts to develop a comprehensive AI portfolio intelligence strategy tailored to your organization's unique needs and goals across multiple sectors.",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        includes: [
          "Comprehensive portfolio assessment across sectors",
          "AI implementation roadmap for wealth, energy, and infrastructure",
          "ROI analysis and projections",
          "Risk assessment and mitigation strategies",
          "Executive presentation and stakeholder buy-in",
          "Implementation support and guidance",
        ],
        outcomes: [
          "Clear AI portfolio intelligence strategy",
          "Defined success metrics and KPIs",
          "Implementation timeline and milestones",
          "Executive alignment and approval",
        ],
      },
      {
        name: "Custom AI Development",
        description:
          "Build bespoke AI solutions designed specifically for your portfolio intelligence challenges and business objectives with our expert development team.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        includes: [
          "Custom machine learning model development",
          "Portfolio data pipeline architecture and setup",
          "Integration with existing financial and energy systems",
          "Scalable cloud infrastructure deployment",
          "API development and comprehensive documentation",
          "Quality assurance and testing across all platforms",
        ],
        outcomes: [
          "Production-ready AI portfolio solution",
          "Seamless integration with existing systems",
          "Scalable and maintainable codebase",
          "Comprehensive documentation and team training",
        ],
      },
      {
        name: "Training & Support",
        description:
          "Empower your team with the knowledge and tools they need to maximize the impact of AI portfolio intelligence solutions through comprehensive training programs.",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
        includes: [
          "AI fundamentals and portfolio intelligence workshops",
          "Platform-specific training for Sandbox and Vector",
          "Best practices and methodology sessions",
          "24/7 technical support and assistance",
          "Regular system updates and maintenance",
          "Performance optimization consultations",
        ],
        outcomes: [
          "Skilled and confident team members",
          "Improved platform adoption and usage",
          "Reduced time-to-value for AI initiatives",
          "Continuous improvement and optimization",
        ],
      },
    ];

    const industries = [
      {
        name: "Wealth Management",
        description: "Portfolio optimization and asset allocation intelligence",
      },
      {
        name: "Energy & Utilities",
        description: "IRR tracking, PPA analysis, and degradation modeling",
      },
      {
        name: "Infrastructure",
        description: "Asset lifecycle analysis and economic modeling",
      },
      {
        name: "Real Estate",
        description: "Property portfolio intelligence and market analysis",
      },
    ];

    const process = [
      {
        step: "01",
        title: "Discovery & Assessment",
        description:
          "We start with a comprehensive analysis of your current portfolio practices and AI readiness across all sectors.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Our experts create a tailored roadmap that aligns with your business objectives and portfolio intelligence goals.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "We work closely with your team to implement solutions with minimal disruption to your operations.",
      },
      {
        step: "04",
        title: "Optimization & Support",
        description:
          "Continuous monitoring and optimization ensure maximum value and long-term portfolio success.",
      },
    ];

    return (
      <div className="servicepage-container">
        {/* Hero Section */}
        <section className="servicepage-hero-section">
          <div className="servicepage-hero-wrapper">
            <div className="servicepage-hero-content">
              <div className="servicepage-hero-badge">
                <Briefcase size={16} />
                <span className="servicepage-hero-badge-text">
                  Professional Services
                </span>
              </div>

              <h1 className="servicepage-hero-title">
                <span className="servicepage-hero-title-main">
                  Expert Services for
                </span>
                <span className="servicepage-hero-title-gradient">
                  Portfolio Intelligence Success
                </span>
              </h1>

              <p className="servicepage-hero-description">
                From strategy to implementation, our team of AI and portfolio
                intelligence experts provides comprehensive services to ensure
                your organization achieves meaningful performance impact through
                technology across wealth, energy, and infrastructure sectors.
              </p>

              {/* <div className="servicepage-hero-stats">
                <div className="servicepage-hero-stat">
                  <div className="servicepage-hero-stat-number servicepage-hero-stat-primary">
                    100+
                  </div>
                  <div className="servicepage-hero-stat-label">
                    Projects Delivered
                  </div>
                </div>
                <div className="servicepage-hero-stat">
                  <div className="servicepage-hero-stat-number servicepage-hero-stat-secondary">
                    15+
                  </div>
                  <div className="servicepage-hero-stat-label">
                    Years Experience
                  </div>
                </div>
                <div className="servicepage-hero-stat">
                  <div className="servicepage-hero-stat-number servicepage-hero-stat-accent">
                    95%
                  </div>
                  <div className="servicepage-hero-stat-label">
                    Client Satisfaction
                  </div>
                </div>
                <div className="servicepage-hero-stat">
                  <div className="servicepage-hero-stat-number servicepage-hero-stat-purple">
                    24/7
                  </div>
                  <div className="servicepage-hero-stat-label">
                    Support Available
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Services & Expertise Section */}
        <section className="servicepage-expertise-section">
          <div className="servicepage-expertise-wrapper">
            <div className="servicepage-expertise-header">
              <h2 className="servicepage-expertise-title">
                Services &{" "}
                <span className="servicepage-title-gradient">Expertise</span>
              </h2>
              <p className="servicepage-expertise-description">
                Our comprehensive range of services designed to accelerate your
                portfolio intelligence journey
              </p>
            </div>

            <div className="servicepage-expertise-grid">
              {simpleServices.map((service, index) => {
                return (
                  <div key={service.id} className="servicepage-expertise-card">
                    <div className="servicepage-expertise-image-container">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="servicepage-expertise-image"
                      />
                    </div>

                    <div className="servicepage-expertise-content">
                      <h3 className="servicepage-expertise-card-title">
                        {service.title}
                      </h3>
                      <p className="servicepage-expertise-card-description">
                        {service.description}
                      </p>

                      <button
                        onClick={() => this.openModal(service)}
                        className="servicepage-expertise-expand-btn"
                      >
                        <span>View Key Capabilities</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modal Overlay for Services & Expertise */}
        {this.state.selectedService && this.state.isModalOpen && (
          <div className="servicepage-modal-overlay" onClick={this.closeModal}>
            <div
              className="servicepage-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="servicepage-modal-close"
                onClick={this.closeModal}
              >
                <X size={24} />
              </button>

              <div className="servicepage-modal-header">
                <h3 className="servicepage-modal-title">
                  {this.state.selectedService.title}
                </h3>
                <p className="servicepage-modal-description">
                  {this.state.selectedService.description}
                </p>
              </div>

              <div className="servicepage-modal-body">
                <h4 className="servicepage-modal-subtitle">Key Capabilities</h4>
                <div className="servicepage-modal-capabilities">
                  {this.state.selectedService.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="servicepage-modal-capability-item"
                    >
                      <Check
                        className="servicepage-modal-capability-check"
                        size={16}
                      />
                      <span className="servicepage-modal-capability-text">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="servicepage-modal-actions">
                <Link
                  to="https://www.sailbot.ai/"
                  target="_blank"
                  className="servicepage-modal-btn-primary"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                <button
                  className="servicepage-modal-btn-secondary"
                  onClick={this.closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Services Section */}
        <section className="servicepage-services-section">
          <div className="servicepage-services-wrapper">
            {detailedServices.map((service, index) => (
              <div key={index} className="servicepage-service-container">
                <div className="servicepage-service-header-center">
                  <h2 className="servicepage-service-main-title">
                    {service.name}
                  </h2>
                  <p className="servicepage-service-main-description">
                    {service.description}
                  </p>
                </div>

                <div className="servicepage-service-content-row">
                  <div className="servicepage-service-image-container">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="servicepage-service-image"
                    />
                  </div>

                  <div className="servicepage-service-details-container">
                    <div className="servicepage-service-details-grid">
                      <div className="servicepage-service-includes">
                        <h4 className="servicepage-service-subtitle">
                          What's Included
                        </h4>
                        <ul className="servicepage-service-list">
                          {service.includes.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="servicepage-service-list-item"
                            >
                              <CheckCircle
                                className="servicepage-service-icon"
                                size={14}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="servicepage-service-outcomes">
                        <h4 className="servicepage-service-subtitle">
                          Expected Outcomes
                        </h4>
                        <ul className="servicepage-service-list">
                          {service.outcomes.map((outcome, outcomeIndex) => (
                            <li
                              key={outcomeIndex}
                              className="servicepage-service-list-item"
                            >
                              <Star
                                className="servicepage-service-icon servicepage-outcome-star"
                                size={14}
                              />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="servicepage-service-actions">
                      <Link
                        to="https://www.sailbot.ai/"
                        target="_blank"
                        className="servicepage-service-btn-primary"
                      >
                        Get Started
                        <ArrowRight
                          className="servicepage-service-btn-arrow"
                          size={16}
                        />
                      </Link>
                      <Link
                        to="/products"
                        className="servicepage-service-btn-secondary"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="servicepage-process-section">
          <div className="servicepage-process-wrapper">
            <div className="servicepage-process-header">
              <h2 className="servicepage-process-title">Our Proven Process</h2>
              <p className="servicepage-process-subtitle">
                A systematic approach that ensures successful outcomes for every
                portfolio intelligence engagement
              </p>
            </div>

            <div className="servicepage-process-grid">
              {process.map((step, index) => (
                <div key={index} className="servicepage-process-item">
                  <div className="servicepage-process-card">
                    <div className="servicepage-process-step">{step.step}</div>
                    <h3 className="servicepage-process-card-title">
                      {step.title}
                    </h3>
                    <p className="servicepage-process-card-description">
                      {step.description}
                    </p>
                  </div>

                  {index < process.length - 1 && (
                    <div className="servicepage-process-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="servicepage-industries-section">
          <div className="servicepage-industries-wrapper">
            <div className="servicepage-industries-header">
              <h2 className="servicepage-industries-title">Sectors We Serve</h2>
              <p className="servicepage-industries-subtitle">
                Specialized expertise across key sectors driving portfolio
                intelligence innovation
              </p>
            </div>

            <div className="servicepage-industries-grid">
              {industries.map((industry, index) => (
                <div key={index} className="servicepage-industry-card">
                  <h3 className="servicepage-industry-title">
                    {industry.name}
                  </h3>
                  <p className="servicepage-industry-description">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="servicepage-cta-section">
          <div className="servicepage-cta-background">
            <div className="servicepage-cta-bg-element-1"></div>
            <div className="servicepage-cta-bg-element-2"></div>
          </div>

          <div className="servicepage-cta-wrapper">
            <h2 className="servicepage-cta-title">
              Ready to Start Your Journey?
            </h2>
            <p className="servicepage-cta-description">
              Let's discuss how our services can help you achieve your portfolio
              intelligence goals through AI innovation
            </p>

            <div className="servicepage-cta-actions">
              <Link to="/contact" className="servicepage-cta-btn-primary">
                <span className="servicepage-cta-btn-content">
                  Schedule Consultation
                  <ArrowRight className="servicepage-cta-btn-arrow" size={20} />
                </span>
              </Link>

              <Link to="/products" className="servicepage-cta-btn-secondary">
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
