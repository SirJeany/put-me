'use strict';


const addForm = document.querySelector('.add-form');
const properties = JSON.parse(localStorage.getItem('properties')) || [];


function addProperty(e) {
    // e.preventDefault();
    
    let url = this.querySelector('#propUrlInput').value;
    
    console.log(url);
    console.log(localStorage.getItem('myFristKey'));
    // if(url does not contain prop24 then warn uer that incorrect link was added...)

    // Code to get the scraped info:
    // let scrapedData = 
}

addForm.addEventListener('submit', addProperty);