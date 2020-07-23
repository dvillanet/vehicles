let carGlobal: Car;

function callCreateCar() {
    var plate = (document.getElementById("inputPlate") as HTMLInputElement).value; // contingut inputs cotxe
    var color = (document.getElementById("inputBrand") as HTMLInputElement).value;
    var brand = (document.getElementById("inputColor") as HTMLInputElement).value;

    if (plate && /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/.test(plate)) {
        carGlobal = createCar(plate, color, brand);
        (document.getElementById("wheels") as HTMLDivElement).classList.remove("d-none");
        (document.getElementById("inputPlate") as HTMLInputElement).classList.remove("is-invalid");
        (document.getElementById("carFormContainer") as HTMLDivElement).classList.add("d-none");
    } else {
        (document.getElementById("inputPlate") as HTMLInputElement).classList.add("is-invalid");
    }



}


function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    return car;
}

function callAddWheels() {
    var wheelBrand = "";
    var wheelDiam = 0;
    var isinvalid = 0;

    //validacio de diametre


    for (var i = 1; i < 5; i++) {
        wheelDiam = parseFloat((document.getElementById("wheel" + i + "Diam") as HTMLInputElement).value);
        if (wheelDiam > 2 || wheelDiam < 0.4 || isNaN(wheelDiam)) {
            (document.getElementById("wheel" + i + "Diam") as HTMLInputElement).classList.add("is-invalid");
            (document.getElementById("wheel" + i + "Diam") as HTMLInputElement).value = "";
            (document.getElementById("wheel" + i + "Diam") as HTMLInputElement).placeholder = "Diameter between 0.4 and 2";
            isinvalid++;
        } else {
            (document.getElementById("wheel" + i + "Diam") as HTMLInputElement).classList.remove("is-invalid");
        }

    }
    if (isinvalid == 0) {
        for (var i = 1; i < 5; i++) {
            wheelBrand = (document.getElementById("wheel" + i + "Brand") as HTMLInputElement).value;
            wheelDiam = parseInt((document.getElementById("wheel" + i + "Diam") as HTMLInputElement).value);
            carGlobal.addWheel(new Wheel(wheelDiam, wheelBrand));
        }
        (document.getElementById("carCharacteristics") as HTMLHeadingElement).textContent = "Plate: " + carGlobal.plate + "  /   Brand: " + carGlobal.brand + "  /   Color: " + carGlobal.color;
        var i=1;
        carGlobal.wheels.forEach(element => {
            (document.getElementById("brand"+i) as HTMLTableCellElement).textContent = element.brand;
            (document.getElementById("diam"+i) as HTMLTableCellElement).textContent = element.diameter.toString();
        i++;
        });
        (document.getElementById("result") as HTMLDivElement).classList.remove("d-none");
        (document.getElementById("wheels") as HTMLDivElement).classList.add("d-none");
        (document.getElementById("carFormContainer") as HTMLDivElement).classList.add("d-none");
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
