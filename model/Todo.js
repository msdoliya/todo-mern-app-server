const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
},
done: {
    type: Boolean,
    default: false
},
createdAt: {
    type: Date,
    default: Date.now
}
}
);

//Compile
const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };
