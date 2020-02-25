const path = require('path');

// system files
console.log('FileName:', __filename);
console.log('DirName:', __dirname);

// --- path ---
// name
const baseName = path.basename(__filename);
// extension
const extName = path.extname('/home/cultum/Desktop/Backend/Backend-FastCourse/demo/test.tsx');
// parse (object)
const parse = path.parse(__filename);
// join
const join = path.join(__dirname, 'papka', 'index.html');



console.log('baseName: ', baseName);
console.log('parse: ', parse.name);
console.log('join: ', join);