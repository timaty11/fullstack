let guestList = new WeakSet;
let menu = new Map;
let bankVault = new WeakMap;
let coinCollection = new Set;


function testGuestList() {
  guestList.add(new Date);
  guestList.add(new String);
  guestList.add(new Map);

  guestList.add("Vilsan");
  guestList.add("Apach");
  guestList.delete("Kazumusik");
  guestList.has("Mark");
}

function testMenu() {
  menu.add("tea", 1488);
  menu.add("juice", 20);
  menu.add("cucumber", 5);
  menu.add("borshch", 50);
  menu.add("meat", 450);

  menu.size;

  menu.has("tea");
  menu.get("tea");
  menu.delete("tea");
  menu.has("tea");

  menu.size;
}
