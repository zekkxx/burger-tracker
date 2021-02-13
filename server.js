let express = require("express");
let exphbs = require("express-handlebars");
const db = require("./models");

const PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(require('./routes'));

db.sequelize.sync({/*force:true*/}).then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on: http://localhost:"+PORT);
    })
})
