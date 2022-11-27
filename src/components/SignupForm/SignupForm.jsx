import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../../../src/firebase.config";
import { db } from "../../../src/firebase.config";
import { storage } from "../../../src/firebase.config";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    //setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });

            // save user data to firestore:
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      //setLoading(false);
      toast.success("S'inscrire avec succès");
      navigate("/login");
    } catch (error) {
      //setLoading(false);
      toast.error("Error!");
      //setLoading(false);
    }
  };

  return (
    <Form className="auth__form" onSubmit={handleSignup}>
      <FormGroup className="form__group">
        <input
          type="text"
          placeholder="Votre nom d'utilisateur"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormGroup>
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
      <FormGroup className="form__group avatar__wrapper">
        <label htmlFor="avatar">Choisissez votre avatar :</label>
        <input
          id="avatar"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </FormGroup>
      <motion.button
        type="submit"
        whileTap={{ scale: 1.1 }}
        className="button auth__btn"
      >
        Créer un compte
      </motion.button>
      <p>
        Vous avez déjà un compte ? <Link to="/login">Connectez-vous!</Link>
      </p>
    </Form>
  );
};

export default SignupForm;
