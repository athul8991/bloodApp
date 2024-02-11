const Blood = require('../models/dataModel')
module.exports.allData = (req,res)=>{
    console.log('data');
    Blood.find().then(data=>{
        if(data.length <=0){
            return res.status(200).json({message:'no_data'})
        }
        return res.status(200).json({message:'success',data:data})
}).catch(err=>{
    return res.status(400).json({message:'error'})
})

}


module.exports.deleteData = (req,res)=>{
    const {id} = req.query;
    if(id){
    Blood.findByIdAndDelete(id).then(info=>{
        return res.status(200).json({message:'success'})
    })
}else{
return res.status(400).json({message:'no_delete'})
}
}

module.exports.filterData =async(req,res)=>{

    const formData = req.body;
    console.log(formData);
    await Object.keys(formData).forEach(key=>{
        if(formData[key]==='null' || formData[key] ===null){
            delete formData[key]
        }
    });
    console.log(formData);
    Blood.find(formData).then(data=>{
        return res.status(200).json({message:'success',data:data})  
    }).catch(err=>{
        console.log(err);
        return res.status(400).json({message:'error'})
    })
}
