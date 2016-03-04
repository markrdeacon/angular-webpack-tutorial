export default ngModule => {
  //register services in the folder.
  //seems to need the name of the js file without the .js
  require('./mrd-hello-service').default(ngModule);

}
