import * as mongoose from 'mongoose'

export interface IWOP extends mongoose.Document{
    name:string
    grade:number
    isMale:boolean
}

const iwopSchema = new mongoose.Schema({
    name : {type:String, required:true},
    grade: {type: Number, required:true},
    isMale: {type:Boolean, required:true}
})

export const IWOPModel = mongoose.model<IWOP>('IWOP',iwopSchema)