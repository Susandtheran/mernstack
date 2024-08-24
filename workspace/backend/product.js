const express = require('express');
const mongoose = require('mongoose');
const app =express();
app.use(express.json())
// let std=[];
mongoose.connect("mongodb://localhost:27017/school")
.then(() =>{
    console.log("DB Connected")
})
.catch((err) => {
    console.log(err)
})
const stdSchema =new mongoose.Schema({
    student: {
        required:true,
        type:String
    },
    section:String
})
const stdModel = mongoose.model('Std',stdSchema);
app.post('/std',async (req, res) =>
{  
    const {student, section}=req.body;
    try{
        const newStd= new stdModel({student, section});
    await newStd.save();
    res.status(201).json(newStd);
}catch(error){
    console.log(error);
    res.status(500).json({message:error.message});
}
});
app.get('/std', async (req, res) => {
    try {
        const std = await stdModel.find();
        res.json(std);
}   catch (error) {
    console.log(error)
    res.status(500).json({message: error.message});
}
    res.json(std);
})
app.put('/std/:id', async (req,res) =>{
    try{
        const {student, section} = reg.body;
        const id = req.params.id;
        const updateStd = await stdModel.findByIdAndUpdate(
            id,
            {student , section},
            { new: true }
        )
        if(!updateStd){
            return res.status(404).json({message: "std not found"})
        }
        res.json(updateStd)
    }catch (error){
        console.log(error)
        res.status(500).json({message: error.message}); 
    }
app.delete('?std/:id', async (req, res) => {
    try{
        const id =req.params.id;
        await stdModel.findByIdAndDelete(id);
        res.status(204).end();
    } catch(error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }

})    
})
const port = 3000;
app.listen(port, () =>{
    console.log("server is listening to port "+port);
})

