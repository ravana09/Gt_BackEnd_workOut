const detailsScheme = require("../Models/detailsModels");

exports.getall = async (req, res, next) => {
  try {
    const details = await detailsScheme.find({});
    return res.status(200).json({ data: details });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const createdDetails = await detailsScheme.create({ name, email, phone });

    if (!createdDetails) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ data: createdDetails });
  } catch (err) {
    return res
      .status(500)
      .json({ command: "Eroor in creating", message: err.message });
  }
};

exports.getbyid = async (req, res, next) => {
  try {
    const { id } = req.body;
    const detailsByid = await detailsScheme.findById(id);
    if (!detailsByid) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res
      .status(200)
      .json({ message: "Poll got by id", data: detailsByid });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {  name, email, phone } = req.body;
    const updatedObject = {};

    if (name) updatedObject.name = name;

    if (email) updatedObject.email = email;

    if (phone) updatedObject.phone = phone;

    const updatedDetials = await detailsScheme.findByIdAndUpdate(
      id,
      updatedObject,
      { new: true }
    );
    if (!updatedDetials) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    return res
      .status(200)
      .json({ message: "updated succesfully", data: updatedDetials });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports. Remove=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const deletedDetails=await detailsScheme.findByIdAndDelete(id);
        if(!deletedDetails){
            return res.status(400).json({message:"Something went wrong"});
        }
        return res.json({message:"deleted succesfully",data:deletedDetails});
    }catch(err){
        return res.status(500).json({message:err.message});
    }
}
