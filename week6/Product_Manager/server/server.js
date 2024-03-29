const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));


const productRoutes = require('./routes/product.route');

productRoutes(app);


app.listen(8000, () => {
    console.log(`Listening on port 8000`) 
})
