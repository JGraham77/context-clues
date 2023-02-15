// Variables, using var specifically for this lab to test closure
var friends = ['Archer', 'Carson', 'Madeline', 'Caitlyn', 'Brian'];
var locations = ['Bangledesh', 'Tokyo', 'Beijing', 'London', 'Canberra', 'Cairo', 'Paris', 'Berlin', 'Mexico City', 'Ottawa'];
var weapons = ['shank', 'fork', 'butcher knife', 'wire', 'sword', 'fists', 'confusion', 'pushing', 'car', 'kunai', 'boredom', 'gun', 'bow', 'axe', 'pillow', 'laser', 'faulty parachute', 'hands', 'pencil', 'mace'];

// For loop for h3 1-100 and alert for clicking each h3
for (var i = 1; i <= 100; i++) {
    var $h3 = $("<h3>Accusation " + i + "</h3>");
    $($h3).appendTo('body');
    $($h3).click(myAlert(i));
}

function myAlert(i) {
    var friend = friends[i % 5];
    var location = locations[i % 10];
    var weapon = weapons[i % 20];
    function accAlert() {
        alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
    }
    return accAlert;
}