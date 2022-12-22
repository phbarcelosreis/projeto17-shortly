import Joi from "joi";

export const signInSchema = Joi.object({
  email: Joi.string().min(3).email().required(),
  password: Joi.string().min(3).required(),
});

export const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.string().required(),
  });