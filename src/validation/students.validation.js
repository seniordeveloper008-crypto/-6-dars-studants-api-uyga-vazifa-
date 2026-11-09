import Joi from "joi";

const creatStudentSchema = Joi.object({
  fullNmae: Joi.string().trim().min(3).max(50).required().messages({
    "string.min": "Ism kamida 3 ta belgidan iborat bo'lsin",
    "string.max": "Ism kupi bilan 50 ta belgidan kup bulmasigi kerak",
    "string.required": "Ism Maydon bo'sh bulmasligi kerak",
    "string.empty":" Ism Maydon bush bulmasligi shart"
  }),
  email: Joi.string().email().lowercase().trim().required().messages({
    "string.email": "emailingiz notugri formatda",
    "string.emtpy": "emailingiz kichik harflar bilan yozilishi kerak",
    "any.required":"Email kirtishningiz shart"
  }),
  password: Joi.string()
    .pattern(new RegExp("(?=.*[A-Za-z])(?=.*\\d)"))
    .min(14)
    .max(60)
    .required()
    .messages({
      "string.any": "Parolda kamida bitta harf va raqam bo'lsin",
      "string.min": "Parol kamida 14 ta belgidan iborat bo'lishi shart",
      "string.max": "parol kui bilan 60 ta belgidan kam bo'lishi shart ",
      "string.empty":"Parol kiritishingiz shart"
    }),
  age: Joi.number().integer().min(14).max(60).required().messages({
    "number.min": "Yosh kamida 14 yoshdan kichik bulmasligi shart",
    "number.max": "Yosh ko'pi bilan 60 yoshdan yuqori bulmasligi shart",
    "number.required": "Yoshingizni kiritishingiz shart",
  }),
  course: Joi.string()
    .valid("frontend", "backend", "design")
    .required()
    .lowercase()
    .messages({
      "any.only": "Kurs faqat: frontend, backend, mobile, design",
      "string.empty": "Kurs bo'sh bo'lmasligi kerak",
      "any.required": "Kurs kiritish majburiy",
    }),
});

const updateStudentSchema = Joi.object({
  fullNmae: Joi.string().trim().min(3).max(50).messages({
    "string.min": "Ism kamida 3 ta belgidan iborat bo'lsin",
    "string.max": "Ism kupi bilan 50 ta belgidan kup bulmasigi kerak",
    "string.required": " Ism Maydon bo'sh bulmasligi kerak",
    "string.empty":" Ism Maydon bo'sh bo'lmasligi shart"
  }),
  email: Joi.string().email().lowercase().trim().messages({
    "email.wrong": "emailingiz notugri formatda",
    "email.lowercase": "emailingiz kichik harflar bilan yozilishi kerak",
  }),
  password: Joi.string().min(14).max(60).messages({
    "string.any": "Parolda kamida bitta harf va raqam bo'lsin",
    "string.min": "Parol kamida 14 ta belgidan iborat bo'lishi shart",
    "string.max": "parol kui bilan 60 ta belgidan kam bo'lishi shart ",
  }),
  age: Joi.number().integer().min(14).max(60).messages({
    "number.min": "Yosh kamida 14 yoshdan kichik bulmasligi shart",
    "number.max": "Yosh ko'pi bilan 60 yoshdan yuqori bulmasligi shart",
    "number.required": "Yoshingizni kiritishingiz shart",
  }),
  course: Joi.string().valid("frontend", "backend", "design").lowercase().messages({
    "any.only": "Kurs faqat: frontend, backend, mobile, design",
    "string.empty": "Kurs bo'sh bo'lmasligi kerak",
    "any.required": "Kurs kiritish majburiy",
  }),
});
const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().messages({
    "number.base": "ID raqam bo'lishi kerak",
    "number.integer": "ID butun son bo'lishi kerak",
    "number.positive": "ID musbat son bo'lishi kerak",
    "any.required": "ID kiritilishi shart",
  }),
});

export { creatStudentSchema, updateStudentSchema, idParamSchema };
