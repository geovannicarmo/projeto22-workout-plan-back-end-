import joi from 'joi';

export const newExercisesSchema = joi.object({carga: joi.number().required(), nRepetitions: joi.number().required(), GymGoersId: joi.number().required(), nSeries:  joi.number().required(), ExercisesCategoryId: joi.number().required(), comments: joi.string().allow(''), program: joi.string(), break: joi.number().required()
});
