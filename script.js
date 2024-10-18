const car = {
    name: "Tesla",
    model: 100,
    weight: "850kg",
    color: "white",
    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    },
};

console.log(car.weight);
car.start();