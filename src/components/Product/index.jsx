import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Leaf,
  BarChart3,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Rocket,
  X,
} from "lucide-react";
import "./index.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      isModalOpen: false,
    };
  }

  openModal = (product) => {
    this.setState({
      selectedProduct: product,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedProduct: null,
      isModalOpen: false,
    });
  };

  getColorClasses = (color) => {
    switch (color) {
      case "primary":
        return {
          gradient: "productpage-from-primary-80",
          text: "productpage-text-primary",
          bg: "productpage-bg-primary-10",
        };
      case "secondary":
        return {
          gradient: "productpage-from-secondary-80",
          text: "productpage-text-secondary",
          bg: "productpage-bg-secondary-10",
        };
      case "accent":
        return {
          gradient: "productpage-from-accent-80",
          text: "productpage-text-accent",
          bg: "productpage-bg-accent-10",
        };
      default:
        return {
          gradient: "productpage-from-primary-80",
          text: "productpage-text-primary",
          bg: "productpage-bg-primary-10",
        };
    }
  };

  render() {
    const simpleProducts = [
      {
        id: "sandbox",
        name: "Sandbox",
        icon: <TrendingUp size={32} />,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "Wealth Management Analytics",
        details: {
          subtitle: "Wealth Management Analytics",
          content:
            "A dynamic platform designed for investors and advisors to analyze, monitor, and optimize multi-asset portfolios. Sandbox brings clarity to performance, risk, and rebalancing through AI-assisted insights and real-time diagnostics.",
        },
        color: "primary",
      },
      {
        id: "vector",
        name: "Vector",
        icon: <Zap size={32} />,
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "Energy Asset Portfolios",
        details: {
          subtitle: "Energy Asset Portfolios",
          content:
            "Purpose-built for Utility developers and investors, Vector transforms static project data into actionable portfolio intelligence—featuring IRR tracking, PPA analysis, degradation modeling, scenario planning etc.",
        },
        color: "secondary",
      },
      {
        id: "emerging",
        name: "Emerging Sector Solutions",
        icon: <Rocket size={32} />,
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "Next-Generation Analytics",
        details: {
          subtitle: "Next-Generation Analytics",
          content:
            "Active development of next-gen analytics platforms tailored to real estate, infrastructure, and logistics portfolios. These tools will support strategy through economic modelling, asset lifecycle analysis, and sustainability integration across traditionally underserved sectors.",
        },
        color: "accent",
      },
    ];

    const features = [
      {
        icon: <Shield size={24} />,
        title: "Enterprise Security",
        description: "Bank-level encryption and SOC 2 compliance",
      },
      {
        icon: <Globe size={24} />,
        title: "Global Deployment",
        description: "Multi-region support with 99.9% uptime SLA",
      },
      {
        icon: <Zap size={24} />,
        title: "Real-time Processing",
        description: "Process millions of data points in real-time",
      },
      {
        icon: <TrendingUp size={24} />,
        title: "Advanced Analytics",
        description: "ML-powered insights and predictive modeling",
      },
    ];

    return (
      <div className="productpage-container">
        {/* Hero Section */}
        <section className="productpage-hero-section">
          <div className="productpage-hero-wrapper">
            <div className="productpage-hero-content">
              <div className="productpage-hero-badge">
                <BarChart3 size={16} />
                <span className="productpage-hero-badge-text">
                  AI-Powered Solutions
                </span>
              </div>

              <h1 className="productpage-hero-title">
                <span className="productpage-hero-title-main">
                  AI-Powered Portfolio Intelligence
                </span>
                <span className="productpage-hero-title-gradient">
                  for Multiple Sectors
                </span>
              </h1>

              <p className="productpage-hero-description">
                Transform your organization with our suite of AI-powered
                portfolio intelligence products. Each solution is designed to
                deliver measurable performance impact while driving sustainable
                value across wealth, energy, and infrastructure sectors.
              </p>

              {/* <div className="productpage-hero-stats">
                <div className="productpage-hero-stat">
                  <div className="productpage-hero-stat-number productpage-hero-stat-primary">
                    3
                  </div>
                  <div className="productpage-hero-stat-label">
                    Core Products
                  </div>
                </div>
                <div className="productpage-hero-stat">
                  <div className="productpage-hero-stat-number productpage-hero-stat-secondary">
                    500+
                  </div>
                  <div className="productpage-hero-stat-label">
                    Portfolio Assets
                  </div>
                </div>
                <div className="productpage-hero-stat">
                  <div className="productpage-hero-stat-number productpage-hero-stat-accent">
                    45%
                  </div>
                  <div className="productpage-hero-stat-label">
                    Avg. Efficiency Gain
                  </div>
                </div>
                <div className="productpage-hero-stat">
                  <div className="productpage-hero-stat-number productpage-hero-stat-purple">
                    99.9%
                  </div>
                  <div className="productpage-hero-stat-label">Uptime</div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Main Products Section */}
        <section className="productpage-simple-section">
          <div className="productpage-simple-wrapper">
            <div className="productpage-simple-header">
              <h2 className="productpage-simple-title">
                Our <span className="productpage-title-gradient">Products</span>
              </h2>
              <p className="productpage-simple-subtitle">
                Innovative AI-powered solutions for comprehensive portfolio
                intelligence across multiple sectors
              </p>
            </div>

            <div className="productpage-simple-grid">
              {simpleProducts.map((product, index) => {
                const colors = this.getColorClasses(product.color);

                return (
                  <div key={product.id} className="productpage-simple-card">
                    <div className="productpage-card-image-container">
                      <img
                        src={product.image}
                        alt={`${product.name} platform interface`}
                        className="productpage-card-image"
                      />
                      <div
                        className={`productpage-card-overlay ${colors.gradient}`}
                      >
                        <h3 className="productpage-card-name">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="productpage-card-content">
                      <div className="productpage-card-main">
                        <h4 className="productpage-card-title">
                          {product.description}
                        </h4>
                        <button
                          className={`productpage-learn-more-btn ${colors.text}`}
                          onClick={() => this.openModal(product)}
                        >
                          Learn More
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modal Overlay */}
        {this.state.isModalOpen && this.state.selectedProduct && (
          <div className="productpage-modal-overlay" onClick={this.closeModal}>
            <div
              className="productpage-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="productpage-modal-close"
                onClick={this.closeModal}
              >
                <X size={24} />
              </button>

              <div className="productpage-modal-header">
                <h3 className="productpage-modal-title">
                  {this.state.selectedProduct.name}
                </h3>
                <p className="productpage-modal-subtitle">
                  {this.state.selectedProduct.details.subtitle}
                </p>
              </div>

              <div className="productpage-modal-body">
                <img
                  src={this.state.selectedProduct.image}
                  alt={`${this.state.selectedProduct.name} platform`}
                  className="productpage-modal-image"
                />
                <p className="productpage-modal-description">
                  {this.state.selectedProduct.details.content}
                </p>
              </div>

              <div className="productpage-modal-actions">
                <Link to={"/contact"}>
                  <button
                    className="productpage-modal-btn-primary"
                    onClick={this.closeModal}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="productpage-features-section">
          <div className="productpage-features-wrapper">
            <div className="productpage-features-header">
              <h2 className="productpage-features-title">
                Built for Enterprise Scale
              </h2>
              <p className="productpage-features-subtitle">
                Every product is designed with enterprise-grade security,
                scalability, and reliability
              </p>
            </div>

            <div className="productpage-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="productpage-feature-card">
                  <div
                    className={`productpage-feature-card-icon productpage-feature-icon-${
                      index + 1
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="productpage-feature-card-title">
                    {feature.title}
                  </h3>
                  <p className="productpage-feature-card-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="productpage-cta-section">
          <div className="productpage-cta-background">
            <div className="productpage-cta-bg-element-1"></div>
            <div className="productpage-cta-bg-element-2"></div>
          </div>

          <div className="productpage-cta-wrapper">
            <h2 className="productpage-cta-title">Ready to Get Started?</h2>
            <p className="productpage-cta-description">
              Join hundreds of organizations already using our AI-powered
              portfolio intelligence solutions
            </p>

            <div className="productpage-cta-actions">
              <Link to="/contact" className="productpage-cta-btn-primary">
                <span className="productpage-cta-btn-content">
                  Start Free Trial
                  <ArrowRight className="productpage-cta-btn-arrow" size={20} />
                </span>
              </Link>

              <Link to="/services" className="productpage-cta-btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
