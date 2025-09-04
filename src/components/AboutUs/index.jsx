import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  Globe,
  Shield,
  Lightbulb,
  Heart,
  Award,
  CheckCircle,
  Zap,
  Code,
  Calendar,
  Building,
  Star,
  Eye,
  Compass,
} from "lucide-react";
import "./index.css";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Arjun C. Unni",
      role: "Co-Founder & CEO",
      bio: "Leading AI researcher with expertise in portfolio intelligence and sustainable technology solutions.",
      image:
        "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464566/Arjun_ofkmcg.jpg",
      linkedin: "#",
      expertise: ["AI Research", "Portfolio Strategy", "Sustainable Tech"],
    },
  ];
  const values = [
    {
      icon: <Brain size={32} />,
      title: "Innovation",
      description:
        "Pushing the boundaries of AI-powered portfolio intelligence across all sectors",
    },
    {
      icon: <Shield size={32} />,
      title: "Trust",
      description:
        "Building secure, reliable solutions our clients can depend on for critical decisions",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Impact",
      description:
        "Creating solutions that drive positive change and sustainable growth worldwide",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "Working together with partners to achieve shared portfolio intelligence goals",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description:
        "Passionate portfolio strategists, energy analysts, coders and venture thinkers gathered with a vision",
      icon: <Lightbulb size={24} />,
    },
    {
      year: "Jan 2025",
      title: "Official Launch",
      description:
        "Sustains.ai officially launched with Dr. Arjun C Unni and founding team",
      icon: <Zap size={24} />,
    },
    {
      year: "2025",
      title: "Products Released",
      description:
        "Launched Sandbox for wealth advisory and Vector for energy stakeholders",
      icon: <Code size={24} />,
    },
    {
      year: "Future",
      title: "Expanding Horizons",
      description:
        "Developing solutions for real estate, infrastructure, and logistics portfolios",
      icon: <Building size={24} />,
    },
  ];

  const stats = [
    { number: "2025", label: "Founded" },
    // { number: "500+", label: "Portfolio Assets" },
    { number: "3", label: "Core Sectors" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="aboutpage-container">
      {/* Hero Section */}
      <section className="aboutpage-hero-section">
        <div className="aboutpage-hero-wrapper">
          <div className="aboutpage-hero-content">
            <div className="aboutpage-hero-badge">
              <Sparkles size={16} />
              <span className="aboutpage-hero-badge-text">
                About Sustains.ai
              </span>
            </div>

            <h1 className="aboutpage-hero-title">
              <span className="aboutpage-hero-title-main">
                Pioneering the Future of
              </span>
              <span className="aboutpage-hero-title-gradient">
                AI-Powered Portfolio Intelligence
              </span>
            </h1>

            <p className="aboutpage-hero-description">
              We believe that technology, when built with precision and purpose,
              can drive sustainability, efficiency, and equitable growth across
              all sectors.
            </p>

            <div className="aboutpage-hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="aboutpage-hero-stat">
                  <div
                    className={`aboutpage-hero-stat-number aboutpage-hero-stat-${
                      index % 4 === 0
                        ? "primary"
                        : index % 4 === 1
                        ? "secondary"
                        : index % 4 === 2
                        ? "accent"
                        : "purple"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className="aboutpage-hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Story Section*/}
      <section className="aboutpage-content-section">
        <div className="aboutpage-content-wrapper">
          <div className="aboutpage-content-header">
            <span className="aboutpage-content-badge">Our Foundation</span>
            <h2 className="aboutpage-content-title">
              Building the Future of{" "}
              <span className="aboutpage-content-title-gradient">
                Portfolio Intelligence
              </span>
            </h2>
          </div>

          {/* Mission and Vision Row */}
          <div className="aboutpage-mission-vision-row">
            {/* Mission */}
            <div className="aboutpage-mission-card">
              <div className="aboutpage-mission-header">
                <h3 className="aboutpage-mission-title">Our Mission</h3>
              </div>
              <div className="aboutpage-mission-content">
                <p className="aboutpage-mission-statement">
                  To unify and elevate portfolio intelligence across finance,
                  energy, and infrastructure through AI-powered analytics.
                </p>
                <p className="aboutpage-mission-description">
                  We empower decision-makers with advanced tools and insights to
                  optimize capital deployment, enabling smarter, scalable, and
                  sustainable asset management that aligns with long-term
                  sustainability goals.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="aboutpage-vision-card">
              <div className="aboutpage-vision-content">
                <h3 className="aboutpage-vision-title">Our Vision</h3>
                <p className="aboutpage-vision-statement">
                  To become the global standard for AI-integrated portfolio
                  intelligence across different domains.
                </p>
                <p className="aboutpage-vision-description">
                  We believe technology, when built with precision and purpose,
                  can drive sustainability, efficiency, and equitable growth
                  worldwide. Our platform will transform how organizations
                  approach portfolio management.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="aboutpage-story-section">
            <div className="aboutpage-story-container">
              <div className="aboutpage-story-header">
                <h3 className="aboutpage-story-title">Our Story</h3>
              </div>

              <div className="aboutpage-story-content">
                <p className="aboutpage-story-text">
                  Before dashboards and data, there were discussions. Passionate
                  portfolio strategists, energy analysts, coders and venture
                  thinkers gathered after work on Friday evenings, not for
                  networking, but for pure intellectual curiosity.
                </p>

                <div className="aboutpage-story-quote-section">
                  <blockquote className="aboutpage-story-quote">
                    "What if portfolios could think?"
                  </blockquote>
                  <p className="aboutpage-story-quote-attribution">
                    That spark became a fire.
                  </p>
                </div>

                <div className="aboutpage-story-journey">
                  <div className="aboutpage-story-journey-item">
                    <div className="aboutpage-story-journey-content">
                      <h4 className="aboutpage-story-journey-title">
                        The Beginning
                      </h4>
                      <p className="aboutpage-story-journey-text">
                        In January 2025, we officially launched Sustains.ai,
                        founded by Dr. Arjun C Unni and a team that believed
                        analytics wasn't just about numbers, but insights that
                        move capital responsibly and strategically.
                      </p>
                    </div>
                  </div>

                  <div className="aboutpage-story-journey-item">
                    <div className="aboutpage-story-journey-content">
                      <h4 className="aboutpage-story-journey-title">
                        The Vision
                      </h4>
                      <p className="aboutpage-story-journey-text">
                        AI-integrated portfolio intelligence could unify
                        traditionally siloed industries under a common
                        technological framework. We're building Sandbox for
                        wealth advisory and Vector for energy stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="aboutpage-timeline-section">
        <div className="aboutpage-timeline-wrapper">
          <div className="aboutpage-timeline-header">
            <div className="aboutpage-timeline-badge">
              <Calendar size={16} />
              <span className="aboutpage-timeline-badge-text">Our Journey</span>
            </div>
            <h2 className="aboutpage-timeline-title">
              From Vision to{" "}
              <span className="aboutpage-timeline-title-gradient">Reality</span>
            </h2>
            <p className="aboutpage-timeline-subtitle">
              The milestones that shaped our company and continue to drive our
              innovation
            </p>
          </div>

          <div className="aboutpage-timeline-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className="aboutpage-timeline-item">
                <div className="aboutpage-timeline-card">
                  <div className="aboutpage-timeline-icon">
                    {milestone.icon}
                  </div>
                  <div className="aboutpage-timeline-year">
                    {milestone.year}
                  </div>
                  <h3 className="aboutpage-timeline-item-title">
                    {milestone.title}
                  </h3>
                  <p className="aboutpage-timeline-item-description">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="aboutpage-values-section">
        <div className="aboutpage-values-wrapper">
          <div className="aboutpage-values-header">
            <div className="aboutpage-values-badge">
              <Heart size={16} />
              <span className="aboutpage-values-badge-text">Our Values</span>
            </div>
            <h2 className="aboutpage-values-title">
              The Principles That{" "}
              <span className="aboutpage-values-title-gradient">Guide Us</span>
            </h2>
            <p className="aboutpage-values-subtitle">
              These core values shape every decision we make and every solution
              we build
            </p>
          </div>

          <div className="aboutpage-values-grid">
            {values.map((value, index) => (
              <div key={index} className="aboutpage-value-card">
                <div className="aboutpage-value-card-overlay"></div>
                <div
                  className={`aboutpage-value-icon aboutpage-value-icon-${
                    index + 1
                  }`}
                >
                  {value.icon}
                </div>
                <h3 className="aboutpage-value-title">{value.title}</h3>
                <p className="aboutpage-value-description">
                  {value.description}
                </p>
                <div className="aboutpage-value-bottom-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="aboutpage-team-section">
        <div className="aboutpage-team-wrapper">
          <div className="aboutpage-team-header">
            <div className="aboutpage-team-badge">
              <Users className="aboutpage-team-badge-icon" size={16} />
              <span className="aboutpage-team-badge-text">
                Leadership & Team
              </span>
            </div>
            <h2 className="aboutpage-team-title">
              Our Story &{" "}
              <span className="aboutpage-team-title-gradient">Team</span>
            </h2>
          </div>

          <div className="aboutpage-team-clean-grid">
            {/* Left Side - Founder Profile */}
            <div className="aboutpage-founder-clean-section">
              <div className="aboutpage-founder-image-container">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="aboutpage-founder-image"
                />
              </div>
              <div className="aboutpage-founder-info">
                <h3 className="aboutpage-founder-name">
                  {teamMembers[0].name}
                </h3>
                <p className="aboutpage-founder-role">{teamMembers[0].role}</p>
              </div>
            </div>

            {/* Right Side - Story Content */}
            <div className="aboutpage-story-clean-section">
              <div className="aboutpage-story-content">
                <p className="aboutpage-story-paragraph">
                  <strong>Sustains.ai</strong> was founded in{" "}
                  <strong>January 2025 by Dr. Arjun C. Unni</strong> with a bold
                  vision: to unify asset intelligence across{" "}
                  <strong>
                    finance, energy, real estate, and infrastructure
                  </strong>
                  . The idea was born from interdisciplinary collaboration
                  between experts in{" "}
                  <strong>finance, energy, strategy, and software</strong>,
                  aiming to give decision-makers AI-driven tools for{" "}
                  <strong>
                    real-time, smarter, and sustainable capital allocation
                  </strong>
                  .
                </p>

                <p className="aboutpage-story-paragraph">
                  Today, Sustains.ai is more than a concept, it's a{" "}
                  <strong>growing team of 10+ professionals</strong>, including{" "}
                  <strong>
                    VP-level leaders from major banks, asset management firms,
                    Energy project developers and global consultancies
                  </strong>
                  . Alongside the founding team, these experts and dedicated
                  staff are actively driving{" "}
                  <strong>
                    product development, compliance, and client delivery
                  </strong>
                  , building the foundation for a trusted global platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutpage-cta-section">
        <div className="aboutpage-cta-bg">
          <div className="aboutpage-cta-bg-circle-1"></div>
          <div className="aboutpage-cta-bg-circle-2"></div>
        </div>

        <div className="aboutpage-cta-wrapper">
          <div className="aboutpage-cta-content">
            <h2 className="aboutpage-cta-title">
              Ready to Transform Your
              <span className="aboutpage-cta-title-gradient">
                Portfolio Intelligence?
              </span>
            </h2>
            <p className="aboutpage-cta-description">
              Join us in revolutionizing how portfolios are managed across
              wealth, energy, and infrastructure sectors. Start your journey
              today.
            </p>
            <div className="aboutpage-cta-buttons">
              <Link to="/products" className="aboutpage-cta-primary">
                <span className="aboutpage-cta-primary-content">
                  Explore Our Products
                  <ArrowRight size={20} />
                </span>
                <div className="aboutpage-cta-primary-overlay"></div>
              </Link>
              <Link to="/contact" className="aboutpage-cta-secondary">
                <span className="aboutpage-cta-secondary-content">
                  Get In Touch
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
            {/* <div className="aboutpage-cta-stats">
              <div className="aboutpage-cta-stat">
                <div className="aboutpage-cta-stat-number aboutpage-cta-stat-primary">
                  30 Days
                </div>
                <div className="aboutpage-cta-stat-label">Free Trial</div>
              </div>
              <div className="aboutpage-cta-stat">
                <div className="aboutpage-cta-stat-number aboutpage-cta-stat-secondary">
                  24/7
                </div>
                <div className="aboutpage-cta-stat-label">Support</div>
              </div>
              <div className="aboutpage-cta-stat">
                <div className="aboutpage-cta-stat-number aboutpage-cta-stat-accent">
                  99.9%
                </div>
                <div className="aboutpage-cta-stat-label">Uptime</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
