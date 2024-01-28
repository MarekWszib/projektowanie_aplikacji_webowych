// przez notację literałów

let person = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    introduce: function () {
        console.log('Nazywam się ' + this.firstName + ' ' + this.lastName);
    }
}

person.introduce();
person.firstName = 'Adam';
person.introduce();

// przez notację konstruktora

function Car(brandValue, modelValue) {
    this.brand = brandValue;
    this.model = modelValue;

    this.showDetails = function () {
        console.log('Car: ' + this.brand + ' ' + this.model);
    }
}

let car = new Car('Fiat', '500');
car.showDetails();

// poprzez klasę

class House {
    constructor(windowsCount, doorsCount){
        this.windows = windowsCount;
        this.doors = doorsCount;

        this.showDetails = function (){
            console.log('House with ' + this.windows + ' windows and ' + this.doors + ' doors.')
        }
    }
}

let house = new House(10,2);
house.showDetails();

