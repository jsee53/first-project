var i1 = '접기';
var i2 = '접기';
var i3 = '접기';

function sel(self,i) {
  if (i === '펼치기') {
    hide(self);
  } else {
    show(self);
  }
}

function hide(self) {
  self.style.display = 'none';
}

function show(self) {
  self.style.display = '';
}

function day() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();

  var debut = new Date(2016, 08, 08);
  var today = new Date(year, month, day);

  var btMs = today.getTime() - debut.getTime();
  console.log(btMs);
  return btMs / (1000 * 60 * 60 * 24);
}
