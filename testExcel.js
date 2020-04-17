const readXlsxFile = require('read-excel-file/node');
 
// File path.
var i = 0 ;
let array = [] ;
readXlsxFile('E:/1111.xlsx').then((rows) => {
rows.forEach(row => {
    if (i > 0) {array.push(row[1]);
    }
    i++;
});
})

array.forEach(row =>{
    console.log(row);
   
})