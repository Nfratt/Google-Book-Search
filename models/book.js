const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const bookDB=new Schema({
    title:{
        type:String,
    required:true
},
author:{
    type:Array,
    required:true
},
description:{
    type:String,
    required:true
},
link:{
    type:String,
    required:true
},
image:{
    type:String,
required:true
}
});
const Book=mongoose.model("Book",bookDB);
module.export =Book;