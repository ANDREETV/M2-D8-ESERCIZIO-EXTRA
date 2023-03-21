
// EX 21
// let x = "John"
// let y = "Doe"

// console.log("mostro :"+ x +  " <> " +  y);

// EX 22 - 23
// let persona = {
//     name: "Andrea",
//     surname: "Iorio",
//     email: "email@gamil.com",
// }
//  delete persona.email //per eliminare oggetto

// console.log(persona);

// EX 24 - 25
// let stringhe = ["1","ciao","3","4","5","6","7","8","9","10"]
// for (const i of stringhe) {
//     console.log(i);
// }

// EX 26
// let nRandom = []
// for (let i = 0; i < 100; i++) {
//     let numeri = Math.floor(Math.random() * 100)
//     nRandom.push(numeri)
// }
// console.log(nRandom);


// EX 27
// function minMax(nRandom) {
//     let nmin = nRandom[0]
//     let nmax = nRandom[0]
//     for (let i = 0; i < nRandom.length; i++) {
//         if (nRandom[i] > nmax) {
//             nmax = nRandom[i]
//         }
//         if (nRandom[i] < nmin ) {
//             nmin = nRandom[i]
//         }
//     }
//     return {nmax,nmin}
// }

//  console.log(nmax);
//  console.log(nmin);

//  function trovaMaxMin(array) {   
//     let max = array[0];
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//           max = array[i];
//         } else if (array[i] < min) {
//           min = array[i];
//         }
//       }
//       return { max: max, min: min };
//   }
//   let risultato = trovaMaxMin(nRandom);
//   console.log("Valore massimo: " + risultato.max);
//   console.log("Valore minimo: " + risultato.min);



// ex 28

//   function arrayPadre() {
//     let arrayP = []
//     for (let i = 0; i < 10; i++) {
//       let element = Math.floor(Math.random()*100)
//       arrayP.push(element);
//     }
//     return arrayP
//   }

//   let arrayF = []
//   for (let i = 0; i < 3; i++) {
//     let nuovaArray = arrayPadre()
//     arrayF.push(nuovaArray) 
    
//   }


// console.log("arrayF ", arrayF);

// EX 29

// let a = [2,3,7,9,10]
// let b = [6,9,7,1]

// function piuElementi(array1,array2) {
//   if (array1.length >= array2.length) {
//     return array1
//   }else{
//     return array2
//   }
// }

// console.log(piuElementi(a,b));

// 30
// let x = [1,3,5,6]

// let y = [1,2,3,4]

//   function arraySomma(array1, array2) {
//     let somma1 = 0
//     for (let i = 0; i < array1.length; i++) {
//       somma1 += array1[i]
      
//     }

//     let somma2 = 0
//     for (let p = 0; p < array2.length; p++) {
//         somma2 += array2[p]
      
//     }

//     if (somma1 >= somma2) {
//       return [somma1,array1]
//     } else return [somma2,array2]
//   }


//   let risultato30 = arraySomma(x, y); 

//   console.log(risultato30);

// EX 31

// let id = document.querySelector('.container')

// console.log(id);

// ex 32
// let td = document.querySelectorAll('td')
// console.log(td);

// EX 33

  // let td = document.querySelectorAll('td');
  // for (let i = 0; i < td.length; i++) {
  //   console.log(td[i].textContent);
  // }






  // ex 34

  // let titolo = document.querySelector('title')
  // titolo.innerText = "ciao mondo"

// ex 35

// function aggiungiRiga() {
//   let tabella = document.querySelector('table')

//   let nuovaRiga = tabella.insertRow(-1);
//   let cella1 = nuovaRiga.insertCell(0);
//   let cella2 = nuovaRiga.insertCell(1);

//   cella1.innerHTML = "17"
//   cella2.innerHTML = "ciao universo"

// }

// console.log(aggiungiRiga());

// EX 36
// function aggiungiClasse() {
//   let tr = document.querySelectorAll('table tr')
//   for (let i = 0; i < tr.length; i++) {
//     tr[i].classList.add('test')
    
//   }
// }


window.onload = function() {
  // aggiungiClasse()
  // linkRosso() 
  // ex 38
  // console.log("Page loaded");
  // list()
  // rimuoviLista()
  // svuotaLista()
  // imgNascosta()

}

// EX 37
// function linkRosso() {
//   let link = document.querySelectorAll('a')
//   for (let i = 0; i < link.length; i++) {
//     link[i].style = "background-color: red;"
    
//   }
// }

// ex 39
// function list() {
//   let newLista = document.createElement('li')
//   newLista.innerText = "ciao mondo"
//   let ulNoOrdinata = document.querySelector('ul');
//   ulNoOrdinata.appendChild(newLista)
// }


// EX 40
// function rimuoviLista() {
//   let listaOrdinata = document.querySelector('#lista');
//   console.log("vedi questo ", listaOrdinata);
//   for (let i = 0; i < listaOrdinata.children.length; i++) {
//     listaOrdinata.children[0].innerText = ""
//   }
// }

// EX 41 EXTRA
// let links = document.querySelectorAll('a');
// console.log("vedi ", links);
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("mouseover", () => {alert(links[i].href)} )
//   console.log(links[i].href);
// }

// EX 42 EXTRA
// function hideImages() {
//   let images = document.querySelectorAll("img");
//   for (let i = 0; i < images.length; i++) {
//     images[i].classList.toggle('elimina')
//   }
// }

// EX 43 EXTRA
// function table() {
//   let table = document.querySelectorAll("table");
//   for (let i = 0; i < table.length; i++) {
//     table[i].classList.toggle('elimina')
//   }
// }

// EX 44 EXTRA


// EX 45 EXTRA


// EX 46 EXTRA


// EX 47 EXTRA


// EX 48 EXTRA


// EX 49 EXTRA


// EX 50 EXTRA
