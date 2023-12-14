import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>© 2024 </li>
        <li>
          <p>
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/denys-kovtun/"
              target="_blank"
              className="name"
              rel="noopener noreferrer"
            >
              Denys Kovtun
            </a>
          </p>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;