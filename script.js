// const byteSize = (str) => {
//   // write your code here
// };
function byteSize(str) {
    const blob = new Blob([str]);
    return blob.size;
}
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));



// Test cases
console.log(byteSize('hello world')); // 11
console.log(byteSize('안녕하세요')); // 15
console.log(byteSize('')); // 0
