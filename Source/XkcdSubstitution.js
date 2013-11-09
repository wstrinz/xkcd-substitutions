
var XkcdSubstitution = function() {
};

XkcdSubstitution.prototype.traverse = function(node) {
  var child, next;

  switch (node.nodeType)  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        this.traverse(child);
        child = next;
      }
      break;

    case 3: // Text node
      node.nodeValue = this.transformText(node.nodeValue);
      break;
  }
};

XkcdSubstitution.prototype.transformText = function(text) {

  text = text.replace(/\bwitnesses\b/g, "these dudes I know");
  text = text.replace(/\bWitnesses\b/g, "These dudes I know");

  text = text.replace(/\ballegedly\b/g, "kinda probably");
  text = text.replace(/\bAllegedly\b/g, "Kinda probably");

  text = text.replace(/\bnew study\b/g, "tumblr post");
  text = text.replace(/\bNew study\b/g, "Tumblr post");
  text = text.replace(/\bnew studies\b/g, "tumblr posts");
  text = text.replace(/\bNew studies\b/g, "Tumblr posts");

  text = text.replace(/\brebuild\b/g, "avenge");
  text = text.replace(/\bRebuild\b/g, "Avenge");
  text = text.replace(/\brebuilding\b/g, "avenging");
  text = text.replace(/\bRebuilding\b/g, "Avenging");

  text = text.replace(/\bspace\b/g, "spaaace");
  text = text.replace(/\bSpace\b/g, "Spaaace");

  text = text.replace(/\bgoogle glass\b/g, "virtual boy");
  text = text.replace(/\bGoogle Glass\b/g, "Virtual Boy");
  text = text.replace(/\bgoogle glasses\b/g, "virtual boys");
  text = text.replace(/\bGoogle Glasses\b/g, "Virtual Boys");

  text = text.replace(/\bsmartphone\b/g, "pokedex");
  text = text.replace(/\bSmartphone\b/g, "Pokedex");
  text = text.replace(/\bsmartphones\b/g, "pokedexes");
  text = text.replace(/\bSmartphones\b/g, "Pokedexes");

  text = text.replace(/\belectric\b/g, "atomic");
  text = text.replace(/\bElectric\b/g, "Atomic");

  text = text.replace(/\bsenator\b/g, "elf-lord");
  text = text.replace(/\bSenator\b/g, "Elf-lord");
  text = text.replace(/\bsenators\b/g, "elf-lords");
  text = text.replace(/\bSenators\b/g, "Elf-lords");

  text = text.replace(/\bcar\b/g, "cat");
  text = text.replace(/\bcars\b/g, "cats");
  text = text.replace(/\bCar\b/g, "Cat");
  text = text.replace(/\bCars\b/g, "Cats");

  text = text.replace(/\belection\b/g, "eating contest");
  text = text.replace(/\bElection\b/g, "Eating Contest");

  text = text.replace(/congressional leaders/g, "river spirits");
  text = text.replace(/Congressional leaders/g, "River spirits");
  text = text.replace(/Congressional Leaders/g, "River Spirits");

  text = text.replace(/Homeland Security/g, "Homestar Runner");

  text = text.replace(/could not be reached for comment/g, "is guilty and everyone knows it");
  text = text.replace(/Could Not Be Reached For Comment/g, "Is Guilty And Everyone Knows It");

  return text;
};

if (typeof module !== 'undefined') {
  module.exports = XkcdSubstitution;
}

