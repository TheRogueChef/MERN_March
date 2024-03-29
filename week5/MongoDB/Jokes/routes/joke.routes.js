const JokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/allJokes', JokeController.allJokes)
    app.get('/api/oneJoke/:id', JokeController.oneJoke)
    app.post('/api/postJoke', JokeController.createJoke)
    app.put('/api/updateJoke/:id', JokeController.updateJoke)
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke)
}