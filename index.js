fs = require('fs')
data = `
MMM.           .MMM
MMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMM      _____________________________________
MMMMMMMMMMMMMMMMMMMMM    |                                     |
MMMMMMMMMMMMMMMMMMMMMMM   | Approachable is better than simple. |
MMMMMMMMMMMMMMMMMMMMMMMM   |_   _________________________________|
MMMM::- -:::::::- -::MMMM    |/
MM~:~ 00~:::::~ 00~:~MM
.. MMMMM::.00:::+:::.00::MMMMM ..
.MM::::: ._. :::::MM.
  MMMM;:::::;MMMM
-MM        MMMMMMM
^  M+     MMMMMMMMM
MMMMMMM MM MM MM
    MM MM MM MM
    MM MM MM MM
 .~~MM~MM~MM~MM~~.
~~~~MM:~MM~~~MM~:MM~~~~
~~~~~~==~==~~~==~==~~~~~~
~~~~~~==~==~==~==~~~~~~
  :~==~==~==~==~~
`;

// console.log(data);

// regex = new RegExp('.*| (.+) |.*');
// regex = new RegExp(/\| .+ \|/gmi);
let  match = data.match(/\| (.+) \|/gm);

console.log('Looking for a match:');
console.log(match[1].substring(2, match[1].length - 2));
