const Todo = require("../models/todoModel");


const postTodoData = async (req, res) => {
  const { completed, title } = req.body;
  const todo = await Todo.create({
    title, completed
  })
  if (todo) {
    const {_id, title, completed} = todo;
    res.status(201).json({
      _id, title, completed
    })
  } else {
    res.status(400)
    throw new Error("Invalid todo data");
  }
}

const getTodoData = async(req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
}

const changeTodoData = async (req, res) => {
  try {
    const { id, editedTitle, completed } = req.body;

    if (!id || !editedTitle) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const findRow = await Todo.findById(id);

    if (findRow) {
      findRow.title = editedTitle;
      findRow.completed = completed;
      const updatedRow = await findRow.save();

      if (updatedRow) {
        return res.status(200).json(updatedRow);
      } else {
        return res.status(500).json({ error: 'Failed to save changes' });
      }
    } else {
      return res.status(404).json({ error: 'Row not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const deleteTodoData = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedRow = await Todo.findByIdAndDelete(_id);
    if (deletedRow) {
      res.status(200).json(deletedRow);
    } else {
      res.status(404).json({ error: "Row not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete row" });
  }
};

const completeRow = async (req, res) => {
  try {
    const { _id, completed } = req.body;

    if (!_id) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const findRow = await Todo.findById(_id);

    if (findRow) {
      findRow.completed = completed;
      const updatedRow = await findRow.save();

      if (updatedRow) {
        return res.status(200).json(updatedRow);
      } else {
        return res.status(500).json({ error: 'Failed to save changes' });
      }
    } else {
      return res.status(404).json({ error: 'Row not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  postTodoData,
  getTodoData,
  changeTodoData,
  deleteTodoData,
  completeRow
}