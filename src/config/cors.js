module.exports = function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTINS,PUT,PATCH,DELETE')
    res.header('Accres-Control-Allow-Headers', 'Origin, X-Requested-With , Content-Type , Accept')
    next()
}