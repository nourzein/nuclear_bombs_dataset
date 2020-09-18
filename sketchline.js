var totals;
var atmospheric;
var underground;
//var fileLength = 57;
// var shouldExport = true;
// var exportFilename = "my-sketch.svg";

function preload() {
  totals = loadTable("data/total_pivot.csv", "csv", "header");
  atmospheric = loadTable("data/atmosphere_pivot.csv", "csv", "header");
  underground = loadTable("data/underground_pivot.csv", "csv", "header");
  //treaties = loadTable("data/treaties.csv", "csv", "header");
}
console.log(underground);

function setup() {
  // Add a final argument of `SVG` to your createCanvas command

  createCanvas(1690, 1000);
  background(0);
  angleMode(DEGREES);
  textAlign(CENTER);

  x = 200;
  y = 400;
  textAlign(CENTER);
  textSize(50);
  // fill(255);
  // text("Nuclear Testing and the Effect of Treaties", width / 2);

  // pick one of the three data files to work with and call it 'table'
  var table = totals;

  // log the whole dataset to the console so we can poke around in it
  print(table);

  // set up typography
  textFont("SERIF");
  textSize(12);
  fill(255);
  noStroke();

  var palette = Brewer.qualitative("Set1", table.columns);

  var x = 200;
  var y = 100;
  var rowHeight = 80;
  var colWidth = 120;

  push();
  //fill(255);
  stroke(255);
  strokeWeight(1);
  line(30, 900, 6500, 900);
  line(30, 930, 6500, 930);
  pop();

  x = 70;
  y = 995;
  textStyle(NORMAL);
  textAlign(BOLD, CENTER);
  for (var r = 0; r < table.getRowCount(); r++) {
    var year = table.getString(r, 0);
    text(year, x, y - rowHeight);
    // if (r < 18) {
    //   var year = table.getString(r, 0);
    //   text(year, x, y - rowHeight);
    // } else if (r > 17 && r < 52) {
    //   y = 975;
    //   var year = table.getString(r, 0);
    //   text(year, x, y - rowHeight);
    // } else {
    //   y = 1010;
    //   var year = table.getString(r, 0);
    //   text(year, x, y - rowHeight);
    // }

    x += colWidth;
  }

  // print out the total for each country, one column at a time
  x = 70;

  for (var r = 0; r < table.getRowCount(); r++) {
    y = 700;
    for (var c = 1; c < table.getColumnCount(); c++) {
      var tell = table.getNum(r, c) * 0.5;
      var cell = atmospheric.getNum(r, c) * 1.5;
      var bell = underground.getNum(r, c) * 1.5;
      //var value = map(cell, 0, 100, 1, 180);
      //fill(255, 128, 128, 220);
      // strokeCap(SQUARE);
      //stroke(255, 89, 0);
      //fill(colors[r]);
      var country = table.columns[c];
      var clr = palette.colorForValue(country);
      clr._array[3] = 1;

      noFill();
      stroke(clr);
      strokeCap(ROUND);
      strokeWeight(6);
      //arc(x, y, bell, bell, 1, 180);

      // push();
      // rotate(180);
      ellipse(x, y, cell, bell);
      //x += 3;
      // pop();
      //ellipse(x, y, 50, cell);
      //text(value, x, y);
      //   y += rowHeight;
    }

    y = 350;
    for (var c = 1; c < table.getColumnCount(); c++) {
      var tell = table.getNum(r, c);
      //var value = map(cell, 0, 100, 1, 180);
      //fill(255, 128, 128, 220);
      strokeCap(ROUND);
      //stroke(255, 89, 0);
      //fill(colors[r]);
      var country = table.columns[c];
      var clr = palette.colorForValue(country);
      //fill(clr);
      stroke(clr);
      strokeWeight(4);
      ellipse(x, y, 50, tell);

      //text(value, x, y);
      //   y += rowHeight;
    }

    x += colWidth;
  }

  // save("my-sketch.svg");
}
