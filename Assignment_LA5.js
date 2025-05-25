let customerTable = {};
let nextNumber = 1;

function simpleHash(name) {
  //Simple hash function for demonstration.  Replace with a more robust hash function in a real application.
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i)) % 5; //Modulo 5 for 5 customers.
  }
  return hash;
}

function addCustomer() {
    let name = prompt("Enter customer name:");
    let hashIndex = simpleHash(name);
    if (!customerTable[hashIndex]) {
        customerTable[hashIndex] = [];
    }
    customerTable[hashIndex].push({ name: name, number: nextNumber++ });
    alert(`${name}, your number is ${customerTable[hashIndex][customerTable[hashIndex].length-1].number}.`);
}

function serveCustomer() {
    let numberToServe = parseInt(prompt("Enter number to serve:"));
    for (let index in customerTable) {
        if (customerTable[index] && customerTable[index].find(customer => customer.number === numberToServe)) {
            let servedCustomer = customerTable[index].shift();
            console.log(`Serving customer number ${numberToServe}: ${servedCustomer.name}`);
            console.log("Updated customer table:", customerTable);
            return;
        }
    }
    alert("Invalid number.");
}

// Example usage:
addCustomer();
addCustomer();
addCustomer();
serveCustomer();
addCustomer();
serveCustomer();