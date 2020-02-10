const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const { techs} = request.query;

        const techsArray = parseStringAsArray(techs)
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,//$in é um operator do mongo
            },
           /* location:{
                $near: {//encontrar valores perto,nesse caso para calcular a distância
                    $geometry:{
                        type: 'Point',
                        coordinate: [longitude, latitude],
                    },
                    //maxDistance: 10000,
                },
            },*/
        })

        return response.json({devs})
    }
}