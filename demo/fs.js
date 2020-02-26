const path = require('path');
const fs = require('fs');

// directory create
// fs.mkdir(path.join(__dirname, 'Folder4' ),(error) => {
//   if (error) {
//     throw error
//   }
//
//   console.log('Folder created!')
// });

const filePath = path.join(__dirname, 'Folder3', 'file1.txt');
//
// // overwrites text in file
// fs.writeFile(filePath, 'Hello Node.js!\n', (error) => {
//   if (error) {
//     throw error;
//   }
//
//   console.log('File created!');
// });
//
// // add text in file
// fs.appendFile(filePath, 'Hello Max!', (error) => {
//   if (error) {
//     throw error;
//   }
//
//   console.log('Added text!');
// });

fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) {
    throw error
  }

  console.log('content: ', content);

});

