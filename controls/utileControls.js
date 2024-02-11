const Blood = require('../models/dataModel');
const stateData  = require('../controls/stateData');
const crypto = require('crypto')
module.exports.addData = (req,res)=>{

    const {firstname,lastname,bloodgroup,dob,phone,email,dist,block,pin,volunteer,address} = req.body;

    Blood.findOne({phone:phone}).then(data=>{
        if(data){
            return res.status(400).json({message:'exists'});
        }

        crypto.randomBytes(5,(err,buffer)=>{
            const createdate = new Date();
            if(err){
              return  res.status(400).json({message:'not_saved'})
            }

            const id = buffer.readUInt32BE(0).toString(32).slice(0,6);

            const newData = new Blood ({
                firstname:firstname,
                lastname:lastname,
                dob:dob,
                email:email,
                dist:dist,
                block:block,
                bloodgroup:bloodgroup,
                phone:phone,
                userid:id,
                pin:pin,
                volunteer:volunteer,
                createdate:createdate,
                address:address                

            });

            newData.save().then(info=>{
                return  res.status(200).json({message:'success'})
            }).catch(err=>{
                console.log(err);
                return  res.status(400).json({message:'error'})
            })
    
        })
        
    }).catch(err=>{
        console.log(err);
        return  res.status(400).json({message:'error'})
    })

   

}


module.exports.stateData = (req,res)=>{
    res.status(200).json({message:'success',data:stateData.data})
}