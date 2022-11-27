import React from "react";
import "./404.css";
import BgVideo from "../../assets/bg.mp4";

const Page404 = () => {
  return (
    <div className='Page_404'>
      <h1>Bienvenue sur le site web de "Honor of Kings"</h1>
      <h3>Ceci est une page 404</h3>
      <p>Vous pouvez:</p>
      <p>
        Cliquer sur <a href='accueil'>Accueil</a> pour accéder à la page
        d'accueil du site web
      </p>
      <br />
      <p>
        Cliquer sur <a href='boutique'>Boutique</a> pour accéder à la page des
        articles du site Web.
      </p>
      <br />
      <p>
        Cliquer sur <a href='panier'>Panier</a> pour en savoir plus sur les
        produits que vous choisissez.
      </p>
      <div className='video'>
        <video src={BgVideo} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Page404;
