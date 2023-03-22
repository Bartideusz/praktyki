import './App.css';
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import {useReactToPrint} from 'react-to-print';

function App() {

  const [id, setId] = useState("");
  const [nr_laboranta, setNrLaboranta] = useState("");
  const [ilosc, setIlosc] = useState("");
  const [miejsce, setMiejsce] = useState("");
  const [nazwa, setNazwa] = useState("");
  const [nr_inwentarzowy, setNrInwentarzowy] = useState("");
  const [uzytkownik, setUzytkownik] = useState("");
  const [rodzaj, setRodzaj] = useState("");
  const [typ, setTyp] = useState("");
  const [wybrakowanie, setWybrakowanie] = useState("");

  const [e_nr_laboranta, setENrLaboranta] = useState("");
  const [e_ilosc, setEIlosc] = useState("");
  const [e_miejsce, setEMiejsce] = useState("");
  const [e_nazwa, setENazwa] = useState("");
  const [e_nr_inwentarzowy, setENrInwentarzowy] = useState("");
  const [e_uzytkownik, setEUzytkownik] = useState("");
  const [e_rodzaj, setERodzaj] = useState("");
  const [e_typ, setETyp] = useState("");
  const [e_wybrakowanie, setEWybrakowanie] = useState("");

  const [id_uzytkownika, setIdUzytkownika] = useState("");
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");

  const [nr_laborant, setNrLaborant] = useState("");
  const [dodane_miejsce, setDodaneMiejsce] = useState("");
  const [dodany_rodzaj, setDodanyRodzaj] = useState("");
  const [dodany_typ, setDodanyTyp] = useState("");

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [laborants, setLaborants] = useState([]);
  const [locations, setLocations] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [types, setTypes] = useState([]);

  const addInwentarz = () => {
    alert("Dodano do bazy.");
    Axios.post('http://localhost:3001/api/insert', {
      id: id,
      nr_laboranta: nr_laboranta,
      ilosc: ilosc,
      miejsce: miejsce,
      nazwa: nazwa,
      nr_inwentarzowy: nr_inwentarzowy,
      uzytkownik: uzytkownik,
      rodzaj: rodzaj,
      typ: typ,
      wybrakowanie: wybrakowanie,
    }).then(() => {
    });
    window.location.reload();
  };

  const getInwentarz = () => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(()=>{
    fetch("http://localhost:3001/api/get/users").then((data)=> data.json()).then((val)=>setUsers(val))
  }, []);

  useEffect(()=>{
    fetch("http://localhost:3001/api/get/laborants").then((data)=> data.json()).then((val)=>setLaborants(val))
  }, []);

  useEffect(()=>{
    fetch("http://localhost:3001/api/get/locations").then((data)=> data.json()).then((val)=>setLocations(val))
  }, []);

  useEffect(()=>{
    fetch("http://localhost:3001/api/get/sorts").then((data)=> data.json()).then((val)=>setSorts(val))
  }, []);

  useEffect(()=>{
    fetch("http://localhost:3001/api/get/types").then((data)=> data.json()).then((val)=>setTypes(val))
  }, []);

  const updateInwentarz = () => {
    const id = document.getElementById("editInput").value;
    Axios.put('http://localhost:3001/api/update', {nr_laboranta: e_nr_laboranta, ilosc: e_ilosc, miejsce: e_miejsce, nazwa: e_nazwa,
    nr_inwentarzowy: e_nr_inwentarzowy, uzytkownik: e_uzytkownik, rodzaj: e_rodzaj, typ: e_typ, wybrakowanie: e_wybrakowanie, id: id}).then((response) => {
      setPosts(posts.map((val) => {
        return val.id == id ? {id: val.id, nr_laboranta: e_nr_laboranta, ilosc: e_ilosc, miejsce: e_miejsce, nazwa: e_nazwa, nr_inwentarzowy: e_nr_inwentarzowy
        ,uzytkownik: e_uzytkownik, rodzaj: e_rodzaj, typ: e_typ, wybrakowanie: e_wybrakowanie}: val;
      }));
    });
    console.log(nr_laboranta, ilosc, miejsce, nazwa, nr_inwentarzowy, uzytkownik, rodzaj, typ, wybrakowanie);
  }

  const deleteInwentarz = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`).then((response) => {
    setPosts(posts.filter((val) => {
      return val.id !== id;
    }))
    });
  }

  const addUzytkownik = () => {
    var uzytk = imie + "." + nazwisko;
    alert("Dodano do bazy użytkownika "+ uzytk);
    Axios.post('http://localhost:3001/api/insert/users', {
      id_uzytkownika: id_uzytkownika,
      imie: imie,
      nazwisko: nazwisko,
    }).then(() => {
    });
    window.location.reload();
  };

  const addLaborant = () => {
    var nr = nr_laborant;
    alert("Dodano do bazy laboranta o numerze: " + nr);
    Axios.post('http://localhost:3001/api/insert/laborants', {
      nr_laborant: nr_laborant,
    }).then(() => {
    });
    window.location.reload();
  };

  const addMiejsce = () => {
    var miejsce = dodane_miejsce;
    alert("Dodano do bazy miejsce: " + miejsce);
    Axios.post('http://localhost:3001/api/insert/locations', {
      miejsce: miejsce,
    }).then(() => {
    });
    window.location.reload();
  };

  const addRodzaj = () => {
    var rodzaj = dodany_rodzaj;
    alert("Dodano do bazy rodzaj: " + rodzaj);
    Axios.post('http://localhost:3001/api/insert/sorts', {
      rodzaj: rodzaj,
    }).then(() => {
    });
    window.location.reload();
  };

  const addTyp = () => {
    var typ = dodany_typ;
    alert("Dodano do bazy typ: " + typ);
    Axios.post('http://localhost:3001/api/insert/types', {
      typ: typ,
    }).then(() => {
    });
    window.location.reload();
  };

  const getFiltrById = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortById");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByLaborant = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByLaborant");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByIlosc = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByIlosc");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByMiejsce = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByMiejsce");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByNazwa = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByNazwa");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByInwentarz = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByInwentarz");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByUzytkownik = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByUzytkownik");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[6];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByRodzaj = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByRodzaj");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[7];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByTyp = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByTyp");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[8];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const getFiltrByWybrakowanie = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortByWybrakowanie");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[9];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

    const pdf = useRef();
    const generatePDF = useReactToPrint({
    content: () => pdf.current,
    documentTitle: "Wykaz ewidencji materiałów Katedry Informatyki",
    onAfterPrint: () => console.log("Values Inserted to PDF")
    });

    const delfrompdf = () => {
      document.getElementById("delfrompdf").style.display = "none";
      document.getElementById("delfrompdf2").style.display = "none";
      document.querySelector(".bar").style.gridTemplateColumns = "8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw";
      const nodeList = document.querySelectorAll(".delfrompdf3");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = "none";
      }
      
  //   const nodeList = document.querySelectorAll(".delfrompdf");
  //   for (let i = 0; i < nodeList.length; i++) {
  //     nodeList[i].style.visibility = "hidden";
  // }
    }

    const pdf2 = () => {
      delfrompdf();
      generatePDF();
    }

//SORTOWANIE
  const sortId = () => {
    Axios.get('http://localhost:3001/api/get/id').then((response) => {
      setPosts(response.data);
    });
  }

  const sortId2 = () => {
    Axios.get('http://localhost:3001/api/get/id2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortNrLaboranta = () => {
    Axios.get('http://localhost:3001/api/get/nr_laboranta').then((response) => {
      setPosts(response.data);
    });
  }

  const sortNrLaboranta2 = () => {
    Axios.get('http://localhost:3001/api/get/nr_laboranta2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortIlosc = () => {
    Axios.get('http://localhost:3001/api/get/ilosc').then((response) => {
      setPosts(response.data);
    });
  }

  const sortIlosc2 = () => {
    Axios.get('http://localhost:3001/api/get/ilosc2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortNazwa = () => {
    Axios.get('http://localhost:3001/api/get/nazwa').then((response) => {
      setPosts(response.data);
    });
  }

  const sortNazwa2 = () => {
    Axios.get('http://localhost:3001/api/get/nazwa2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortMiejsce = () => {
    Axios.get('http://localhost:3001/api/get/miejsce').then((response) => {
      setPosts(response.data);
    });
  }

  const sortMiejsce2 = () => {
    Axios.get('http://localhost:3001/api/get/miejsce2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortNrInwentarzowy = () => {
    Axios.get('http://localhost:3001/api/get/nr_inwentarzowy').then((response) => {
      setPosts(response.data);
    });
  }

  const sortNrInwentarzowy2 = () => {
    Axios.get('http://localhost:3001/api/get/nr_inwentarzowy2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortUzytkownik = () => {
    Axios.get('http://localhost:3001/api/get/uzytkownik').then((response) => {
      setPosts(response.data);
    });
  }

  const sortUzytkownik2 = () => {
    Axios.get('http://localhost:3001/api/get/uzytkownik2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortRodzaj = () => {
    Axios.get('http://localhost:3001/api/get/rodzaj').then((response) => {
      setPosts(response.data);
    });
  }

  const sortRodzaj2 = () => {
    Axios.get('http://localhost:3001/api/get/rodzaj2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortTyp = () => {
    Axios.get('http://localhost:3001/api/get/typ').then((response) => {
      setPosts(response.data);
    });
  }

  const sortTyp2 = () => {
    Axios.get('http://localhost:3001/api/get/typ2').then((response) => {
      setPosts(response.data);
    });
  }

  const sortWybrakowanie = () => {
    Axios.get('http://localhost:3001/api/get/wybrakowanie').then((response) => {
      setPosts(response.data);
    });
  }

  const sortWybrakowanie2 = () => {
    Axios.get('http://localhost:3001/api/get/wybrakowanie2').then((response) => {
      setPosts(response.data);
    });
  }

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }
  
  const openForm2 = () => {
    document.getElementById("myForm2").style.display = "block";
  }

  const openForm3 = () => {
    document.getElementById("myForm3").style.display = "block";
  }

  const openForm4 = () => {
    document.getElementById("myForm4").style.display = "block";
  }

  const openForm5 = () => {
    document.getElementById("myForm5").style.display = "block";
  }

  const openFilterForm = () => {
    document.getElementById("filterForm").style.display = "block";
  }

  const editForm = (id) => {
    document.getElementById("editForm").style.display = "block";
    const editInput = document.getElementById("editInput");
    const nr_laboranta = document.getElementById("e_nr_laboranta");
    const ilosc = document.getElementById("e_ilosc");
    const miejsce = document.getElementById("e_miejsce");
    const nazwa = document.getElementById("e_nazwa");
    const nr_inwentarzowy = document.getElementById("e_nr_inwentarzowy");
    const uzytkownik = document.getElementById("e_uzytkownik");
    const rodzaj = document.getElementById("e_rodzaj");
    const typ = document.getElementById("e_typ");
    const wybrakowanie = document.getElementById("e_wybrakowanie");

    nr_laboranta.value = document.getElementById(id).querySelectorAll("td")[1].innerText;
    ilosc.value = document.getElementById(id).querySelectorAll("td")[2].innerText;
    miejsce.value = document.getElementById(id).querySelectorAll("td")[3].innerText;
    nazwa.value = document.getElementById(id).querySelectorAll("td")[4].innerText;
    nr_inwentarzowy.value = document.getElementById(id).querySelectorAll("td")[5].innerText;
    uzytkownik.value = document.getElementById(id).querySelectorAll("td")[6].innerText;
    rodzaj.value = document.getElementById(id).querySelectorAll("td")[7].innerText;
    typ.value = document.getElementById(id).querySelectorAll("td")[8].innerText;
    wybrakowanie.value = document.getElementById(id).querySelectorAll("td")[9].innerText;
    editInput.value = document.getElementById(id).querySelectorAll("td")[0].innerText;
  }

  const openFormSortById = () => {
    document.getElementById("sortId").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByLaborant = () => {
    document.getElementById("sortLaborant").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByIlosc = () => {
    document.getElementById("sortIlosc").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByMiejsce = () => {
    document.getElementById("sortMiejsce").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByNazwa = () => {
    document.getElementById("sortNazwa").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByInwentarz = () => {
    document.getElementById("sortInwentarz").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByUzytkownik = () => {
    document.getElementById("sortUzytkownik").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByRodzaj = () => {
    document.getElementById("sortRodzaj").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByTyp = () => {
    document.getElementById("sortTyp").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const openFormSortByWybrakowanie = () => {
    document.getElementById("sortWybrakowanie").style.display = "block";
    document.getElementById("filterForm").style.display = "none";
  }

  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm2").style.display = "none";
    document.getElementById("myForm3").style.display = "none";
    document.getElementById("myForm4").style.display = "none";
    document.getElementById("myForm5").style.display = "none";
    document.getElementById("filterForm").style.display = "none";
    document.getElementById("editForm").style.display = "none";
    document.getElementById("sortId").style.display = "none";
    document.getElementById("sortLaborant").style.display = "none";
    document.getElementById("sortIlosc").style.display = "none";
    document.getElementById("sortMiejsce").style.display = "none";
    document.getElementById("sortNazwa").style.display = "none";
    document.getElementById("sortInwentarz").style.display = "none";
    document.getElementById("sortUzytkownik").style.display = "none";
    document.getElementById("sortRodzaj").style.display = "none";
    document.getElementById("sortTyp").style.display = "none";
    document.getElementById("sortWybrakowanie").style.display = "none";
  }

  const funkcja = () => {
    addInwentarz();
    getInwentarz();
  }

  return (
  <div className = "kontener" onLoad = {getInwentarz}>
    <div className="banner">
          <a href="#">
              <img src='./logo.png' alt="Logo" className="logo"/>
          </a>
          <h1>Wykaz ewidencyjny materiałów Katedry Informatyki</h1>
    </div>

    <div class="form-popup" id="myForm">
      <div class="form-container">
        <h1>Dodaj laboranta</h1>
          <label for="nr_laborant"><b>Nr laboranta:</b></label>
          <input type="number" placeholder="Wpisz nr laboranta..." name="nr_laborant"  onChange={(e) => setNrLaborant(e.target.value)}/>
          <button type="submit" class="btn any-button" onClick={addLaborant}>Dodaj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="myForm2">
      <div class="form-container">
        <h1>Dodaj użytkownika</h1>
          <label for="imie"><b>Imię</b></label>
          <input type="text" placeholder="Wpisz imię..." name="imie"  onChange={(e) => setImie(e.target.value)}/>
          <label for="nazwisko"><b>Nazwisko</b></label>
          <input type="text" placeholder="Wpisz nazwisko..." name="nazwisko"  onChange={(e) => setNazwisko(e.target.value)}/>
          <button type="submit" class="btn any-button" onClick={addUzytkownik}>Dodaj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="myForm3">
      <form action="" class="form-container">
        <h1>Dodaj miejsce</h1>
          <label for="dodane_miejsce"><b>Miejsce:</b></label>
          <input type="text" placeholder="Wpisz miejsce..." name="dodane_miejsce"  onChange={(e) => setDodaneMiejsce(e.target.value)}/>
          <button type="submit" class="btn any-button" onClick = {addMiejsce}>Dodaj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </form>
    </div>

    <div class="form-popup" id="myForm4">
      <form action="" class="form-container">
        <h1>Dodaj rodzaj</h1>
          <label for="dodany_rodzaj"><b>Rodzaj:</b></label>
          <input type="text" placeholder="Wpisz rodzaj..." name="dodany_rodzaj"  onChange={(e) => setDodanyRodzaj(e.target.value)}/>
          <button type="submit" class="btn any-button" onClick = {addRodzaj}>Dodaj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </form>
    </div>

    <div class="form-popup" id="myForm5">
      <form action="" class="form-container">
        <h1>Dodaj typ</h1>
          <label for="dodany_typ"><b>Typ:</b></label>
          <input type="text" placeholder="Wpisz typ..." name="dodany_typ"  onChange={(e) => setDodanyTyp(e.target.value)}/>
          <button type="submit" class="btn any-button" onClick = {addTyp}>Dodaj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </form>
    </div>

    <div class="form-popup" id="filterForm">
      <div class="form-container">
        <h1>Filtruj</h1>
          <button class="btn any-button" onClick = {openFormSortById}>Filtruj po ID</button>
          <button class="btn any-button" onClick = {openFormSortByLaborant}>Filtruj po nr laboranta</button>
          <button class="btn any-button" onClick = {openFormSortByIlosc}>Filtruj po ilości</button>
          <button class="btn any-button" onClick = {openFormSortByMiejsce}>Filtruj po miejscu</button>
          <button class="btn any-button" onClick = {openFormSortByNazwa}>Filtruj po nazwie</button>
          <button class="btn any-button" onClick = {openFormSortByInwentarz}>Filtruj po nr inwentarzowym</button>
          <button class="btn any-button" onClick = {openFormSortByUzytkownik} >Filtruj po użytkowniku</button>
          <button class="btn any-button" onClick = {openFormSortByRodzaj}>Filtruj po rodzaju</button>
          <button class="btn any-button" onClick = {openFormSortByTyp}>Filtruj po typie</button>
          <button class="btn any-button" onClick = {openFormSortByWybrakowanie}>Filtruj po wybrakowaniu</button><br></br><br></br>
          <button type="button any-button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="editForm">
      <div class="form-container">
        <h1>Edytuj</h1>
        <label>ID</label>
        <input readOnly type = "text" id = "editInput"></input>

        <label htmlFor="e_nr_laboranta">Nr Laboranta: </label>
        <select name = "e_nr_laboranta" id = "e_nr_laboranta" onChange = {(e) => {
        setENrLaboranta(e.target.value);
        }}>
        <option></option>        
        {
          laborants.map((val, key)=><option key={key}>{val.nr_laborant}</option>)
        }
        </select><br></br>

        <label htmlFor="e_ilosc">Ilość:</label><br></br>
        <input type="number" name="e_ilosc" id="e_ilosc" onChange={(e) => setEIlosc(e.target.value)} /><br></br>

        <label htmlFor="e_miejsce">Miejsce: </label>
        <select name = "e_miejsce" id = "e_miejsce" onChange = {(e) => {
        setEMiejsce(e.target.value);
        }}>
        <option></option>        
        {
          locations.map((val, key)=><option key={key}>{val.miejsce}</option>)
        }
        </select><br></br>

        <label htmlFor="e_nazwa">Nazwa: </label>
        <input type="text" name="e_nazwa" id="e_nazwa" onChange={(e) => setENazwa(e.target.value)} /><br></br>

        <label htmlFor="e_nr_inwentarzowy">Nr Inw.: </label>
        <input type="text" name="e_nr_inwentarzowy" id="e_nr_inwentarzowy" onChange={(e) => setENrInwentarzowy(e.target.value)} /><br></br>

        <label htmlFor="e_uzytkownik">Użytkownik: </label>
        <select name="e_uzytkownik" id="e_uzytkownik" onChange = {(e) => {
        setEUzytkownik(e.target.value)}}> 
        <option></option>   
        {
          users.map((val, key)=><option key={key}>{val.Imie}.{val.Nazwisko}</option>)
        }
        </select><br></br>

        <label htmlFor="e_rodzaj">Rodzaj: </label>
        <select name = "e_rodzaj" id = "e_rodzaj" onChange = {(e) => {
        setERodzaj(e.target.value);
        }}>
        <option></option>
        <option>Elektronika</option>
        <option>Mebel</option>
        {
          sorts.map((val, key)=><option key={key}>{val.rodzaj}</option>)
        }
        </select><br></br>

        <label htmlFor="e_typ">Typ: </label>
        <select name = "e_typ" id = "e_typ" onChange = {(e) => {
        setETyp(e.target.value);
        }}>
        <option></option>
        <option>Stanowy</option>
        <option>Bezstanowy</option>
        {
          types.map((val, key)=><option key={key}>{val.typ}</option>)
        }
        </select><br></br>

        <label htmlFor="e_wybrakowanie">Wybrakowanie: </label>
        <select name = "e_wybrakowanie" id = "e_wybrakowanie" onChange = {(e) => {
        setEWybrakowanie(e.target.value);
        }}>
        <option></option>
        <option>Tak</option>        
        <option>Nie</option>  
        </select>
        <br></br><br></br>
        <button type="submit" class="btn any-button" onClick = {updateInwentarz}>Zapisz</button><br></br>
        <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortId">
      <div class="form-container">
        <h1>Filtruj po ID</h1>
          <label for="sortById"><b>ID:</b></label>
          <input type="text" id = "sortById" placeholder="Filtruj po ID..." name="sortById"/>
          <button class="btn any-button" onClick = {getFiltrById}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortLaborant">
      <div class="form-container">
        <h1>Filtruj po ID</h1>
          <label for="sortByLaborant"><b>Nr Laboranta:</b></label>
          <input type="text" id = "sortByLaborant" placeholder="Filtruj po nr laboranta..." name="sortByLaborant"/>
          <button class="btn any-button" onClick = {getFiltrByLaborant}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortIlosc">
      <div class="form-container">
        <h1>Filtruj po ilości</h1>
          <label for="sortByIlosc"><b>Ilosc:</b></label>
          <input type="text" id = "sortByIlosc" placeholder="Filtruj po ilości..." name="sortByIlosc"/>
          <button class="btn any-button" onClick = {getFiltrByIlosc}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortMiejsce">
      <div class="form-container">
        <h1>Filtruj po miejscu</h1>
          <label for="sortByMiejsce"><b>Miejsce:</b></label>
          <input type="text" id = "sortByMiejsce" placeholder="Filtruj po miejscu..." name="sortByMiejsce"/>
          <button class="btn any-button" onClick = {getFiltrByMiejsce}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortNazwa">
      <div class="form-container">
        <h1>Filtruj po nazwie</h1>
          <label for="sortByNazwa"><b>Nazwa:</b></label>
          <input type="text" id = "sortByNazwa" placeholder="Filtruj po nazwie..." name="sortByNazwa"/>
          <button class="btn any-button" onClick = {getFiltrByNazwa}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortInwentarz">
      <div class="form-container">
        <h1>Filtruj po nr inwentarzowym</h1>
          <label for="sortByInwentarz"><b>Nr inwentarzowy:</b></label>
          <input type="text" id = "sortByInwentarz" placeholder="Filtruj po nr inwentarzowym..." name="sortByInwentarz"/>
          <button class="btn any-button" onClick = {getFiltrByInwentarz}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortUzytkownik">
      <div class="form-container">
        <h1>Filtruj po użytkowniku</h1>
          <label for="sortByUzytkownik"><b>Uzytkownik:</b></label>
          <input type="text" id = "sortByUzytkownik" placeholder="Filtruj po użytkowniku..." name="sortByUzytkownik"/>
          <button class="btn any-button" onClick = {getFiltrByUzytkownik}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortRodzaj">
      <div class="form-container">
        <h1>Filtruj po rodzaju</h1>
          <label for="sortByRodzaj"><b>Rodzaj:</b></label>
          <input type="text" id = "sortByRodzaj" placeholder="Filtruj po rodzaju..." name="sortByRodzaj"/>
          <button class="btn any-button" onClick = {getFiltrByRodzaj}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortTyp">
      <div class="form-container">
        <h1>Filtruj po typie</h1>
          <label for="sortByTyp"><b>Typ:</b></label>
          <input type="text" id = "sortByTyp" placeholder="Filtruj po typie..." name="sortByTyp"/>
          <button class="btn any-button" onClick = {getFiltrByTyp}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div class="form-popup" id="sortWybrakowanie">
      <div class="form-container">
        <h1>Filtruj po wybrakowaniu</h1>
          <label for="sortByWybrakowanie"><b>Wybrakowanie:</b></label>
          <input type="text" id = "sortByWybrakowanie" placeholder="Filtruj po wybrakowaniu..." name="sortByWybrakowanie"/>
          <button class="btn any-button" onClick = {getFiltrByWybrakowanie}>Filtruj</button>
          <button type="button" class="btn cancel any-button" onClick={closeForm}>Zamknij</button>
      </div>
    </div>

    <div className="menu">
        <img src='./menu.png' alt="Menu" className="menu-img"/>
        <div className="menu-buttons">
          <h1 className='dodawanie'>Dodawanie</h1>
            <button className='open-button' onClick = {openForm}>Dodaj Laboranta</button>
            <button className='any-button' onClick = {openForm2}>Dodaj Użytkownika</button>
            <button className='any-button' onClick = {openForm3}>Dodaj Miejsce</button>
            <button className='any-button' onClick = {openForm4}>Dodaj Rodzaj</button>
            <button className='any-button' onClick = {openForm5}>Dodaj Typ</button>
           <h1 className='filtrowanie'>Filtrowanie</h1>
           <button className='any-button' onClick = {openFilterForm}>Filtruj</button>
           <h1 className='eksport'>Eksport</h1>
           <button className='any-button' onClick = {pdf2}>Eksportuj</button>
        </div>
    </div>
    <section className='panel'>
      <div className="filtr">
      <h1>Dodaj element:</h1>
        <label htmlFor="nr_laboranta">Nr Laborant:</label>
        <select name = "nr_laboranta" id = "nr_laboranta" onChange = {(e) => {
        setNrLaboranta(e.target.value);
        }}>
        <option></option>        
        {
          laborants.map((val, key)=><option key={key}>{val.nr_laborant}</option>)
        }
        </select>

        <label htmlFor="ilosc">Ilość:</label>
        <input type="number" name="ilosc" id="ilosc" value={ilosc} onChange={(e) => setIlosc(e.target.value)} />

        <label htmlFor="miejsce">Miejsce:</label>
        <select name = "miejsce" id = "miejsce" onChange = {(e) => {
        setMiejsce(e.target.value);
        }}>
        <option></option>        
        {
          locations.map((val, key)=><option key={key}>{val.miejsce}</option>)
        }
        </select>

        <label htmlFor="nazwa">Nazwa:</label>
        <input type="text" name="nazwa" id="nazwa" placeholder = {nazwa} onChange={(e) => setNazwa(e.target.value)} />

        <label htmlFor="nr_inwentarzowy">Nr Inw.:</label>
        <input type="text" name="nr_inwentarzowy" id="nr_inwentarzowy" value={nr_inwentarzowy} onChange={(e) => setNrInwentarzowy(e.target.value)} />

        <label htmlFor="uzytkownik">Użytkownik:</label>
        <select name="uzytkownik" id="uzytkownik" onChange = {(e) => {
        setUzytkownik(e.target.value)}}> 
        <option></option>        
        {
          users.map((val, key)=><option key={key}>{val.Imie}.{val.Nazwisko}</option>)
        }
        </select>

        <label htmlFor="rodzaj">Rodzaj:</label>
        <select name = "rodzaj" id = "rodzaj" onChange = {(e) => {
        setRodzaj(e.target.value);
        }}>
        <option></option>
        <option>Elektronika</option>
        <option>Mebel</option>
        {
          sorts.map((val, key)=><option key={key}>{val.rodzaj}</option>)
        }
        </select>

        <label>Typ:</label>
        <select name = "typ" id = "typ" onChange = {(e) => {
        setTyp(e.target.value);
        }}>
        <option></option>
        <option>Stanowy</option>
        <option>Bezstanowy</option>
        {
          types.map((val, key)=><option key={key}>{val.typ}</option>)
        }
        </select>

        <label htmlFor="wybrakowanie">Wybrakowanie:</label>
        <select name = "wybrakowanie" id = "wybrakowanie" onChange = {(e) => {
        setWybrakowanie(e.target.value);
        }}>
        <option></option>
        <option>Tak</option>
        <option>Nie</option>
        </select>
        <button className='filtr-button any-button' onClick = {funkcja}>Dodaj</button>
    </div>
  </section>

    <div className="tabela">
      <div ref = {pdf}>
        <div className="pointer">
          <div className="bar">
            <p onClick = {sortId} onDoubleClick={sortId2}>Id</p>
            <p onClick = {sortNrLaboranta} onDoubleClick={sortNrLaboranta2}>Nr laboranta</p>
            <p onClick = {sortIlosc} onDoubleClick={sortIlosc2}>Ilość</p>
            <p onClick = {sortMiejsce} onDoubleClick={sortMiejsce2}>Miejsce</p>
            <p onClick = {sortNazwa} onDoubleClick={sortNazwa2}>Nazwa</p>
            <p onClick = {sortNrInwentarzowy} onDoubleClick={sortNrInwentarzowy2}>Nr inwentarzowy</p>
            <p onClick = {sortUzytkownik} onDoubleClick={sortUzytkownik2}>Użytkownik</p>
            <p onClick = {sortRodzaj} onDoubleClick={sortRodzaj2}>Rodzaj</p>
            <p onClick = {sortTyp} onDoubleClick={sortTyp2}>Typ</p>
            <p onClick = {sortWybrakowanie} onDoubleClick={sortWybrakowanie2}>Wybrakowanie</p>
            <p id = "delfrompdf">Edytuj</p>
            <p id = "delfrompdf2">Usuń</p>
          </div>
        </div>
      <table id = "myTable">
      {posts.map((val, key) => {
      return (
        
      <tr className = "bar" id = {val.id}>
        <td className = "bar-td">{val.id}</td>
        <td className = "bar-td">{val.nr_laboranta}</td>
        <td className = "bar-td">{val.ilosc}</td>
        <td className = "bar-td">{val.miejsce}</td>
        <td className = "bar-td">{val.nazwa}</td>
        <td className = "bar-td">{val.nr_inwentarzowy}</td>
        <td className = "bar-td">{val.uzytkownik}</td>
        <td className = "bar-td">{val.rodzaj}</td>
        <td className = "bar-td">{val.typ}</td>
        <td className = "bar-td">{val.wybrakowanie}</td> 
        <button className='delfrompdf3' id = {val.id} onClick = {() => {editForm(val.id)}}>Edytuj</button>
        <button className = 'delfrompdf3' id = {val.id} onClick = {() => {deleteInwentarz(val.id)}}>Usuń</button>
      </tr>
      );
      })}
      </table>
    </div>
  </div>
</div>
  );
}

export default App;