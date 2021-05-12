const express = require('express');
const cors = require("cors");

const userRoute = require("./routes/user.routes");

module.exports = app => {
    
    // Configuration

    app.use(cors({ origin: "http://localhost:8081" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


    // Home route

    app.get("/", (req, res) => {
        //throw new Error();
        res.json({ message: "Welcome to judoclub application." });
    });


    // req.params.name => paramètre dans la route => /posts/:name/tags
    // req.query.name => paramètre dans l'url => "localhost:8000/posts/tags?name=pouet"
    // req.body.name => paramètre dans le corps de la requête => POST "localhost:8000/posts/tags" { "name" : "pouet" }

    // app.post("/posts/tags/:pouetpouet/:coucou", (req, res) => {
    //     res.json({ 
    //         params : req.params,
    //         query : req.query,
    //         body : req.body,
    //     });
    // });

    // Models Routes

    app.use("/api/users", userRoute);


    // Error Routes

    app.use((req, res, next) => {
        const error = new Error("Not found");
        error.status = 404;
        next(error);
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message || "No detail"
            }
        });
    });

};