const express = require("express");
const exphbs = require("express-handlebars");
const homeRouter = require("./routes/index");
const app = express();

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
})

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
})