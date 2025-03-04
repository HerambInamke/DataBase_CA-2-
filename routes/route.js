const express = require('express');
const gymworkout = require('../models/workout');

const router = express.Router();
app.get('/workout/:id',(req, res) => {
    const id = req.params.id;
    gymworkout.findById(id)
    .then(workout => res.json(workout))
    .catch(err => res.status(404).json({ message: 'Workout not found' }));
})

app.post('/workout/create',(req, res) => {
    const newWorkout = new gymworkout({
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    });
})


app.delete('/workout/:id',(req, res) => {
    const id = req.params.id;
    gymworkout.findByIdAndDelete(id)
    .then(workout => res.json({ message: 'Workout deleted successfully' }))
    .catch(err => res.status(404).json({ message: 'Workout not found' }));
})

app.put('/workout/:id',(req, res) => {
    const id = req.params.id;
    gymworkout.findByIdAndUpdate(id, req.body, { new: true })
    .then(workout => res.json(workout))
    .catch(err => res.status(404).json({ message: 'Workout not found' }));
});

module.exports = router;

