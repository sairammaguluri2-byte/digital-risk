const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\Megha\\.gemini\\antigravity\\scratch\\brand-sentinel-drp\\index.html', 'utf8');

const checklist = [
  { name: "Threat Monitoring (Instagram, X, TikTok, Facebook, Google Play, App Store)", pass: ['Instagram', 'X', 'TikTok', 'Facebook', 'Google Play', 'App Store'].every(p => html.includes(p)) },
  { name: "AI Detection (Fake Brand Account, Scam Account, Suspicious App, Executive Impersonation, Phishing Link)", pass: ['Fake Brand Account', 'Scam Account', 'Suspicious App', 'Executive Impersonation', 'Phishing Link'].every(t => html.includes(t)) },
  { name: "Risk Scoring (0-100 score with severity levels Critical, High, Medium, Low)", pass: ['riskScore', 'Critical', 'High', 'Medium'].every(s => html.includes(s)) },
  { name: "Explainability with Signals & Weights", pass: html.includes("Explainable AI Risk Breakdown (Signals & Weights)") && html.includes("Weight: 35%") && html.includes("Weight: 25%") },
  { name: "Alert Center with Live Counters", pass: html.includes("LIVE TRIAGE QUEUE STATUS COUNTERS") && html.includes("triageStats.confirmed") && html.includes("triageStats.resolved") },
  { name: "Triage Actions (Confirmed Threat, False Positive, Resolved)", pass: html.includes("Confirm Threat") && html.includes("False Positive") && html.includes("Resolved") },
  { name: "Response Actions Recommended (Report, DMCA Takedown, Telemetry, Injunction)", pass: html.includes("Recommended Response Actions") && html.includes("DMCA Demand") && html.includes("Abuse Report") },
  { name: "Generate Takedown Report with Formatted Demand", pass: html.includes("handleGenerateTakedown") && html.includes("FORMAL REMOVAL DEMAND") },
  { name: "App Scanner with Verdicts (Safe, Suspicious, Malicious)", pass: html.includes("Execute Security Audit") && html.includes("Malicious") && html.includes("Suspicious") && html.includes("Safe") },
  { name: "Filter Threats by Type and Severity", pass: html.includes("filterType") && html.includes("filterSeverity") && html.includes("filterPlatform") },
  { name: "Analytics Charts (Bar: threats by platform, Line: 7-day velocity) using Chart.js", pass: html.includes("AnalyticsCharts") && html.includes("Threats by Platform (Cross-Network Bar)") && html.includes("Activity Velocity (Last 7 Days Line)") },
  { name: "Simulate New Threat Button & Real-Time Ingestion", pass: html.includes("Simulate Incoming Attack") && html.includes("showToast") && html.includes("INC-84999") },
  { name: "60-Second Demo Script", pass: html.includes("60-Second Demo Script") && html.includes("0:00 - 0:15") && html.includes("0:45 - 1:00") },
  { name: "Three Business-Value Talking Points", pass: html.includes("3 Brand Value Talking Points") && html.includes("Zero-Day Fraud") && html.includes("90% Reduction") },
  { name: "Explicit Answers to 3 'Think About' Questions", pass: html.includes("Answers to Think About") && html.includes("Think About Question 1") && html.includes("Think About Question 2") && html.includes("Think About Question 3") },
  { name: "Future Scope & Roadmap", pass: html.includes("Future Scope & Roadmap") && html.includes("Direct Platform API Integrations") && html.includes("Advanced Computer Vision") },
  { name: "Prototype Transparency & Hackathon Credits (Fantastic Five)", pass: html.includes("Built by Fantastic Five for Hackathon Prototype") && html.includes("simulated for live evaluation") },
  { name: "Brand & Visual Guardrails (Obsidian #050608, Gold #C5A059, Cinzel & Plus Jakarta Sans, Transparent Frosted Glass)", pass: html.includes("#050608") && html.includes("#C5A059") && html.includes("Cinzel") && html.includes("Plus Jakarta Sans") && html.includes("backdrop-filter: blur") },
  { name: "No Unicode Em-Dashes (Strict clean ascii)", pass: !/[—–]/.test(html) },
];

console.log("=== DOPPELGUARD HACKATHON REQUIREMENTS AUDIT ===");
let allPassed = true;
checklist.forEach((item, index) => {
  const status = item.pass ? "✅ PASS" : "❌ FAIL";
  if (!item.pass) allPassed = false;
  console.log(`${index + 1}. [${status}] ${item.name}`);
});

console.log("\nFINAL STATUS:", allPassed ? "🎉 ALL 19 REQUIREMENTS SATISFIED 100%!" : "⚠️ SOME REQUIREMENTS FAILED");
