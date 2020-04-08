
const packageFileCode = '{\n "scripts": { \n\t\t "dev": "next", \n\t\t "build": "next build", \n\t\t "start": "next start" \n } \n} ';
const indexFileCode = ' import react from `React`; \n\n\n const App = () => { \n return ( \n \t <div>\n \t\t Home \n\t </div>\n\t ); \n } \n export default App; ';

module.exports = { packageFileCode, indexFileCode };

