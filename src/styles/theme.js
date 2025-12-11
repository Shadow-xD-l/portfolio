export const theme = {
  colors: {
    primary: "#FFFFFF", // Pure Clean White
    secondary: "#F5F5F7", // Apple Light Grey
    textPrimary: "#1D1D1F", // Apple Charcoal
    textSecondary: "#86868B", // Apple Grey
    accent: "#000000", // Stark Black for premium contrast (or very subtle blue)
    accentHover: "#333333", 
    white: "#FFFFFF",
    dark: "#1D1D1F",
    glass: "rgba(255, 255, 255, 0.8)", // Clean Glass
    shadow: "rgba(0, 0, 0, 0.04)", // Very subtle shadow
  },
  fonts: {
    main: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    mono: "'SF Mono', 'Fira Code', Consolas, 'Roboto Mono', monospace",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    spring: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};
