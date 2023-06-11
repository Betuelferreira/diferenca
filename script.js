


const clon = document.getElementById('clon')



var cont = 1

var calcular = (id) =>{

    const dini = document.querySelectorAll('.data1')[id];
    const dfim = document.querySelectorAll('.data2')[id];
    const resultado = document.querySelectorAll('.resultado')[id];

    
    let di = dini.value;
    let df = dfim.value;

    di = new Date(di);
    df = new Date(df);

    let dife =  Math.abs(di - df);
    let dia = 1000*60*60*24;
    let total = dife/dia;
    resultado.innerText = total;
}


function clone (){
    let d = document.querySelector('.diferenca').cloneNode(true);
    d.childNodes[3].value = ""
    d.childNodes[5].value = ""
    d.childNodes[7].innerText = "resultado:"
    d.childNodes[9].id = document.querySelectorAll(".diferenca").length
    document.getElementById('container').appendChild(d);
    

}


clon.addEventListener('click', clone);







