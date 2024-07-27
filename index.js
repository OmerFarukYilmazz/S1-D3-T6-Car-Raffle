function lottery(names) {
  /* kodlar buraya */
  const luckys = new Array();
  for (let i = 0; i < 5; i++) {
    luckys.push(names[i]);
  }
  for (let i = 9; i < 50; i += 10) {
    luckys.push(names[i]);
  }
  let random = Math.floor(Math.random() * names.length);
  luckys.push(names[random]);
  return luckys;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = lottery;
