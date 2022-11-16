import { Form, FormGroup } from "reactstrap";

const CheckoutForm = () => {
  return (
    <Form className="billing__form">
      <FormGroup className="form__group">
        <input type="text" placeholder="Votre Nom" />
      </FormGroup>
      <FormGroup className="form__group">
        <input type="text" placeholder="Votre Prénom" />
      </FormGroup>
      <FormGroup className="form__group">
        <input type="email" placeholder="Votre E-mail" />
      </FormGroup>
      <FormGroup className="form__group">
        <input type="text" placeholder="Votre Adresse" />
      </FormGroup>
      <FormGroup className="form__group">
        <input type="text" placeholder="Votre Code Postal" />
      </FormGroup>
      <FormGroup className="form__group">
        <input type="text" placeholder="Votre Pays" />
      </FormGroup>
      <FormGroup className="form__group">
        <input type="number" placeholder="Votre Téléphone" />
      </FormGroup>
    </Form>
  );
};

export default CheckoutForm;
