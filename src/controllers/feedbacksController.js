const Feedbacks = require('../model/feedbacks')


//Trazer do banco TODOS os feedbacks
exports.getTodos = (req, res) => {
  Feedbacks.find(function (err, feedbacks) {
    if (err) res.status(500).send(err);
    res.status(200).send(feedbacks)
  })
}


//Trazer do banco os feedbacks por _id (Object ID do Mongo)
exports.getById = (req, res) => {
   const feedbackId = req.params.id

   Feedbacks.findById(feedbackId, function (err, feedback) {
     if (err) return res.status(500).send(err);

     if (!feedback) {
       return res.status(200).send({ message: `ID não localizado: ${feedbackId}`});
     }
     res.status(200).send(feedback)
   })
  }


  //Trazer do banco os feedbacks por sentimento
  exports.getSentimento = (req, res) => {
    const sentimentos = req.params.sentimento;

    Feedbacks.find(function (err, feedbacks) {
      if (err) res.status(500).send(err);
      const FeedbacksComSentimento = feedbacks.filter(feedbacks => feedbacks.sentimentos.find(sent => sent == sentimentos))
      res.status(200).send(FeedbacksComSentimento)
    })
  }


//POST para incluir uma feedback no banco
exports.post = (req, res) => { 
  let feedback = new Feedbacks(req.body);

  feedback.save(function (err) {
    if (err) res.status(500).send(err);

    return res.status(201).send(feedback);
})}


//PUT para alterar um cadastro de feedback existente no banco
exports.updateFeedback = (req, res) => {
  Feedbacks.updateOne(
    {_id: req.params.id},
    {$set: req.body},
    {upsert: true},
    function(err) {
      if (err) return res.status(500).send({message: err});
      res.status(204).send({message: "Feedback atualizado com sucesso!"}) 
    }
  )
}


//DELETE para excluir um cadastro de feedback existente no banco
exports.deleteFeedback = (req, res) => { 
  const idFeedback = req.params.id;

  Feedbacks.findById(idFeedback, function (err, feedback) {
    if (err) res.status(500).send(err);

    if (!feedback) {
    res.status(200).send({ mensage: "Feedback não localizado!"});
  }

  feedback.remove(function(err) {
    if (!err) {
      res.status(204).send({message: "Feedback removido com sucesso!"})
    }
  })

})}