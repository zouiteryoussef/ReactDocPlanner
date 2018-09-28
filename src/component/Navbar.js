import "../styles.css";
const Navbar = () => {
  return (
    <div className="docplanner-header">
      <div className="logo-docplanner">
        <img src="#" width="200px" alt="docplanner Group" />
      </div>
      <nav className="navbar">
        <a href="#" className="active-link">
          About us
        </a>
        <a href="#">Career</a>
        <a href="#">Departement</a>
      </nav>
    </div>
  );
};

export default Navbar;
