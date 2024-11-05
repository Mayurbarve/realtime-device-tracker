const express = require("express");

const path = require("path")
const http = require("http")

const app = express();
// const PORT = 8000;


//Boiler plate of socket.io also connect with server
const socketio = require("socket.io");
const { log } = require("console");

const server = http.createServer(app);
const io = socketio(server);

//setup of ejs
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) =>{
    socket.on("send-location", (data) => {
        io.emit("receive-location", {id: socket.id, ...data});
        console.log("Connected");
    })
    
    
    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id)
    })
});

app.get("/", (req, res) => {
    res.render("index");
})

// server.listen(PORT, () => console.log(`Server Started on Port No. ${PORT}`))
server.listen(3000);