import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./style.css";

// --- ATOMS ---
const Icon = ({ children }) => <span>{children}</span>;

const Button = ({ children, variant = "primary", ...props }) => {
  const className = variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Heading = ({ children }) => <h2>{children}</h2>;

const Text = ({ children }) => <p>{children}</p>;

// --- MOLECULES ---
const Tab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`tab ${active ? "tab-active" : "tab-inactive"}`}
  >
    {label}
  </button>
);

const SmallCard = ({ title, subtitle, color = "green" }) => {
  return (
    <div className={`card ${color}`}>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
};

// --- ORGANISMS ---
const TabsSection = ({ tabs, activeIndex, setActiveIndex }) => {
  return (
    <div className="tabs">
      {tabs.map((t, i) => (
        <Tab
          key={t.id}
          label={t.label}
          active={i === activeIndex}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
};

const ClaimsModule = ({ data }) => {
  return (
    <div>
      {data.map((c, i) => (
        <SmallCard key={i} title={c.title} subtitle={c.subtitle} color={c.color} />
      ))}
    </div>
  );
};

// --- PAGE / PANEL COMPONENT ---
export default function RightSidePanel() {
  const tabs = [
    { id: "claims", label: "Claims Details" },
    { id: "notes", label: "Notes" },
    { id: "history", label: "History" },
  ];

  const sampleData = {
    claims: [
      { title: "Claim #12345", subtitle: "Submitted: 2025-01-22 — Status: Open", color: "green" },
      { title: "Claim #12346", subtitle: "Submitted: 2025-02-02 — Status: Pending", color: "pink" },
      { title: "Claim #12347", subtitle: "Submitted: 2024-12-12 — Status: Rejected", color: "red" },
    ],
    notes: [
      { title: "Call with client", subtitle: "Remember to ask about previous treatment", color: "gray" },
      { title: "Submit docs", subtitle: "Upload within 48 hours", color: "pink" },
    ],
    history: [
      { title: "Policy updated", subtitle: "2024-10-10 — System", color: "gray" },
    ],
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-container">
      {/* Left placeholder (main content) */}
      <div className="main-content">
        <div className="h-[600px] rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-gray-400">
          Main content placeholder
        </div>
      </div>

      {/* Right side panel */}
      <aside className="right-panel">
        <div className=" d-flex panel-header">
        <ArrowLeft />
          <h2> Claims Overview</h2>
        </div>

        {/* Tabs area */}
        <TabsSection tabs={tabs} activeIndex={activeTab} setActiveIndex={setActiveTab} />

        {/* Scrollable content for the active tab */}
        <div className="panel-content">
          {activeTab === 0 && <ClaimsModule data={sampleData.claims} />}
          {activeTab === 1 && <ClaimsModule data={sampleData.notes} />}
          {activeTab === 2 && <ClaimsModule data={sampleData.history} />}

          {/* Additional modules / small cards under the tab */}
          <div className="related">
            <h5>Related Items</h5>
            <SmallCard title="Policy #A-9876" subtitle="Effective: 2023-05-01" color="green" />
            <SmallCard title="Invoice #445" subtitle="Due: 2025-03-10" color="pink" />
          </div>
        </div>

        {/* Footer with previous / next buttons */}
        <div className="panel-footer">
          <div className="btn-group">
            <Button variant="secondary" onClick={() => alert("Previous")}>
              <Icon>
                <ArrowLeft />
              </Icon>
              Previous
            </Button>

            <Button variant="primary" onClick={() => alert("Next")}>
              Next
              <Icon>
                <ArrowRight />
              </Icon>
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
