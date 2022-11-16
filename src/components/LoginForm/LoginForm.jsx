import { Form, FormGroup } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLoading] = useState(false);

  const Login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Connexion réussie");
      navigate("/checkout");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <Form className="auth__form" onSubmit={Login}>
      <FormGroup className="form__group">
        <input
          type="email"
          placeholder="Votre E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="form__group">
        <input
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <motion.button
        type="submit"
        whileTap={{ scale: 1.1 }}
        className="button auth__btn"
      >
        Connexion
      </motion.button>
      <p>
        Vous n'avez pas de compte ? <Link to="/signup">Créez un compte!</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
