module.exports={
    success: (res,message,data)=>{
        return res.status(200).json({
            code :200,
            status:true,
            message:message,
            body:data
        })
    },

    error:(res,data)=>{
        return res.status(400).json({
            status:false,
            message:"error",
            data:data
        })
    }


}