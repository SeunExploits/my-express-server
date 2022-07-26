const express = require ("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1> hello world </h1>");
  });

  app.get("/contact", function(req, res){
    res.send("contact me at:seun7674@gmail.com");
    });

  app.get("/about", function(req, res){
    res.send("my name is Seun Exploits");
    });

    app.get("/hobbies", function(req, res){
      res.send("<ul> <li>reading, basketball, soccer </li> </ul>");
      });


app.listen(3000, function(){
  console.log("server started on port 3000");
});
