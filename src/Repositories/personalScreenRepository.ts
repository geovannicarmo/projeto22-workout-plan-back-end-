import client from "../database/prisma";

async function findAllGymGoers(){

    return await client.gymGoers.findMany()
}



const personalScreenRepository = {
    findAllGymGoers
} 

export default personalScreenRepository