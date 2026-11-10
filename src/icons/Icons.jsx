import React from "react";

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function LinkedInIcon({ iconOnly = false }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/danilo-mercado-9316642aa/"
      className={`btn btn-soft ${iconOnly ? "btn-icon" : ""}`}
      aria-label={iconOnly ? "LinkedIn" : undefined}
    >
      <svg {...svgProps}>
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
      </svg>
      {!iconOnly && <span>LinkedIn</span>}
    </a>
  );
}

export function MailIcon() {
  return (
    <a href="mailto:danilomercado61@gmail.com" className="btn btn-soft">
      <svg {...svgProps}>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
      <span>Email</span>
    </a>
  );
}

export function GitHubIcon({ iconOnly = false }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/danilomercado"
      className={`btn btn-soft ${iconOnly ? "btn-icon" : ""}`}
      aria-label={iconOnly ? "GitHub" : undefined}
    >
      <svg {...svgProps}>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
      {!iconOnly && <span>GitHub</span>}
    </a>
  );
}

export function CVIcon({ className = "" }) {
  return (
    <svg {...svgProps} width="20" height="20" className={className}>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    </svg>
  );
}
