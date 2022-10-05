import personalScreenRepository from '../Repositories/personalScreenRepository'

async function getAllGymGoers(){
   
    return await personalScreenRepository.findAllGymGoers()
}



const personalScreenService = {
    getAllGymGoers
}

export default personalScreenService