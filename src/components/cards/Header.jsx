import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import female from "../../assets/female.png";
import male from "../../assets/male.png";

function Header({data}) {
  const { name, job, gender } = data;
  const dataImage = gender === "male" ? male : female;
  return (
    <div
      className="headerCard"
      style={{
        background: `url(${dataImage}) no-repeat center/cover, linear-gradient(#1a1a1a3a, #1a1a1a3a)`,
      }}
    >
      <div className="socialMedia">
        <span>
          <FaGithub className="icon" />
          <FaLinkedin className="icon" />
          <FaTwitter className="icon" />
        </span>
        <span>
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
        </span>
      </div>
      <div className="nameInfo">
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
}
export default Header;
