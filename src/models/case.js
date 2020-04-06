const {Schema,model}= require('mongoose');
const caseSchema= new Schema({
    // victim's information
    name: { type: String, default: 'Desconocido' },
    age : {type: Number},
    date_start : {type: Date, default: Date.now()},
    address : {type: String, default: 'Desconocido'},
    sector : {type: String, default: 'Desconocido'},
    city : {type: String, default: 'Desconocido'},
    province : {type: String, default: 'Desconocido'},
    country : {type: String, default: 'Desconocido'},
    // victim contact's information
    contact_phone : {type: String, default: 'Desconocido'},
    contact_name : {type: String, default: 'Desconocido'},
    contact_relation : {type: String, default: 'Desconocido'},
    contact_address : {type: String, default: 'Desconocido'},
    //image information
    createrId:{type:String},
    filename: {type: String},
    path: {type: String},
    originalname : {type: String},
    mimetype: {type: String},
    size: {type: Number},
    created_at: {type: Date, default: Date.now()},
    //case information
    symptoms: {type: String},
});
module.exports= model('Case', caseSchema);