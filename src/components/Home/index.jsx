import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Leaf,
  TrendingUp,
  Zap,
  Users,
  Target,
  BarChart3,
  Sparkles,
  Shield,
  Lightbulb,
  Gauge,
  Globe,
  CheckCircle,
  Star,
  Bot, // Add this
  Puzzle, // Add this
  RefreshCw, // Add this
} from "lucide-react";
import "./index.css";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef();
  const featuresRef = useRef();
  const benefitsRef = useRef();
  const testimonialsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: "AI-Powered Portfolio Intelligence",
      description:
        "Advanced machine learning algorithms for unified asset intelligence across finance, energy, and infrastructure",
      gradient: "Homepage-gradient-primary-secondary",
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Analytics",
      description:
        "Live data integration and instant insights for informed portfolio decisions across multiple sectors",
      gradient: "Homepage-gradient-secondary-accent",
    },
    {
      icon: <Users size={32} />,
      title: "Multi-Sector Platform",
      description:
        "Built for wealth management, energy portfolios, and emerging sector solutions with collaborative tools",
      gradient: "Homepage-gradient-accent-primary",
    },
    {
      icon: <Target size={32} />,
      title: "Sustainable Focus",
      description:
        "ESG integration and sustainability scoring for responsible asset management and capital deployment",
      gradient: "Homepage-gradient-purple-pink",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="Homepage-benefit-icon-primary" size={24} />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards",
    },
    {
      icon: <Lightbulb className="Homepage-benefit-icon-secondary" size={24} />,
      title: "Smart Portfolio Insights",
      description:
        "AI-driven recommendations for optimal asset allocation and portfolio performance",
    },
    {
      icon: <Gauge className="Homepage-benefit-icon-accent" size={24} />,
      title: "Performance Tracking",
      description:
        "Real-time monitoring of portfolio metrics and asset lifecycle analysis",
    },
    {
      icon: <Globe className="Homepage-benefit-icon-purple" size={24} />,
      title: "Global Reach",
      description:
        "Multi-regional deployment with localized compliance and sector expertise",
    },
  ];

  const whySustainsFeatures = [
    {
      icon: <RefreshCw size={20} />,
      title: "Sustainability-first design",
      iconColor: "Homepage-benefits-feature-icon-green",
    },
    {
      icon: <Bot size={20} />,
      title: "AI-driven analytics",
      iconColor: "Homepage-benefits-feature-icon-purple",
    },
    {
      icon: <Zap size={20} />,
      title: "Energy & Finance expertise combined",
      iconColor: "Homepage-benefits-feature-icon-yellow",
    },
    {
      icon: <Puzzle size={20} />,
      title: "Modular & scalable solutions",
      iconColor: "Homepage-benefits-feature-icon-blue",
    },
  ];

  const testimonials = [
    {
      name: "Sooraj E",
      role: "Co-Founder and CTO",
      company: "Marketfeed",
      quote:
        "Working with Sustains for Market risk consultancy has been a transformative experience. Their expert insights and innovative solutions have significantly enhanced our risk management strategies.",
      avatar:
        "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464565/Picture1_icrnld.jpg",
    },
    {
      name: "Bipin Kumar",
      role: "AVP Strategy & Finance",
      company: "Mantra",
      quote:
        "Partnering with Sustains.ai for AI and ML-driven solutions has been invaluable. Their expertise and innovative approach have greatly enhanced our decision-making and efficiency.",
      avatar:
        "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464566/Picture2_nr9612.jpg",
    },
    {
      name: "Vivek Mohan",
      role: "Assistant Professor",
      company: "NIT Calicut",
      quote:
        "Collaborating with Sustains.ai on portfolio intelligence solutions has been highly rewarding. Their innovative approach and commitment to practical problem-solving bring real value to academic-industry partnerships.",
      avatar:
        "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464565/Picture3_poymkw.jpg",
    },
  ];

  return (
    <div className="Homepage-container">
      {/* Hero Section */}
      <section id="home" className="Homepage-hero-section">
        {/* Animated Background Elements */}
        <div className="Homepage-hero-bg">
          <div className="Homepage-hero-bg-circle-1"></div>
          <div className="Homepage-hero-bg-circle-2"></div>
          <div className="Homepage-hero-bg-circle-3"></div>
        </div>

        <div className="Homepage-hero-wrapper">
          <div className="Homepage-hero-grid">
            {/* Left Side Content */}
            <div ref={heroRef} className="Homepage-hero-content">
              <h1 className="Homepage-hero-title">
                <span className="Homepage-hero-title-line-1">AI-Powered</span>
                <span className="Homepage-hero-title-line-2">
                  Portfolio Intelligence
                </span>
                <span className="Homepage-hero-title-line-3">
                  for a Sustainable Future
                </span>
              </h1>

              <p className="Homepage-hero-description">
                Harness the power of AI to manage asset portfolios across
                Wealth, Energy, Real Estate, and Infrastructure with ease.
                Transform static data into actionable intelligence.
              </p>

              <div className="Homepage-hero-buttons">
                <Link to="/products" className="Homepage-hero-button-primary">
                  <span className="Homepage-hero-button-primary-content">
                    Our Products
                    <ArrowRight
                      className="Homepage-hero-button-arrow"
                      size={20}
                    />
                  </span>
                  <div className="Homepage-hero-button-primary-overlay"></div>
                </Link>

                <Link to="/contact" className="Homepage-hero-button-secondary">
                  <span className="Homepage-hero-button-secondary-content">
                    Book Demo
                    <BarChart3
                      className="Homepage-hero-button-chart"
                      size={20}
                    />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              {/* <div className="Homepage-hero-stats">
                <div className="Homepage-hero-stat">
                  <div className="Homepage-hero-stat-number-primary">500+</div>
                  <div className="Homepage-hero-stat-label">
                    Portfolio Assets
                  </div>
                </div>
                <div className="Homepage-hero-stat">
                  <div className="Homepage-hero-stat-number-secondary">
                    99.9%
                  </div>
                  <div className="Homepage-hero-stat-label">
                    Uptime Guarantee
                  </div>
                </div>
                <div className="Homepage-hero-stat">
                  <div className="Homepage-hero-stat-number-accent">3</div>
                  <div className="Homepage-hero-stat-label">Core Sectors</div>
                </div>
              </div> */}
            </div>

            {/* Right Side Visuals */}
            <div className="Homepage-hero-visual">
              {/* Main Dashboard Card */}
              <div className="Homepage-dashboard-container">
                <div className="Homepage-dashboard-card">
                  {/* Header */}
                  <div className="Homepage-dashboard-header">
                    <h3 className="Homepage-dashboard-title">
                      Portfolio Intelligence Dashboard
                    </h3>
                    <div className="Homepage-dashboard-status"></div>
                  </div>

                  {/* Chart Area */}
                  <div className="Homepage-dashboard-chart-area">
                    <div className="Homepage-dashboard-chart">
                      <svg
                        className="Homepage-dashboard-svg"
                        viewBox="0 0 300 120"
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="hsl(174, 72%, 56%)" />
                            <stop
                              offset="100%"
                              stopColor="hsl(160, 84%, 39%)"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 80 Q75 20 150 40 T300 30"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          fill="none"
                          className="Homepage-dashboard-path"
                        />
                        <circle
                          cx="0"
                          cy="80"
                          r="4"
                          fill="hsl(174, 72%, 56%)"
                          className="Homepage-dashboard-circle"
                        ></circle>
                      </svg>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="Homepage-dashboard-metrics">
                    <div className="Homepage-dashboard-metric Homepage-dashboard-metric-primary">
                      <div className="Homepage-dashboard-metric-header">
                        <TrendingUp
                          className="Homepage-dashboard-metric-icon-primary"
                          size={16}
                        />
                        <span className="Homepage-dashboard-metric-label">
                          Portfolio ROI
                        </span>
                      </div>
                      <div className="Homepage-dashboard-metric-value-primary">
                        +127%
                      </div>
                      <div className="Homepage-dashboard-metric-subtitle">
                        vs last quarter
                      </div>
                    </div>

                    <div className="Homepage-dashboard-metric Homepage-dashboard-metric-secondary">
                      <div className="Homepage-dashboard-metric-header">
                        <Leaf
                          className="Homepage-dashboard-metric-icon-secondary"
                          size={16}
                        />
                        <span className="Homepage-dashboard-metric-label">
                          ESG Score
                        </span>
                      </div>
                      <div className="Homepage-dashboard-metric-value-secondary">
                        A+
                      </div>
                      <div className="Homepage-dashboard-metric-subtitle">
                        Sustainability Rating
                      </div>
                    </div>

                    <div className="Homepage-dashboard-metric Homepage-dashboard-metric-accent">
                      <div className="Homepage-dashboard-metric-header">
                        <Brain
                          className="Homepage-dashboard-metric-icon-accent"
                          size={16}
                        />
                        <span className="Homepage-dashboard-metric-label">
                          AI Accuracy
                        </span>
                      </div>
                      <div className="Homepage-dashboard-metric-value-accent">
                        94.7%
                      </div>
                      <div className="Homepage-dashboard-metric-subtitle">
                        Prediction Rate
                      </div>
                    </div>

                    <div className="Homepage-dashboard-metric Homepage-dashboard-metric-purple">
                      <div className="Homepage-dashboard-metric-header">
                        <Users
                          className="Homepage-dashboard-metric-icon-purple"
                          size={16}
                        />
                        <span className="Homepage-dashboard-metric-label">
                          Active Assets
                        </span>
                      </div>
                      <div className="Homepage-dashboard-metric-value-purple">
                        12.4K
                      </div>
                      <div className="Homepage-dashboard-metric-subtitle">
                        Under Management
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="Homepage-dashboard-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="Homepage-features-section">
        <div className="Homepage-features-wrapper">
          <div ref={featuresRef} className="Homepage-features-header">
            <div className="Homepage-features-badge">
              <Star className="Homepage-features-badge-icon" size={16} />
              <span className="Homepage-features-badge-text">
                Why Choose Sustains.ai
              </span>
            </div>
            <h2 className="Homepage-features-title">
              Intelligent Solutions for
              <span className="Homepage-features-title-gradient">
                Portfolio Excellence
              </span>
            </h2>
            <p className="Homepage-features-description">
              Our platform combines cutting-edge AI technology with portfolio
              science to deliver actionable insights that drive real performance
              outcomes across wealth, energy, and infrastructure sectors.
            </p>
          </div>

          <div className="Homepage-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="Homepage-feature-card">
                <div className="Homepage-feature-card-overlay"></div>
                <div className={`Homepage-feature-icon ${feature.gradient}`}>
                  {feature.icon}
                </div>
                <h3 className="Homepage-feature-title">{feature.title}</h3>
                <p className="Homepage-feature-description">
                  {feature.description}
                </p>
                <div className="Homepage-feature-bottom-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Redesigned to Match Image */}
      <section className="Homepage-benefits-section">
        <div className="Homepage-benefits-wrapper">
          {/* Centered Header */}
          <div className="Homepage-benefits-header">
            <div className="Homepage-benefits-badge">
              <Shield className="Homepage-benefits-badge-icon" size={16} />
              <span className="Homepage-benefits-badge-text">
                Enterprise Ready
              </span>
            </div>
            <h2 className="Homepage-benefits-title">
              Built for Enterprise
              <span className="Homepage-benefits-title-accent">
                Scale & Security
              </span>
            </h2>
            <p className="Homepage-benefits-description">
              Enterprise-grade infrastructure with the flexibility to scale from
              startup to global corporation. Our platform grows with your
              portfolio intelligence ambitions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="Homepage-benefits-main-grid">
            {/* Left side*/}
            <div className="Homepage-benefits-left">
              <div className="Homepage-benefits-cards-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="Homepage-benefit-card">
                    <div className="Homepage-benefit-card-header">
                      <div className="Homepage-benefit-icon-wrapper">
                        {benefit.icon}
                      </div>
                      <div className="Homepage-benefit-content">
                        <h3 className="Homepage-benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="Homepage-benefit-description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="Homepage-benefits-cta">
                <Link to="/services" className="Homepage-benefits-button">
                  Learn More About Our Services
                  <ArrowRight
                    className="Homepage-benefits-button-arrow"
                    size={20}
                  />
                </Link>
              </div>
            </div>

            {/* Right side - Why Sustains Feature List */}
            <div className="Homepage-benefits-right">
              <div className="Homepage-why-sustains-container">
                <h3 className="Homepage-why-sustains-title">Why Sustains?</h3>

                <div className="Homepage-why-sustains-list">
                  {whySustainsFeatures.map((feature, index) => (
                    <div key={index} className="Homepage-why-sustains-item">
                      <div
                        className={`Homepage-why-sustains-icon ${feature.iconColor}`}
                      >
                        {feature.icon}
                      </div>
                      <span className="Homepage-why-sustains-text">
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Redesign */}
      <section className="Homepage-testimonials-section">
        <div className="Homepage-testimonials-wrapper">
          <div className="Homepage-testimonials-header">
            <div className="Homepage-testimonials-badge">
              <Users className="Homepage-testimonials-badge-icon" size={16} />
              <span className="Homepage-testimonials-badge-text">
                Customer Success
              </span>
            </div>
            <h2 className="Homepage-testimonials-title">
              Trusted by Industry Leaders
            </h2>
            <p className="Homepage-testimonials-description">
              See how organizations worldwide are achieving their portfolio
              intelligence goals with our AI platform
            </p>
          </div>

          <div className="Homepage-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="Homepage-testimonial-card">
                <div className="Homepage-testimonial-content">
                  <div className="Homepage-testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="Homepage-testimonial-star"
                        size={18}
                      />
                    ))}
                  </div>
                  <blockquote className="Homepage-testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="Homepage-testimonial-author">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="Homepage-testimonial-avatar"
                  />
                  <div className="Homepage-testimonial-author-info">
                    <h4 className="Homepage-testimonial-name">
                      {testimonial.name}
                    </h4>
                    <p className="Homepage-testimonial-role">
                      {testimonial.role}
                    </p>
                    <p className="Homepage-testimonial-company">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="Homepage-cta-section">
        <div className="Homepage-cta-bg">
          <div className="Homepage-cta-bg-circle-1"></div>
          <div className="Homepage-cta-bg-circle-2"></div>
        </div>

        <div className="Homepage-cta-wrapper">
          <h2 className="Homepage-cta-title">
            Ready to Transform Your
            <span className="Homepage-cta-title-gradient">
              Portfolio Intelligence?
            </span>
          </h2>
          <p className="Homepage-cta-description">
            Join the future of AI-powered portfolio management across wealth,
            energy, and infrastructure. Start your journey today and see the
            impact within 30 days.
          </p>

          <div className="Homepage-cta-buttons">
            <Link to="/products" className="Homepage-cta-button-primary">
              <span className="Homepage-cta-button-primary-content">
                Request free trial
                <ArrowRight
                  className="Homepage-cta-button-primary-arrow"
                  size={20}
                />
              </span>
              <div className="Homepage-cta-button-primary-overlay"></div>
            </Link>

            <Link to="/contact" className="Homepage-cta-button-secondary">
              <span className="Homepage-cta-button-secondary-content">
                Schedule Demo
                <Users
                  className="Homepage-cta-button-secondary-users"
                  size={20}
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
