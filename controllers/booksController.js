const db=require("../models")

module.exports= {
    findAll:function(req,res){
        db.book
        .find(req.query)
        .sort({date:-1})
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(404).json(err));
    },
    findbyid:function(req,res){
        db.book
        .find(req.query)
        .sort({date:-1})
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(404).json(err));
    },
    create: function(req, res) {
        console.log("Made it here")
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(404).json(err));
      },
      update: function(req, res) {
        db.Book
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(404).json(err));
      },
      remove: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(404).json(err));
      }
    };
    

