//the signature below is ES6.
//ES5 version would be "module.exports = function(ngModule)"

export default ngModule => {
  //register directives in the folder.
  //seems to need the name of the js file without the .js
  require('./mrd-hello').default(ngModule);
}
