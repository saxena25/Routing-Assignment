import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/users",
    label: "USERS",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/Course",
    label: "COURSE",
  },
  {
    to: "/Learn",
    label: "LEARN",
  },
  {
    to: "/Fees",
    label: "FEES",
  },
];

export default function Navbar() {
  return (
    <div className="navbar">
      {links?.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
