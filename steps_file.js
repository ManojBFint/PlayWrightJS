// steps_file.js

// In this file, you can append custom steps to the 'I' object.
// 'I' represents the actor in CodeceptJS, which is used to perform actions in your tests.

module.exports = function() {
  return actor({
    // Define custom steps here, and they will be available in the 'I' object in your tests.
    // Example of a custom step:
    // myCustomStep() {
    //   this.say('This is a custom step');
    // }
  });
};
