

const bookshop = [
   { autor: 'Nestayko', name: 'Kotopes', year: 2014, price: 230 },
   { autor: 'Solovey', name: 'My future', year: 2021, price: 148 },
   { autor: 'Shevchenko', name: 'Kobzar', year: 1991, price: 100 },
   { autor: 'Konan Doyl', name: 'Strichka', year: 1980, price: 125 },
   { autor: 'Krakovyak', name: 'Dance', year: 2021, price: 238 },
]

//console.log(bookshop);
//console.table(bookshop);

const allBtnLnk = document.querySelector('button[name="allBtn"]');
const mainContLnk = document.querySelector('.main-container');
const autorBtnLnk = document.querySelector('button[name="autorBtn"]');
const nameBtnLnk = document.querySelector('button[name="nameBtn"]');
const yearBtnLnk = document.querySelector('button[name="yearBtn"]');
const prcBtnLnk = document.querySelector('button[name="prcBtn"]');
const rsltLink = document.querySelector('.result');



allBtnLnk.addEventListener('click', (ev) => {
    let spisok = '';
    bookshop.forEach((item) => {
    spisok+= `${item.autor} | ${item.name} | ${item.year} | Price: ${item.price}<br>`;
    })
    mainContLnk.innerHTML = spisok;
})

autorBtnLnk.addEventListener('click', (ev) => {
    const sortBooksAutor = bookshop.sort((a, b) => {
        if(a.autor < b.autor) return -1;
        if(a.autor > b.autor) return 1;
        if(a.autor === b.autor) return 0;
    })

    let spisok = '';
    bookshop.forEach((item) => {
    spisok+= `${item.autor} | ${item.name} | ${item.year} | Price: ${item.price}<br>`;
    })
    rsltLink.innerHTML = spisok;
})


nameBtnLnk.addEventListener('click', (ev) => {
    const sortBooksName = bookshop.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        if(a.name === b.name) return 0;
    })
    
    let spisok = '';
    bookshop.forEach((item) => {
    spisok+= `${item.autor} | ${item.name} | ${item.year} | Price: ${item.price}<br>`;
    })
    rsltLink.innerHTML = spisok;
})


yearBtnLnk.addEventListener('click', (ev) => {
    const sortBooksYear = bookshop.sort((a, b) => {
        if(a.year < b.year) return -1;
        if(a.year > b.year) return 1;
        if(a.year === b.year) return 0;
    })

    let spisok = '';
    bookshop.forEach((item) => {
    spisok+= `${item.autor} | ${item.name} | ${item.year} | Price: ${item.price}<br>`;
    })
    rsltLink.innerHTML = spisok;
})

prcBtnLnk.addEventListener('click', (ev) => {
    const sortBooksPrice = bookshop.sort((a, b) => {
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        if(a.price === b.price) return 0;
    })
    
    let spisok = '';
    bookshop.forEach((item) => {
    spisok+= `${item.autor} | ${item.name} | ${item.year} | Price: ${item.price}<br>`;
    })
    rsltLink.innerHTML = spisok;
})





