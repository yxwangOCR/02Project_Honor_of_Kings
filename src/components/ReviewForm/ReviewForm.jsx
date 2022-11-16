import RatingStars from "../RatingStars/RatingStars.jsx";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "./ReviewForm.css";
import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: "",
      userReview: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    {
      data.userName.length !== 0 && data.userReview.length !== 0
        ? toast.success("Évaluation envoyée, merci") && reset()
        : console.log("error");
    }
  };

  return (
    <div className='review__form'>
      <h6>Ajouter une évaluation</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form__group'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Votre nom'
            className='input__name'
            {...register("userName", { required: true })}
          />
          {errors.userName && <span>Ce champ est obligatoire</span>}
        </div>

        <RatingStars />

        <div className='form__group'>
          <textarea
            placeholder='Laissez votre évaluation sur ce produit'
            className='input__review'
            {...register("userReview", { required: true })}
          />
          {errors.userReview && <span>Ce champ est obligatoire</span>}
        </div>
        <motion.button
          whileTap={{ scale: 1.2 }}
          type='submit'
          className='button'>
          Envoyer
        </motion.button>
      </form>
    </div>
  );
};

export default ReviewForm;
