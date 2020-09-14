var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(`❌ Test failed: ${assertionToCheck} is not truthy`);
    } 
    console.log("✅ Test passed")
  },

  isEqual: function(a, b) {
    if (a != b) {
      throw new Error(`❌ Test failed: "${a}" is not equal to "${b}"`);
    } 
    console.log("✅ Test passed")
  }
};
