console.log("Hello World!!");

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("\nModule disposed. \n"));
}
