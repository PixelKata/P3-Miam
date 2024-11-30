const express = require("express");
const joi = require("joi");

const router = express.Router();

const authActions = require("../controllers/authActions");

const auth = require("../services/auth");

const messages = {
  "string.base": "Le champ {{#label}} doit être une chaîne de caractères",
  "string.empty": "Le champ {{#label}} ne peut pas être vide",
  "string.min":
    "Le champ {{#label}} doit contenir au moins {{#limit}} caractères",
  "string.email": "Le champ {{#label}} doit être une adresse email valide",
  "any.required": "Le champ {{#label}} est requis",
  "string.pattern.base":
    "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial [@$!%*?&]",
  "number.min": "Le champ {{#label}} doit être supérieur ou égal à {{#limit}}",
  "number.max": "Le champ {{#label}} doit être inférieur ou égal à {{#limit}}",
};

const loginSchema = joi
  .object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  })
  .messages(messages);

const registerSchema = joi
  .object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(8)
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required(),
    confirmPassword: joi
      .string()
      .min(8)
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required(),
    username: joi.string().min(3).max(50).required(),
    fullname: joi.string().min(3).max(50).required(),
    civility: joi.number().integer().min(0).max(3).required(),
  })
  .messages(messages);

const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    error: {
      language: "french",
    },
  });
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  return next();
};

router.post(
  "/login",
  validateRequest(loginSchema),
  auth.verifyPassword,
  auth.createToken,
  authActions.login
);
router.post(
  "/register",
  validateRequest(registerSchema),
  auth.hashPassword,
  authActions.register
);
router.get("/", authActions.checkAuth);
router.delete("/", authActions.logout);

module.exports = router;
