import { signInSchema, signUpSchema } from "../models/model";

export default function checkSignUp(req, res, next) {

    const user = req.body

    const validation = signUpSchema.validate(user, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  
    next();

}

export default function checkSignIn(req, res, next) {

    const user = req.body

    const validation = signInSchema.validate(user, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  
    next();

}