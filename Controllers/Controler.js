const UserDetails = require("../Models/models"); //impporting mode

exports.getall = async (req, res, next) => {
  //getall
  try {
    const Doc = await UserDetails.find({}); //for find all data
    console.log("controllers docs");
    return res.status(200).json({ data: Doc }); //if render give respose 200
  } catch (err) {
    return res.status(500).json({
      command: "Error in  get all Conytrollers",
      message: err.message,
    }); //400 client error
  }
};

exports.create = async (req, res, next) => {
  //create
  try {
    const { name, email } = req.body;
    const Doc = await UserDetails.create({ name, email });
    console.log(Doc);
    return res.status(200).json({ data: Doc }); //if render give respose
  } catch (err) {
    return res
      .status(500)
      .json({ command: "Error in create Conytrollers", message: err });
  }
};

exports.getbyid = async (req, res, next) => {
  try {
    const { id } = req.body;
    const Doc = await UserDetails.findById(id);
    if (!Doc) {
      return res.status(404).json({ message: " User not found" });
    }
    return res.status(200).json({ data: Doc });
  } catch (err) {
    return res.status(500).json({ command: "Error in getbyid", message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateDetails = {};
    if (name) updateDetails.name = name;
    if (email) updateDetails.email = email;
    const Doc = await UserDetails.findByIdAndUpdate(id, updateDetails, {
      new: true,
    });
    if (!Doc) {
      return res.status(400).json({ error: "Upadte id is not found" });
    }
    return res.status(200).json({ message: "Updated Succesfully", data: Doc });
  } catch (err) {
    return res.status(500).json({ command: "Error in update", message: err });
  }
};

exports.Remove=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const Doc=await UserDetails.findByIdAndDelete(id)
        if(!Doc){
            return res.status(404).json({message:"User not found" })
        }
        return res.json({mesage:"Delted Succesfully",data:Doc})

        
    }catch(err){
        return res.status(500).json({message:err});
    }
}
