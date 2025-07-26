const express = require('express');
const router = express.Router();
const todo = require('../models/todo');
const home = require('../controller');

// Routes
router.get('/', home);

router.post('/add-task', async (req, res) => {
  try {
    const { title } = req.body;
    await todo.create({ title });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error adding task');
  }
});

router.get('/edit-task/:id', async (req,res) => {
     try {
        
        const locals = {
            title: "Edit Post",
        };
            
       const data = await todo.findOne({_id: req.params.id});

       res.render('partials/edit-task', {
        locals,
        data,
        // layout: adminLayout
       });

     } catch (error) {
                console.log("Where is the err")
            }
    });

router.put('/edit-task/:id', async (req, res) => {
  try {
    await todo.findByIdAndUpdate(req.params.id, { title: req.body.title });
    console.log("Task updated successfully");
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error editing task');
  }
});

router.delete('/delete-task/:id', async (req, res) => {
  try {
    await todo.deleteOne({ _id: req.params.id });
    res.redirect('/');
  } catch (error) {
    console.log("Delete Error:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
    
module.exports = router;
