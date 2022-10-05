import joi from "joi";

export const singUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export const GymGoerSchema = joi.object({
    email: joi.string().email().required(),
    name: joi.string().required(),
    photo: joi.string().uri().required()
})

