"use strict";
var carGlobal;
function callCreateCar() {
    var plate = document.getElementById("inputPlate").value; // contingut inputs cotxe
    var color = document.getElementById("inputBrand").value;
    var brand = document.getElementById("inputColor").value;
    if (plate && /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/.test(plate)) {
        carGlobal = createCar(plate, color, brand);
        document.getElementById("wheels").classList.remove("d-none");
        document.getElementById("inputPlate").classList.remove("is-invalid");
        document.getElementById("carFormContainer").classList.add("d-none");
    }
    else {
        document.getElementById("inputPlate").classList.add("is-invalid");
    }
}
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    return car;
}
function callAddWheels() {
    var wheelBrand = "";
    var wheelDiam = 0;
    var isinvalid = 0;
    //validacio de diametre
    for (var i = 1; i < 5; i++) {
        wheelDiam = parseFloat(document.getElementById("wheel" + i + "Diam").value);
        if (wheelDiam > 2 || wheelDiam < 0.4 || isNaN(wheelDiam)) {
            document.getElementById("wheel" + i + "Diam").classList.add("is-invalid");
            document.getElementById("wheel" + i + "Diam").value = "";
            document.getElementById("wheel" + i + "Diam").placeholder = "Diameter between 0.4 and 2";
            isinvalid++;
        }
        else {
            document.getElementById("wheel" + i + "Diam").classList.remove("is-invalid");
        }
    }
    if (isinvalid == 0) {
        for (var i = 1; i < 5; i++) {
            wheelBrand = document.getElementById("wheel" + i + "Brand").value;
            wheelDiam = parseInt(document.getElementById("wheel" + i + "Diam").value);
            carGlobal.addWheel(new Wheel(wheelDiam, wheelBrand));
        }
        document.getElementById("carCharacteristics").textContent = "Plate: " + carGlobal.plate + "  /   Brand: " + carGlobal.brand + "  /   Color: " + carGlobal.color;
        var i = 1;
        carGlobal.wheels.forEach(function (element) {
            document.getElementById("brand" + i).textContent = element.brand;
            document.getElementById("diam" + i).textContent = element.diameter.toString();
            i++;
        });
        document.getElementById("result").classList.remove("d-none");
        document.getElementById("wheels").classList.add("d-none");
        document.getElementById("carFormContainer").classList.add("d-none");
    }
    //(document.getElementById("brand1") as HTMLTableCellElement).textContent= carGlobal.wheels[i].brand;
    /*
var wheel2Brand = (document.getElementById("wheel2Brand") as HTMLInputElement).value;
var wheel2Diam = (document.getElementById("wheel2Diam") as HTMLInputElement).value;

var wheel3Brand = (document.getElementById("wheel3Brand") as HTMLInputElement).value;
var wheel3Diam = (document.getElementById("wheel3Diam") as HTMLInputElement).value;

var wheel4Brand = (document.getElementById("wheel4Brand") as HTMLInputElement).value;
var wheel4Diam = (document.getElementById("wheel4Diam") as HTMLInputElement).value; */
}
