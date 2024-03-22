'use strict';

import Shape from '../script/Shape.js';

const shapeSelect = document.querySelector('.shape-select');
const colorSelect = document.querySelector('.color-select');
const create = document.querySelector('.create-button');
const mainBox = document.querySelector('.main-box');
const unitInfo = document.querySelector('.shape-info');
const shapes = [];

//Objects to convet color names to hex and vise versa
const colorNames = {
    "09f": "Blue",
    "9f0": "Green",
    "f90": "Orange",
    "f09": "Pink",
    "90f": "Purple"
};
const colorHex = {
    "Blue": "09f",
    "Green": "9f0",
    "Orange": "f90",
    "Pink": "f09",
    "Purple": "90f"
};

//Construct the HTML div and set eventListener for each shape
function createNewElement(shapeObject) {
    let newShape = document.createElement('div');
    newShape.classList.add(shapeObject.name);
    newShape.style.backgroundColor = `#${colorHex[shapeObject.color]}`;
    newShape.addEventListener('click', () => {
        let index = shapes.indexOf(shapeObject);
        unitInfo.style.visibility = 'visible';
        unitInfo.innerText = `Unit ${index+1}: ${shapeObject.getInfo()}`;
    });
    return newShape;
}

//Create new Shape object and append new div
function createShape() {
    let shape = shapeSelect.value;
    let color = colorSelect.value;
    shapes.push(new Shape(shape, colorNames[color]));
    let newShape = createNewElement(shapes[shapes.length-1]);
    mainBox.appendChild(newShape);
}

create.addEventListener('click', (event) => {
    event.preventDefault();
    createShape();
});