function building(input){
    let floors = Number(input.shift());
    let roomsPerFloor = Number(input.shift());

    for(let floor = floors; floor>=1; floor--){
        let roomNumber = floor * 10;
        let currentFloor = "";
        for (let room = 1; room <= roomsPerFloor; room++){
            if(floor === floors){
                currentFloor +=(`L${roomNumber}`);
            }
            else if (floor % 2 !== 0){
                currentFloor += (`A${roomNumber}`);
            }
            else {
                currentFloor += (`O${roomNumber}`);
            }
            roomNumber++;
        }
        console.log(currentFloor);
    }
}

building([
    "6",
    "4"
]);

building([
    "9",
    "5"
]);