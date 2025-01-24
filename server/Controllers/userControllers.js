const projectmodels = require("../Models/projectdata");

const addprojects = async(req,res)=>{

    const cre = await projectmodels.create(req.body);
    res.status(200).json({
        success:true,
        cre
    })
}

const viewprojects = async(req,res)=>{
     await projectmodels.find()
     .then(user=>res.json(user))
     .catch(err=>res.json(err))
}

const deleteprojects = async(req,res)=>{
    
    const id = req.params.id;
    await projectmodels.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))

  
}

module.exports = {addprojects,viewprojects,deleteprojects};