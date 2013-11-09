
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
  text = text.replace(/\bWITNESSES\b/g, "THESE DUDES I KNOW");

  text = text.replace(/\ballegedly\b/g, "kinda probably");
  text = text.replace(/\bAllegedly\b/g, "Kinda probably");
  text = text.replace(/\bALLEGEDLY\b/g, "KINDA PROBABLY");

  text = text.replace(/\bnew study\b/g, "tumblr post");
  text = text.replace(/\bNew study\b/g, "Tumblr post");
  text = text.replace(/\bNew Study\b/g, "Tumblr Post");
  text = text.replace(/\bNEW STUDY\b/g, "TUMBLR POST");
  text = text.replace(/\bnew studies\b/g, "tumblr posts");
  text = text.replace(/\bNew studies\b/g, "Tumblr posts");
  text = text.replace(/\bNew Studies\b/g, "Tumblr Posts");
  text = text.replace(/\bNEW STUDIES\b/g, "TUMBLR POSTS");

  text = text.replace(/\brebuild\b/g, "avenge");
  text = text.replace(/\bRebuild\b/g, "Avenge");
  text = text.replace(/\bREBUILD\b/g, "AVENGE");
  text = text.replace(/\brebuilding\b/g, "avenging");
  text = text.replace(/\bRebuilding\b/g, "Avenging");
  text = text.replace(/\bREBUILDING\b/g, "AVENGING");

  text = text.replace(/\bspace\b/g, "spaaace");
  text = text.replace(/\bSpace\b/g, "Spaaace");
  text = text.replace(/\bSPACE\b/g, "SPAAACE");

  text = text.replace(/\bgoogle glass\b/g, "virtual boy");
  text = text.replace(/\bGoogle Glass\b/g, "Virtual Boy");
  text = text.replace(/\bGOOGLE GLASS\b/g, "VIRTUAL BOY");
  text = text.replace(/\bgoogle glasses\b/g, "virtual boys");
  text = text.replace(/\bGoogle Glasses\b/g, "Virtual Boys");
  text = text.replace(/\bGOOGLE GLASSES\b/g, "VIRTUAL BOYS");

  text = text.replace(/\bsmartphone\b/g, "pokédex");
  text = text.replace(/\bSmartphone\b/g, "Pokédex");
  text = text.replace(/\bSMARTPHONE\b/g, "POKÉDEX");
  text = text.replace(/\bsmartphones\b/g, "pokédexes");
  text = text.replace(/\bSmartphones\b/g, "Pokédexes");
  text = text.replace(/\bSMARTPHONES\b/g, "POKÉDEXES");

  text = text.replace(/\belectric\b/g, "atomic");
  text = text.replace(/\bElectric\b/g, "Atomic");
  text = text.replace(/\bELECTRIC\b/g, "ATOMIC");

  text = text.replace(/\bsenator\b/g, "elf-lord");
  text = text.replace(/\bSenator\b/g, "Elf-Lord");
  text = text.replace(/\bSENATOR\b/g, "ELF-LORD");
  text = text.replace(/\bsenators\b/g, "elf-lords");
  text = text.replace(/\bSenators\b/g, "Elf-Lords");
  text = text.replace(/\bSENATORS\b/g, "ELF-LORDS");

  text = text.replace(/\bcar\b/g, "cat");
  text = text.replace(/\bcars\b/g, "cats");
  text = text.replace(/\bCar\b/g, "Cat");
  text = text.replace(/\bCars\b/g, "Cats");
  text = text.replace(/\bCAR\b/g, "CAT");
  text = text.replace(/\bCARS\b/g, "CATS");

  text = text.replace(/\belection\b/g, "eating contest");
  text = text.replace(/\bElection\b/g, "Eating Contest");
  text = text.replace(/\bELECTION\b/g, "EATING CONTEST");
  text = text.replace(/\belections\b/g, "eating contests");
  text = text.replace(/\bElections\b/g, "Eating Contests");
  text = text.replace(/\bELECTIONS\b/g, "EATING CONTESTS");

  text = text.replace(/congressional leaders/g, "river spirits");
  text = text.replace(/Congressional leaders/g, "River spirits");
  text = text.replace(/Congressional Leaders/g, "River Spirits");
  text = text.replace(/CONGRESSIONAL LEADERS/g, "RIVER SPIRITS");

  text = text.replace(/Homeland security/g, "Homestar runner");
  text = text.replace(/Homeland Security/g, "Homestar Runner");
  text = text.replace(/HOMELAND SECURITY/g, "HOMESTAR RUNNER");

  text = text.replace(/could not be reached for comment/g, "is guilty and everyone knows it");
  text = text.replace(/Could Not Be Reached For Comment/g, "Is Guilty And Everyone Knows It");
  text = text.replace(/COULD NOT BE REACHED FOR COMMENT/g, "IS GUILTY AND EVERYONE KNOWS IT");

  return text;
};

if (typeof module !== 'undefined') {
  module.exports = XkcdSubstitution;
}

