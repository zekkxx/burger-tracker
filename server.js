let express = require("express");
let exphbs = require("express-handlebars");

let myBurgers=[
    {
        name: "Kieran's Special Flameburger",
        devoured: false
    },
    {
        name: "Fried Chicken McZeke",
        devoured: false
    },
    {
        name: "Penn Lake's Roast Beef",
        devoured: false
    },
    {
        name: "Triple Decker Pounder",
        devoured: false
    },
    {
        name: "French Toast Super Burger",
        devoured: true
    }
]

const PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.get("/", (req, res)=>{
    res.render("index", { burgers: myBurgers })
})

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:"+PORT);
})
