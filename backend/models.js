module.exports=function(req,res,next){
    console.log("Currently subscriber is on the that page",req.originalUrl)
    next()
}
