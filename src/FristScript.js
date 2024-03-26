// frist step, declare de variables
// second one, define the variables with a certain value
var a; a=true; //the value is a= true
let p1 , p2; 
p1="this paragraph changed";
p2="this paragraph had changed again";

// thirt step, declare a funtion that change over "onclick" call
function fristone() {
    if(a==true){
        document.getElementById('here').innerHTML = p1;
        a=false;
    } else {
        document.getElementById('here').innerHTML = p2;
        a=true;
    }
}