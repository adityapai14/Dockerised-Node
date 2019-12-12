var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://mongoDB/test');
var itemSchema = new Schema({
	item: String
});
var Todo = mongoose.model('Todo',itemSchema);

var urlencodedParser = bodyParser.urlencoded({extended:false}); 

module.exports = function(app){
	app.get('/todo',function(req,res){
		Todo.find({},function(err,data){
			if(err) throw err;	
			res.render('todo',{todos:data});
		});
	});
	app.post('/todo',bodyParser.json(), function(req,res){
		console.log(req.body);
		newItem = Todo(req.body);
		newItem.save(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});
	app.delete('/todo/:item',function(req,res){
		Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});
};
