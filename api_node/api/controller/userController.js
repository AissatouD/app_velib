User = mongoose.model('Users');

exports.list_all_user = function(req, res){
    User.find({}, function(err, user){
        if(err){
            res.status(400);
            res.json({error:"erreur"});
        }
        res.status(200);
        res.json(user);
    })
};

exports.create_user = function(req, res){
    var new_user = new User(req.body);

    new_user.save(function(err, user){
        if(err){
            res.status(500);
            res.json({err: "erreur"})
        }
        res.status(200);
        res.json(user);
    })
};
