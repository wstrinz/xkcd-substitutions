var assert = require('assert');
var should = require('should');
var XkcdSubstitution = require('../Source/XkcdSubstitution.js');

describe('XkcdSubstitution', function() {

  var substitution = new XkcdSubstitution;

  describe("transformText", function() {
    it("converts 'allegedly'", function() {
      substitution
        .transformText("The offense allegedly occured")
        .should.equal("The offense kinda probably occured");
    });
  });
});

