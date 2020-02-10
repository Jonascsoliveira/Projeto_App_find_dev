module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()) 
    // remover espaços em branco após separar por vírgula
}