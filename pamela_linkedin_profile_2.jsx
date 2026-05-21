import { useState } from "react";

const skills = [
  "Calendar & Inbox Management",
  "Executive Scheduling",
  "Workflow Coordination",
  "Government Correspondence",
  "Social Media Content",
  "Brand Consistency",
  "Content Scheduling",
  "Frontend Development",
  "Digital Tools & Design",
  "Administrative Operations",
];

const services = [
  {
    icon: "📅",
    title: "Calendar & Inbox Management",
    desc: "Zero-chaos scheduling and correspondence handling so executives stay focused on what matters.",
  },
  {
    icon: "⚙️",
    title: "Workflow & Admin Coordination",
    desc: "Streamlined office systems, task tracking, and process documentation that eliminate bottlenecks.",
  },
  {
    icon: "📱",
    title: "Social Media Content Creation",
    desc: "Structured, on-brand content with consistent visual identity — planned, created, and scheduled.",
  },
  {
    icon: "🎯",
    title: "Brand Consistency",
    desc: "A unified voice and look across platforms, backed by frontend design knowledge and user-first thinking.",
  },
];

const achievements = [
  { stat: "4+", label: "Years Admin Experience" },
  { stat: "100%", label: "Correspondence Accuracy" },
  { stat: "1yr+", label: "Social Media Management" },
  { stat: "∞", label: "Deadlines Met" },
];

export default function LinkedInProfile() {
  const [copied, setCopied] = useState(false);

  const aboutText = `Results-focused Virtual Executive Assistant with 4 years of hands-on administrative experience — proven track record in managing complex government correspondence, securing overdue payments through strategic communication, and streamlining office workflows. Plus 1 year of social media management.

Skilled in executive scheduling, workflow organization, and structured, visually consistent content creation. Frontend development training adds a strong grasp of digital tools, layout, and user-focused design.

What I support:
• Calendar and inbox management
• Workflow organization and admin coordination
• Social media content creation and scheduling
• Brand consistency and structured content

I help you stay clear, consistent, and in control — in your operations and your online presence.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(aboutText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%)",
        minHeight: "100vh",
        color: "#e8e0d4",
        padding: "0",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero { 
          position: relative;
          padding: 64px 32px 48px;
          max-width: 780px;
          margin: 0 auto;
        }

        .gold-rule {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #c9a84c, #f0d080);
          margin-bottom: 20px;
        }

        .name-block {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.4rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.5px;
          color: #f5ecd7;
          margin-bottom: 8px;
        }

        .name-accent { color: #c9a84c; }

        .title-badge {
          display: inline-block;
          font-family: 'Crimson Pro', serif;
          font-size: 0.78rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #9e8866;
          margin-bottom: 28px;
          padding: 6px 14px;
          border: 1px solid #3a2e1c;
          border-radius: 2px;
        }

        .hook-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          font-weight: 400;
          font-style: italic;
          line-height: 1.7;
          color: #d4c8b4;
          max-width: 640px;
          margin-bottom: 36px;
          border-left: 3px solid #c9a84c;
          padding-left: 20px;
        }

        .stats-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .stat-item { text-align: left; }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #c9a84c;
          line-height: 1;
        }

        .stat-label {
          font-family: 'Crimson Pro', serif;
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #7a6e60;
          margin-top: 4px;
        }

        .divider {
          border: none;
          border-top: 1px solid #2a2318;
          max-width: 780px;
          margin: 0 auto 40px;
        }

        .section {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 32px 48px;
        }

        .section-label {
          font-family: 'Crimson Pro', serif;
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 20px;
        }

        .about-block {
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a2318;
          border-radius: 4px;
          padding: 28px;
          position: relative;
        }

        .about-text {
          font-family: 'Crimson Pro', serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #c8bca8;
          white-space: pre-line;
        }

        .copy-btn {
          position: absolute;
          top: 14px; right: 14px;
          background: transparent;
          border: 1px solid #3a2e1c;
          color: #7a6e60;
          font-family: 'Crimson Pro', serif;
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .copy-btn:hover { border-color: #c9a84c; color: #c9a84c; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .service-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid #2a2318;
          border-radius: 4px;
          padding: 22px 24px;
          transition: border-color 0.2s ease;
        }
        .service-card:hover { border-color: #4a3a20; }

        .service-icon { font-size: 1.4rem; margin-bottom: 10px; }

        .service-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #e0d4bc;
          margin-bottom: 8px;
        }

        .service-desc {
          font-family: 'Crimson Pro', serif;
          font-size: 0.92rem;
          line-height: 1.65;
          color: #7a6e60;
        }

        .skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-pill {
          font-family: 'Crimson Pro', serif;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          color: #9e8866;
          border: 1px solid #2a2318;
          padding: 5px 14px;
          border-radius: 2px;
          background: rgba(201,168,76,0.04);
        }

        .cta-block {
          background: linear-gradient(135deg, rgba(201,168,76,0.07), rgba(201,168,76,0.03));
          border: 1px solid #3a2e1c;
          border-radius: 4px;
          padding: 32px 28px;
          text-align: center;
        }

        .cta-headline {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #f0e8d4;
          margin-bottom: 10px;
        }

        .cta-sub {
          font-family: 'Crimson Pro', serif;
          font-size: 0.95rem;
          color: #7a6e60;
          line-height: 1.7;
        }

        .cta-gold {
          color: #c9a84c;
          font-weight: 600;
        }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="gold-rule" />
        <h1 className="name-block">
          Pamela<br />
          <span className="name-accent">Ayanokoji</span>
        </h1>
        <div className="title-badge">Virtual Executive Assistant · Admin Operations · Social Media</div>
        <p className="hook-text">
          "Results-focused Virtual Executive Assistant with 4 years of hands-on administrative experience —
          proven track record in managing complex government correspondence, securing overdue payments
          through strategic communication, and streamlining office workflows."
        </p>
        <div className="stats-row">
          {achievements.map((a) => (
            <div className="stat-item" key={a.label}>
              <div className="stat-number">{a.stat}</div>
              <div className="stat-label">{a.label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* ABOUT */}
      <div className="section">
        <div className="section-label">About</div>
        <div className="about-block">
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "Copied ✓" : "Copy"}
          </button>
          <p className="about-text">{aboutText}</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section">
        <div className="section-label">What I Support</div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className="section">
        <div className="section-label">Skills & Tools</div>
        <div className="skills-wrap">
          {skills.map((s) => (
            <span className="skill-pill" key={s}>{s}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section">
        <div className="cta-block">
          <div className="cta-headline">Ready to Stay Clear, Consistent & In Control?</div>
          <p className="cta-sub">
            Let's connect. Whether you need an executive right hand or a consistent content presence —<br />
            <span className="cta-gold">I help you show up organized, online, and ahead.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
