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

    it("converts 'witnesses'", function() {
      substitution
        .transformText("Witnesses saw a white van leaving the scene")
        .should.equal("These dudes I know saw a white van leaving the scene");
    });

    it("converts 'new study'", function() {
      substitution
        .transformText("A new study has caused a stir in Parliament")
        .should.equal("A tumblr post has caused a stir in Parliament");
    });

    it("converts 'rebuild'", function() {
      substitution
        .transformText("New plans to rebuild the World Trade Center")
        .should.equal("New plans to avenge the World Trade Center");
    });

    it("converts 'space'", function() {
      substitution
        .transformText("Space, the final frontier")
        .should.equal("Spaaace, the final frontier");
    });

    it("converts 'google glass'", function() {
      substitution
        .transformText("Ticket issued to driver wearing Google Glass")
        .should.equal("Ticket issued to driver wearing Virtual Boy");
    });

    it("converts 'smartphone'", function() {
      substitution
        .transformText("Smartphone patent war intensifies")
        .should.equal("Pokedex patent war intensifies");
    });

    it("converts 'electric'", function() {
      substitution
        .transformText("Bad news for electric toothbrush manufacturers")
        .should.equal("Bad news for atomic toothbrush manufacturers");
    });

    it("converts 'senator'", function() {
      substitution
        .transformText("U.S. budget talks hit snag, Republican senator says")
        .should.equal("U.S. budget talks hit snag, Republican elf-lord says");
    });

    it("converts 'car'", function() {
      substitution
        .transformText("Rounds Fired As Armed Police Stop Car")
        .should.equal("Rounds Fired As Armed Police Stop Cat");
    });

    it("converts 'election'", function() {
      substitution
        .transformText("Australian election enters final stage")
        .should.equal("Australian eating contest enters final stage");
    });

  });
});

