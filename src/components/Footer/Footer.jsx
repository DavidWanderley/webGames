import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Blog Jogos - Dev</p>
      <a
        href="https://www.linkedin.com/in/dwanderley"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "15px" }}
      >
        <i className="fab fa-linkedin fa-2x social-links-footer"></i>
      </a>
      <a
        href="https://github.com/DavidWanderley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x social-links-footer"></i>
      </a>
    </footer>
  );
}
