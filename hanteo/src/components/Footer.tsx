import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "24px 16px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        color: "#333",
        fontSize: "14px",
        // marginTop: "40px",
      }}
    >
      <div style={{ marginBottom: "8px" }}>
        <a
          href="https://junyoungkr-github.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: "16px",
            textDecoration: "none",
            color: "#007acc",
          }}
        >
          블로그
        </a>
        <a
          href="https://github.com/JunYoungKr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#24292e" }}
        >
          GitHub
        </a>
      </div>
      <div>© 2025 JunYoung Kim</div>
    </footer>
  );
};

export default Footer;
