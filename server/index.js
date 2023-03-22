const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'projekt'
  });
  
app.post('/api/insert', (req, res) => {
    const id = req.body.id;
    const nr_laboranta = req.body.nr_laboranta;
    const ilosc = req.body.ilosc;
    const miejsce = req.body.miejsce;
    const nazwa = req.body.nazwa;
    const nr_inwentarzowy = req.body.nr_inwentarzowy;
    const uzytkownik = req.body.uzytkownik;
    const rodzaj = req.body.rodzaj;
    const typ = req.body.typ;
    const wybrakowanie = req.body.wybrakowanie;

    const sqlInsert = "INSERT INTO inwentarze (id, nr_laboranta, ilosc, miejsce, nazwa, nr_inwentarzowy, uzytkownik, rodzaj, typ, wybrakowanie) VALUES (?,?,?,?,?,?,?,?,?,?)"; 
    db.query(sqlInsert, [id, nr_laboranta, ilosc, miejsce, nazwa, nr_inwentarzowy, uzytkownik, rodzaj, typ, wybrakowanie], (err, result) => {
        console.log(err);
    });
});

app.post('/api/insert/users', (req, res) => {
    const id_uzytkownika = req.body.id_uzytkownika;
    const imie = req.body.imie;
    const nazwisko = req.body.nazwisko;

    const sqlInsert = "INSERT INTO uzytkownicy (id_uzytkownika, imie, nazwisko) VALUES (?,?,?)"; 
    db.query(sqlInsert, [id_uzytkownika, imie, nazwisko], (err, result) => {
        console.log(err);
    });
});


app.post('/api/insert/laborants', (req, res) => {
    const nr_laborant = req.body.nr_laborant;
    const sqlInsert = "INSERT INTO laboranci (nr_laborant) VALUES (?)"; 
    db.query(sqlInsert, [nr_laborant], (err, result) => {
        console.log(err);
    });
});

app.post('/api/insert/locations', (req, res) => {
    const miejsce = req.body.miejsce;
    const sqlInsert = "INSERT INTO miejsca (miejsce) VALUES (?)"; 
    db.query(sqlInsert, [miejsce], (err, result) => {
        console.log(err);
    });
});

app.post('/api/insert/sorts', (req, res) => {
    const rodzaj = req.body.rodzaj;
    const sqlInsert = "INSERT INTO rodzaje (rodzaj) VALUES (?)"; 
    db.query(sqlInsert, [rodzaj], (err, result) => {
        console.log(err);
    });
});

app.post('/api/insert/types', (req, res) => {
    const typ = req.body.typ;
    const sqlInsert = "INSERT INTO typy (typ) VALUES (?)"; 
    db.query(sqlInsert, [typ], (err, result) => {
        console.log(err);
    });
});

app.get('/api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});


app.get('/api/get/users', (req, res) => {
    const sqlInsert = "SELECT * FROM uzytkownicy";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/laborants', (req, res) => {
    const sqlInsert = "SELECT * FROM laboranci";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/locations', (req, res) => {
    const sqlInsert = "SELECT * FROM miejsca";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/sorts', (req, res) => {
    const sqlInsert = "SELECT * FROM rodzaje";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/types', (req, res) => {
    const sqlInsert = "SELECT * FROM typy";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

//sortowanie
app.get('/api/get/id', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY id DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/id2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY id ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/nr_laboranta', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY nr_laboranta DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/nr_laboranta2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY nr_laboranta ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/ilosc', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY ilosc DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/ilosc2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY ilosc ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/miejsce', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY miejsce DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/miejsce2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY miejsce ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/nazwa', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY nazwa DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/nazwa2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY nazwa ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/nr_inwentarzowy', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY nr_inwentarzowy DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/nr_inwentarzowy2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY nr_inwentarzowy ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/uzytkownik', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY uzytkownik DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/uzytkownik2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY uzytkownik ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/rodzaj', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY rodzaj DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/rodzaj2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY rodzaj ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/typ', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY typ DESC";
    db3.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/typ2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY typ ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/wybrakowanie', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY wybrakowanie DESC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/api/get/wybrakowanie2', (req, res) => {
    const sqlInsert = "SELECT * FROM inwentarze ORDER BY wybrakowanie ASC";
    db.query(sqlInsert, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});


app.put('/api/update', (req, res) => {
    const id = req.body.id;
    const nr_laboranta = req.body.nr_laboranta;
    const ilosc = req.body.ilosc;
    const miejsce = req.body.miejsce;
    const nazwa = req.body.nazwa;
    const nr_inwentarzowy = req.body.nr_inwentarzowy;
    const uzytkownik = req.body.uzytkownik;
    const rodzaj = req.body.rodzaj;
    const typ = req.body.typ;
    const wybrakowanie = req.body.wybrakowanie;
    db.query("UPDATE inwentarze SET nr_laboranta = ?, ilosc = ?, miejsce = ?, nazwa = ?, nr_inwentarzowy = ?, uzytkownik = ?, rodzaj = ?, typ = ?, wybrakowanie = ? WHERE id = ?", 
    [nr_laboranta, ilosc, miejsce, nazwa, nr_inwentarzowy, uzytkownik, rodzaj, typ, wybrakowanie, id], (err, result) => {
       if (err) {
        console.log(err);
       } 
       else {
        res.send(result);
       }
    });
});

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM inwentarze WHERE id = ?", id, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Serwer działa.");
});