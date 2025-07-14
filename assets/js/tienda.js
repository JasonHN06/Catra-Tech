let carProducts= new Array();// Se declara un arreglo e instanciaba en vacio
let tableP= document.getElementById("list-products");//Ocuparemos acceso en varios niveles o funciones
let tableDetailP=document.getElementById("detailProducts");//Detalles de la compra
let countProducts= document.getElementById("count-list-product");//Mostramos cantidad de productos
function main(){
    let titleP= document.getElementsByClassName("title-product");
    let descripP= document.getElementsByClassName("descrip-product");
    let btnP= document.getElementsByClassName("btn-producto");//Dispara la accion
    let priceP= document.getElementsByClassName("price-product");
    let imgP= document.getElementsByClassName("img-product");
    let btnCarP=document.getElementById("car-products");
    // Tipos de datos a trabajar: String y Numbers
    for(let i=0;i<btnP.length;i++){
        btnP[i].onclick= function (){
            if(!validateExistProduct(titleP[i].textContent)){
                console.log(imgP[i].src)
                let objt= new Object();
                objt={
                    img: imgP[i].src,
                    title: titleP[i].textContent,
                    descript: descripP[i].textContent, 
                    price: Number(priceP[i].textContent),
                    count: 1
                    }
            carProducts.push(objt);
            }
                /* carProducts.push(titleP[i].textContent)
                carProducts.push(Number(priceP[i].textContent))
                carProducts.push(descripP[i].textContent) */
        }   
    }
    btnCarP.onclick= function(){
        showProducts();
    }
}

function showProducts(){
    if(carProducts.length>0){
        validateCarProducts(false);
        let html="";
        let subt=0;
        for(let i=0;i<carProducts.length;i++){
            html+=`<tr>
                    <td>${i+1}</td> 
                    <td style='width:200px !important;'><img class='img-list-products' src='${carProducts[i].img}'</td>
                    <td>${carProducts[i].title}</td> 
                    <td>${carProducts[i].count}</td>
                    <td>L. ${carProducts[i].price}</td>
                    <td><button type='button' class='btn btn-danger btn-small' onclick='deleteProduct(${i})'>X</button></td>
                </tr>`;
                subt+=carProducts[i].price*carProducts[i].count;//Calculamos el subtotal
        }
        tableP.innerHTML=html;
        showDetailProducts(subt);
    }else{
        validateCarProducts(true);
    }
}

function validateExistProduct(text){
    let existFlag=false;
    for(let i=0;i<carProducts.length;i++){
        if(text==carProducts[i].title){
            carProducts[i].count+=1;
            existFlag=true;
            showModalAddProduct();
        }
    }
    return existFlag;
}

function showDetailProducts(subtotal){
    let html="";
    let isv=0;
    let total=0;
    isv=subtotal*0.15;
    total=subtotal+isv;
    /* html+=`<tr>
                    <td>Subtotal: $ ${subtotal}</td>
                    <td>Impuesto: $ ${isv}</td>
                    <td>Total: $ ${total}</td>
            </tr>`; */
        
        html=`<tr><td>Subtotal:</td><td>L. ${subtotal.toFixed(2)}</td></tr>
        <tr><td>Impuesto:</td><td>L. ${isv.toFixed(2)}</td></tr>
        <tr><td>Total:</td><td>L. ${total.toFixed(2)}</td></tr>`
    tableDetailP.innerHTML=html;
}

function deleteProduct(position){
    carProducts.splice(position,1);
    showProducts();
    showCountProduct();
}

function validateCarProducts(flag){
    let tablesHidden=document.querySelector(".validate-car");
    let messageValidate=document.querySelector(".validate-message");
    if(flag==true){//Si no hay productos
        tablesHidden.setAttribute("hidden",true);
        messageValidate.removeAttribute("hidden");
    }else{//Si hay productos
        tablesHidden.removeAttribute("hidden");
        messageValidate.setAttribute("hidden",true);
    }
}

function showModalAddProduct(){
    let modalConfirm= document.getElementById("add-product-confirm");//Encapsulamos el HTML del modal
    let modalBootsConfirm= new bootstrap.Modal(modalConfirm);//Instanciamos el objeto del modal que bootstrap ofrece
    showCountProduct();
    modalBootsConfirm.show();
}

function showCountProduct(){
let count=0;
    for(let i=0;i<carProducts.length;i++){
        count+=carProducts[i].count;
    }
    countProducts.textContent=count;
}

main();