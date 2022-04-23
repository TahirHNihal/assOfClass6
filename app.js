// Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30

const studentsInfo = [
  // ["Name", "ROll", "Age", "Class", "Gender", "Location", "Admission Fees"],
  ["Nihal", "10", "17", "Nine", "Male", "Uttara", "9000"],
  ["Rupam", "11", "17", "Nine", "Male", "Banani", "9000"],
  ["Mithila", "07", "16", "Eight", "Female", "Uttara", "8000"],
  ["Hossain", "30", "13", "Six", "Male", "Badda", "6000"],
  ["Fahima", "04", "16", "Nine", "Female", "Uttara", "9000"],
  ["Rahima", "08", "16", "Eight", "Female", "Badda", "8000"],
  ["Fahim", "06", "16", "Nine", "Male", "Uttara", "9000"],
  ["Abdullah", "02", "16", "Eight", "Male", "Mirpur", "8000"],
  ["Sagor", "21", "19", "Seven", "Male", "Badda", "7000"],
  ["Mustakim", "36", "23", "Nine", "Male", "Uttara", "9000"],
  ["Promi", "09", "15", "six", "Female", "Khilkhet", "6000"],
  ["Tahmid", "14", "19", "Eight", "Male", "Mirpur", "8000"],
  ["Sumaiya", "29", "18", "Seven", "Female", "Khilkhet", "7000"],
  ["Mim", "25", "18", "Nine", "Female", "Mirpur", "9000"],
];

// studentsInfo.sort().map((data, index) => {
//   console.log(`
//   Name           : ${data[0]}
//   Roll           : ${data[1]}
//   Age            : ${data[2]}
//   Class          : ${data[3]}
//   Gender         : ${data[4]}
//   Location       : ${data[5]}
//   Admission Fees : ${data[6]}
//   `);
// });

//  Total Admnission fees

/*
let totalAdmissionFees = 0;
studentsInfo.sort().map((data, index) => {
  console.log(`
  Name           : ${data[0]}
  Roll           : ${data[1]}
  Class          : ${data[3]}
  Admission Fees : ${data[6]}
  `);
  totalAdmissionFees += parseFloat(data[6])
});
console.log(`
  Total Admission Fees = ${totalAdmissionFees}
`);
*/

// Find All Female Students

/*
studentsInfo.sort().map((data, index) => {
  if (data[4] === "Female") {
    console.log(`
    // ID             : ${index}
    Name           : ${data[0]}
    Roll           : ${data[1]}
    Age            : ${data[2]}
    Class          : ${data[3]}
    Gender         : ${data[4]}
    Location       : ${data[5]}

    `);
  }
});
*/
// Find class wise student result

// Location wise student result

studentsInfo.sort().map((data, index) => {
  if (data[5] === "Uttara") {
    console.log('Here is the all Uttara Students information');
    console.log(`
  Name           : ${data[0]}
  Roll           : ${data[1]}
  Age            : ${data[2]}
  Class          : ${data[3]}
  Gender         : ${data[4]}
  Location       : ${data[5]}
  Admission Fees : ${data[6]}
  `);
  }
  if (data[5] === "Banani") {
    console.log(`
  Name           : ${data[0]}
  Roll           : ${data[1]}
  Age            : ${data[2]}
  Class          : ${data[3]}
  Gender         : ${data[4]}
  Location       : ${data[5]}
  Admission Fees : ${data[6]}
  `);
  }
  if (data[5] === "Badda") {
    console.log(`
  Name           : ${data[0]}
  Roll           : ${data[1]}
  Age            : ${data[2]}
  Class          : ${data[3]}
  Gender         : ${data[4]}
  Location       : ${data[5]}
  Admission Fees : ${data[6]}
  `);
  }
  if (data[5] === "Mirpur") {
    console.log(`
  Name           : ${data[0]}
  Roll           : ${data[1]}
  Age            : ${data[2]}
  Class          : ${data[3]}
  Gender         : ${data[4]}
  Location       : ${data[5]}
  Admission Fees : ${data[6]}
  `);
  }
  if (data[5] === "Khilkhet") {
    console.log(`
  Name           : ${data[0]}
  Roll           : ${data[1]}
  Age            : ${data[2]}
  Class          : ${data[3]}
  Gender         : ${data[4]}
  Location       : ${data[5]}
  Admission Fees : ${data[6]}
  `);
  }
});
