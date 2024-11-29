const express = require('express');
const port = 9999;
const path = require('path');
const app = express();

app.set("view engine", 'ejs');

app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const validateAbout = (req, res, next) =>{
    if(req.query.email=="hrd9153@gmail.com"){
        next();
    }else{
        return res.redirect('/');
    }
}
const validateContact = (req, res, next) =>{
    if(req.query.pass==9153){
        next();
    }else{
        return res.redirect('/');
    }
}


app.get('/', (req, res)=>{
    return res.render('home');
})
app.get('/about',validateAbout, (req, res)=>{
    return res.render('about');
})
app.get('/contact',validateContact, (req, res)=>{
    return res.render('contact');
})

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`);
})