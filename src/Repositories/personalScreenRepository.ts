import client from "../database/prisma";

async function findAllGymGoers(){

    return await client.gymGoers.findMany()
}

async function newExercises(dataNewExercises: any){
console.log(dataNewExercises.exes)
    const opa = await client.exercises.createMany({
        data: dataNewExercises
    })

     console.log(opa)
}

async function findGymGoerById(id: number){

    return await client.gymGoers.findUnique({
        where: {
            id,
          },
          select:{
            name:true,
            photo:true,
            Exercises: {
                
                include:{
                    
                    category:true
                }
            },
               
                
          }
        })
    
}


async function findCaregory(){

    return await client.exercisesCategory.findMany()
}

async function deleteExercisesRepository(id: number){

    return await client.exercises.delete({
        where: {
            id
          }
    })
}


async function findExerciseById(id: number){

    return await client.exercises.findUnique({
        where: {
            id
          }
        })
    }


const personalScreenRepository = {
    findAllGymGoers,
    newExercises,
    findGymGoerById,
    findCaregory,
    deleteExercisesRepository,
    findExerciseById
    
} 

export default personalScreenRepository
