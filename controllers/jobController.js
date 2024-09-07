const Job = require('../models/Job.js');

module.exports =  {
    createjob: async(req,res)=>{
const newJob = new Job(req.body);
try{
await newJob.save();
res.status(201).json({status:true, message: "Job Successfully!"})
}catch(e){
res.status(500).json(error);
}
    },

    createjob: async(req,res)=>{
const newJob = new Job(req.body);
try{
await newJob.save();
res.status(201).json({status:true, message: "Job Successfully!"})
}catch(e){
res.status(500).json(error);
}
    },
    updateJob: async(req,res)=>{
        const jobId = req.params.id;
        const updated =req.body;
        try{const updatedJob = await Job.findByIdandUpdate(jobId, updated,{new:true});
        if(!updatedJob){
            return res.status(404).json({status:false, message : "Job Not Found!"})
        }
        res.status(200).json({status:true, message: "Job Updated Successfully!"})
    
    
    } catch(e){
        res.status(500).json(e);
    }
    },
    deleteJob: async(req,res)=>{
const jobId = req.params.id;


try{
    await Job.findByIdandDelete(jobId);
    res.status(200).json({status:true, message: "Job Deleted Successfully!"})
}catch(e){
    res.status(500).json(e);
}


    },
    getJob:  async(req,res)=>{ const jobId =  req.params.id;
        try{
const job = await Job.findById({_id:jobId},{createdAt:0,updatedAt0,__V:0});
res.status(200).json(job);
        }catch(e){
res.status(500).json(e);
        }
     },

     
};