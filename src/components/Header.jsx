import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="logo">Hospital Management App</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/wards">Wards</NavLink>
      </nav>
    </>
  );
}
