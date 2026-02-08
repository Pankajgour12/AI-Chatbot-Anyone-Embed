import mongoose, { Schema } from "mongoose"


interface ISetting{
    ownerId:string
    businessName:string
    supportEmail:string
    knowledge:string
}

const settingSchema = new Schema<ISetting>({
    ownerId:{
        type:String,
        required:true
    },
    businessName:{
        type:String,
        required:true
    },
    supportEmail:{
        type:String,
        required:true
    },
    knowledge:{
        type:String,
        required:true
    }


},
    
    {timestamps:true})


   const Settings = mongoose.models.Settings || mongoose.model("Settings",settingSchema)

   export default Settings