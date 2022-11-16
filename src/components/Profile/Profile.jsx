import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../../src/firebase.config.js";
import { toast } from "react-toastify";
import useToggle from "../../custom-hooks/useToggle";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [toggle, setToggle] = useToggle(false);
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Vous êtes déconnecté");
        navigate("/accueil");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log("logout");
  };
  return (
    <div className="profile">
      <motion.img
        whileTap={{ scale: 1.2 }}
        src={currentUser ? currentUser.photoURL : userIcon}
        alt="user-icon"
        onClick={setToggle}
      />
      {toggle && (
        <span className="profile__actions" onClick={setToggle}>
          {currentUser ? (
            <span onClick={logout}>Déconnexion</span>
          ) : (
            <div className="profile__action__link">
              <Link to="/signup">S'inscrire</Link>
              <Link to="/login">Connexion</Link>
            </div>
          )}
        </span>
      )}
    </div>
  );
};

export default Profile;
