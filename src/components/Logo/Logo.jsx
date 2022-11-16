
import { useNavigate } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/accueil");
  return (
    <div className="logo">
      <h1 onClick={navigateToHome}>Honor of Kings</h1>
    </div>
  );
};

export default Logo;
