function lottery(names) {
  const firstFive = names.slice(0, 5);
  const everyTenth = [names[9], names[19], names[29], names[39], names[49]];
  const firstTen = firstFive.concat(everyTenth);

  let random = Math.floor(Math.random() * names.length);

  /*
    burada özellikle random değerinin 0,1,2,3,4,9,19,29,39,49
    olmadığını tekrar tekrar kontrol etmenin zorluğunu hissettirmek
    lazım ki döngülere geçince oh desinler :)
  */

  if ([0, 1, 2, 3, 4, 9, 19, 29, 39, 49].indexOf(random) > 0) {
    random = Math.floor(Math.random() * names.length);

    if ([0, 1, 2, 3, 4, 9, 19, 29, 39, 49].indexOf(random) > 0) {
      random = Math.floor(Math.random() * names.length);
    }
  }

  firstTen.push(names[random]);

  return firstTen;
}

module.exports = lottery;