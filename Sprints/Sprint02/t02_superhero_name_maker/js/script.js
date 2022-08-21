const prom1 = prompt('What animal is the superhero most similar to?');

if (!prom1 || prom1.length > 20 || prom1.includes(' ') || !prom1.match(/^[A-Za-z]*$/)) {
  alert('Wrong animal name!');
} else {
  let prom2 = prompt('Is the superhero male or female? Leave blank if unknown or other.');

  if (!prom1.match(/^[A-Za-z]*$/)) {
    alert('Wrong gender type!');
  } else {
    let prom3 = prompt('How old is the superhero?');

    if (!prom3.match(/^[1-9]+[0-9]*$/) || prom3 > 99999) {
      alert('Wrong age type!');
    } else {
      if (prom2 === 'male' && prom3 < 18) {
        alert(prom1 + '-boy');
      } else if (prom2.match(/^male$/) && prom3 > 18) {
        alert(prom1 + '-man');
      } else if (prom2.match(/^female$/) && prom3 < 18) {
        alert(prom1 + '-girl');
      } else if (prom2.match(/^female$/) && prom3 > 18) {
        alert(prom1 + '-woman');
      } else if (prom3 > 18) {
        alert(prom1 + '-hero');
      } else if (prom3 < 18) {
        alert(prom1 + '-kid');
      }
    }
  }
}
