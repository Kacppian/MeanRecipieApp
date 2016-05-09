 express = require("express"),
     bodyParser = require("body-parser"),
     mongoose = require("mongoose"),
     app = express(),
     Schema = mongoose.Schema;

 var mySchema = new Schema({
     name: String,
     recipie: String,
     image: String
 });

 app.use(express.static(__dirname + '/'));
 mongoose.connect("mongodb://localhost:27017/recipies", function(err) {
     if (err) throw err;
     var reciepeDat = mongoose.model('reciepeDat', mySchema);
     var multer = require('multer');
     var storage = multer.diskStorage({
         destination: function(req, file, cb) {
             cb(null, './uploads/')
         },
         filename: function(req, file, cb) {
             cb(null, file.originalname);
         }
     });
     var upload = multer({
         storage: storage
     });



     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({
         extended: true
     }));
     app.get('/', function(req, res) {
         res.sendFile(__dirname + '/views/');
     });
     app.post('/multer', upload.single('file'), function(req, res, next) {
         console.log(req.body.name);
         console.log(req.body.prep);
         console.log(req.file.path);
         reciepeDat.create({
             name: req.body.name,
             recipie: req.body.prep,
             image: req.file.path
         }, function(err) {
             if (err) console.log(err);
         });
         res.json({
             success: true
         });
     });

     app.get('/dataDick', function(req, res) {
         reciepeDat.find({}, function(err, docs) {
             if (err) console.log(err);

             res.json(docs);
         });
     });

 });
 app.listen(8080);
 console.log("Connected....");
