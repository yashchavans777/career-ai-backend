const asyncHandler = (requesthandler)=>{
    return(res,req,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((error)=>{next(err)})
    }
}
export {asyncHandler}