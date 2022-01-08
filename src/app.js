const express=require("express");
const app= express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;

app.set("view engine", "hbs");
templates_path=path.join(__dirname, "../templates/views");
app.set("views", templates_path)

partials_path=path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);


pathname=path.join(__dirname, "../public");
app.use(express.static(pathname));




app.get("/", (req, res)=>
{
     res.render("index");
})
app.get("/index", (req, res)=>
{
     res.render("index");
})
app.get("/about", (req, res)=>
{
     res.render("about");
})
app.get("/weather", (req, res)=>
{
     res.render("weather");
})
 app.get("*", (req, res)=>
{
// console.log("errorpage");
     res.render("404error.hbs", {
          errorMsg:"Opps! Page not found",
     });
})






app.listen(port, ()=>
{
    console.log(`listening to port ${port}`);
})