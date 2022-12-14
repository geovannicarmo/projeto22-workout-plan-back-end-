import joi from 'joi';

export const singUpSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required(),
	typeUser: joi.string().required()
});

export const GymGoerSchema = joi.object({
	email: joi.string().email().required(),
	name: joi.string().required(),
	photo: joi.string().uri().required(),
	typeUser: joi.string().required(),
});


export const UpdatePassSchemas = joi.object({
	passWord: joi.string().required(),
	passWordConfirm: joi.required().valid(joi.ref('passWord'))
});


