const accordions = document.getElementsByClassName("acordion");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// array
// const fruits = [ 'bannana', 'pawpaw',  'apple', 'orange', 'mango']
// let flen = fruits.length;
// let text = '<ul>';
// for (let i = 0; i < flen; i++) {
//     text += '<li>' + fruits[i] + '<li/>'
// }
// text += '</ul>'


// // array thn with element
// // fruits[0]= 'gt'
// // fruits[1]= 'toyota';
// //  fruits[2]= 'honda';
//  document.getElementById("demo").innerHTML = fruits.toString();
//  console.log('fruits', fruits)

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    btn = document.getElementsByClassName("btn");
    for (i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

    document.getElementById("defaultOpen").click();