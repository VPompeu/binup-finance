const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipes', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

const RecipeSchema = new mongoose.Schema({
 title: String,
 ingredients: String,
 directions: String,
 user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const UserSchema = new mongoose.Schema({
 username: String,
 password: String,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
 const user = new User(req.body);
 await user.save();
 const token = jwt.sign({ _id: user._id }, 'secret');
 res.send({ token });
});

app.post('/login', async (req, res) => {
 const user = await User.findOne({ username: req.body.username });
 if (!user) return res.status(400).send('User not found');

 if (user.password !== req.body.password) return res.status(400).send('Password incorrect');

 const token = jwt.sign({ _id: user._id }, 'secret');
 res.send({ token });
});

app.post('/recipes', async (req, res) => {
 const token = req.header('Authorization').replace('Bearer ', '');
 const decoded = jwt.verify(token, 'secret');
 req.body.user = decoded._id;
 const recipe = new Recipe(req.body);
 await recipe.save();
 res.send(recipe);
});

app.get('/recipes', async (req, res) => {
 const token = req.header('Authorization').replace('Bearer ', '');
 const decoded = jwt.verify(token, 'secret');
 const recipes = await Recipe.find({ user: decoded._id });
 res.send(recipes);
});

app.listen(3000, () => console.log('Server running on port 3000'));