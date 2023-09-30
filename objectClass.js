let json_data = [];

fetch('development_data.json')
  .then(response => response.json())
  .then(data => {
    json_data = data;
    processData(json_data);
    console.log(json_data.FirstObjectDistance_X);
  })

  .catch(error => {
    console.error('Error:', error);
  });



class Vehicle{
    constructor(data){
        this.Column1 = data.Column1;
        this.Speed = data.VehicleSpeed;
    }
}

class FirstObject {
    constructor(){}
    update(data) {
      this.Column1 = data.Column1;
      this.FirstObjectDistance_X = data.FirstObjectDistance_X;
      this.FirstObjectDistance_Y = data.FirstObjectDistance_Y;
      this.Timestamp = data.Timestamp;
      this.FirstObjectSpeed_X = data.FirstObjectSpeed_X;
      this.FirstObjectSpeed_Y = data.FirstObjectSpeed_Y;
      // ... other properties specific to the first object
    }


  }
  
  class SecondObject {
    constructor(){}
    update(data) {
      this.Column1 = data.Column1;
      this.SecondObjectDistance_X = data.SecondObjectDistance_X;
      this.SecondObjectDistance_Y = data.SecondObjectDistance_Y;
      this.Timestamp = data.Timestamp;
      this.SecondObjectSpeed_X = data.SecondObjectSpeed_X;
      this.SecondObjectSpeed_Y = data.SecondObjectSpeed_Y;
      // ... other properties specific to the second object
    }
  }
  
  class ThirdObject {
    constructor(){}
    update(data){
      this.Column1 = data.Column1;
      this.ThirdObjectDistance_X = data.ThirdObjectDistance_X;
      this.ThirdObjectDistance_Y = data.ThirdObjectDistance_Y;
      this.Timestamp = data.Timestamp;
      this.ThirdObjectSpeed_X = data.ThirdObjectSpeed_X;
      this.ThirdObjectSpeed_Y = data.ThirdObjectSpeed
      // ... other properties specific to the third object
    }
  }
  
  class FourthObject {
    constructor(){}
    update(data) {
      this.Column1 = data.Column1;
      this.FourthObjectDistance_X = data.FourthObjectDistance_X;
      this.FourthObjectDistance_Y = data.FourthObjectDistance_Y;
      this.Timestamp = data.Timestamp;
      this.FourthObjectSpeed_X = data.FourthObjectSpeed_X;
      this.FourthObjectSpeed_Y = data.FourthObjectSpeed_Y;
      // ... other properties specific to the fourth object
    }
  }


//creating objects
let firstObject = new FirstObject();
let secondObject = new SecondObject();
let thirdObject = new ThirdObject();
let fourthObject = new FourthObject()


  json_data.forEach(data,i => {
    firstObject.update(data);
    secondObject.update(data);
    thirdObject.update(data);
    fourthObject.update(data);
})
  