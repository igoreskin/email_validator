// Both parts of the email, before and after the @, should consist of 
// at least one and at most 32 characters comprisiong only letter, 
// digits and/or dots(a-z,A-Z,0-9,.). For example, "kate@test.com" and
// ".@." are valid, but "@test.com" is not.

function isValid(str) {
  const idx = str.indexOf('@');
  return ((/^[a-zA-Z0-9.]{1,32}$/).test(str.slice(0, idx)) && (/^[a-zA-Z0-9.]{1,32}$/).test(str.slice(idx + 1)));
}

console.log(isValid('@koira.com'))