import joi from "joi";

export const singUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export const singInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})

