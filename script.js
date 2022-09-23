function generateQR(){
    event.preventDefault();
    unique_id = document.getElementById("unique-product-id").value;
    product_name = document.getElementById("product-name").value;
 
    console.log(unique_id);
    console.log(product_name);
 
    var qrcod = new QRCode(document.getElementById("qrcode"));
    qrcod.makeCode(unique_id);
}
 
function button_c(){
    document.getElementById("btn-g").style.display="none";
    document.getElementById("trans").style.display="none";
    document.getElementById("show").style.display="none";
    document.getElementById("insert").style.display="block";
}
 
function button_t(){
    document.getElementById("btn-g").style.display="none";
    document.getElementById("trans").style.display="block";
    document.getElementById("show").style.display="none";
    document.getElementById("insert").style.display="none";
}
 
function button_g(){
    document.getElementById("btn-g").style.display="none";
    document.getElementById("trans").style.display="none";
    document.getElementById("show").style.display="block";
    document.getElementById("insert").style.display="none";
}