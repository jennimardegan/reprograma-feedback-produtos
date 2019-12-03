const mongoose = require('mongoose');

const FeedbacksSchema = new mongoose.Schema({
    feedback: { type: String, required: true },
    nota: { type: Number, required: true },
    numPedido: { type: Number },
    cliente: [{ _id:false, nome: String, dataNascimento: Date, cidade: String }],
    produto: [{ _id:false, tipo: String, modelo: String }]
}, {
    versionKey: false 
})

const Feedbacks = mongoose.model('Feedbacks', FeedbacksSchema); 

module.exports = Feedbacks;