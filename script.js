function upDate(previewPic) {
    let image = document.getElementById('image');
    image.style.background = "url(" + previewPic.src + ")";
    image.innerHTML = previewPic.alt;
}

function unDo() {
    let image = document.getElementById('image');
    image.style.backgroundImage = 'url("")';
    image.style.backgroundColor = '#8e68ff';
    image.innerHTML = "Hover over an image below to display here.";
}


let currentImg = document.getElementsByTagName('img');
for(let i = 0; i < currentImg.length; i++) {
    currentImg[i].setAttribute("tabindex", "0");
    currentImg[i].setAttribute("onfocus", "upDate(this)");
    currentImg[i].setAttribute("onblur", "unDo()");
}

let veg = ['Pea', 'Cauliflower', 'Raddish', 'Tomato'];
let nonVeg = ['Chicken', 'Mutton', 'Fish', 'Egg'];

const displayFood = () => {
    document.getElementById('veg').innerHTML = veg;
    document.getElementById('non-veg').innerHTML = nonVeg;
}


function vegInsert() {
    let vegList = document.getElementById('veg');
    let enterVegFood = prompt('Enter the vegetable you want to check');
    veg[veg.length] = enterVegFood;
    vegList.innerHTML = veg;
}
function nonVegInsert() {
    let nonVegList = document.getElementById('non-veg');
    let enterNonVegFood = prompt('Enter the vegetable you want to check');
    nonVeg[nonVeg.length] = enterNonVegFood;
    nonVegList.innerHTML = nonVeg;
}