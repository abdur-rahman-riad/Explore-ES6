class Support {
    name;
    designation = 'Junior Web Developer';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    supportSession() {
        console.log(this.name + " Start Support Session");
    }
    stopSession() {
        console.log(this.name + " Stope the session");
    }
}
const newDeveloper = new Support('Abdur Rahman', 'Feni');
console.log(newDeveloper);
const newDeveloper2 = new Support('Rahman Riad', 'Dhaka');
console.log(newDeveloper2);

newDeveloper.supportSession();
newDeveloper2.stopSession();