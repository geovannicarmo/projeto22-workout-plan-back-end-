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


const personalScreenRepository = {
    findAllGymGoers,
    newExercises,
    findGymGoerById,
    findCaregory
    
} 

export default personalScreenRepository
