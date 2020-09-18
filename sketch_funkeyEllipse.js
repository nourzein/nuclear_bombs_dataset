var totals;
var atmospheric;
var underground;
var shouldExport = true;
var exportFilename = "my-sketch.svg";

function preload() {
  totals = loadTable("data/totals.csv", "csv", "header");
  atmospheric = loadTable("data/atmospheric.csv", "csv", "header");
  underground = loadTable("data/underground.csv", "csv", "header");
}

function setup() {
  //   var canvasW = 300;
  //   var canvasH = 200;

  //   if (shouldExport) {
  //     createCanvas(canvasW, canvasH, SVG);
  //   } else {
  //     createCanvas(canvasW, canvasH);
  //   }
  // Add a final argument of `SVG` to your createCanvas command
  createCanvas(4500, 700);
  //createCanvas(600, 300, SVG);
  background(0);
  angleMode(DEGREES);

  x = 100;
  y = 200;
  textAlign(CENTER);
  textSize(50);
  noFill();
  text("Nuclear Testing and the Effect of Treaties", width / 2);

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
  var colWidth = 100;

  // draw country name labels on the left edge of the table
  //   textStyle(BOLD);
  //   textAlign(RIGHT);

  //   for (var c = 1; c < table.getColumnCount(); c++) {
  //     text(atmospheric.columns[c], x - colWidth, y);
  //     //
  //     y += rowHeight;
  //   }
  // draw year labels in the header row
  x = 50;
  y = 700;
  textStyle(NORMAL);
  textAlign(BOLD, CENTER);
  for (var r = 0; r < table.getRowCount(); r++) {
    var year = table.getString(r, 0);
    text(year, x, y - rowHeight);

    x += colWidth;
  }

  fill(255);
  stroke(4);
  line(50, 600, 4000, 600);

  // print out the total for each country, one column at a time
  x = 50;

  for (var r = 0; r < table.getRowCount(); r++) {
    y = 300;

    for (var c = 1; c < table.getColumnCount(); c++) {
      var cell = table.getNum(r, c) * 4;
      var bell = underground.getNum(r, c) * 4;
      //var value = map(cell, 0, 100, 1, 180);
      //fill(255, 128, 128, 220);
      strokeCap(SQUARE);
      //stroke(255, 89, 0);
      //fill(colors[r]);
      var country = table.columns[c];
      var clr = palette.colorForValue(country);
      noFill();
      stroke(clr);
      strokeWeight(1);
      ellipse(x, y, 50, cell);
      //text(value, x, y);
      //   y += rowHeight;
    }
    x += colWidth;
  }
  //save("my-sketch.svg");
  //   if (shouldExport) {
  //     createCanvas(canvasW, canvasH, SVG);
  //   } else {
  //     createCanvas(canvasW, canvasH);
  //   }
}
