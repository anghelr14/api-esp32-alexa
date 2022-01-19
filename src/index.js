const express = require('express');
const app = express();


/*===== Settings =====*/
app.set('port', process.env.PORT || 9000);


/*===== Middlewares =====*/
app.use(express.json());

/*===== Routes =====*/
app.get('/', (req, res) => {
    res.send('Bienveido a la api para Alexa')
});
app.use('/api/users',require('./routes/users'));




/*===== Starting server =====*/
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});