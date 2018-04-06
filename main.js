let elizabeth = {
    distract: "14 of HungerGames",
    statements:[
        {
        taxes: "Less taxes for the poor, more for the athletes",
        jobs: "we should make those",
        infrastructure: "More schools and teleporters",
        healthCare: "Available to all! More vacation days to prevent illness",
        crimeEnforcement: "We should prevent crime! Lets make that a thing..."
        }
    ],
    donationURL: "https://www.givememoney.com",
    calender: [
        { 
            january: "15",
            febuary: "10",
            march: "11",
            april: "25",
            may: "1",
            june: "17",
            july: "9",
            august: "21",
            september: "8",
            october: "31",
            november: "3",
            december: "27"
        }
    ],
    volunteers: [],
    biography: "I like to improve things! Thats why we decided to travel dimensions into the geek relm we are today! Help me do that by providing all the memes!",
    photos: [
        {
           head: "https://cdn.pixabay.com/photo/2018/02/01/20/48/woman-3124083_1280.jpg",
           family: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Doctor_Who_Exhibition_%283568915919%29.jpg",
           enemies: "https://c1.staticflickr.com/8/7563/16079238881_6e3dccef18_z.jpg%22", 
        }
    ],
    mission: "To better ourselves as a growing technilogical community. We should unite and geekify like the old earth nerd conventions! I will strive to accomplish just that!",
    register: ""
}

// alert(elizabeth.statements[0].taxes);

// New object with prototypal constructor function
const huh = {

    // function to be called, need to call the PROPERTY! 
    create: function (name, address, email, phoneNum, availability, position) {
        this.name = name
        this.address = address,
        this.email = email,
        this.phoneNum = phoneNum,
        this.availability = availability,
        this.position = position
        // configurable = true,
        // writable = true,
        // enumerable = true

        // Console logs the finished object values
        console.log(me);

        //pushes the whole object into the array of volunteer
        elizabeth.volunteers.push(me);
        
}
}
// Creates the new object and the new name for said object
let me = Object.create(huh);

// Passes the values into the prototypal constructor function
me.create("sdfsd", "sdfsd", "sdfsdf", "sdfsdf", "sdfsd", "sdfsdf");

// Reads the name of the first new object (Used to check if it is working correctly)
alert(elizabeth.volunteers[0].name);