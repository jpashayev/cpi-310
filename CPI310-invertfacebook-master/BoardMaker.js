var random1, random2, random3, random4, random5, random6, random7, random8, random9;
var randomArray = [0,0,0,0,0,0,0,0,0];
var Array1 = [1,2,3,4,5,6,7,8,9];
var Array2 = [4,5,6,7,8,9,1,2,3];
var Array3 = [7,8,9,1,2,3,4,5,6];
var Array4 = [2,3,4,5,6,7,8,9,1];
var Array5 = [5,6,7,8,9,1,2,3,4];
var Array6 = [8,9,1,2,3,4,5,6,7];
var Array7 = [3,4,5,6,7,8,9,1,2];
var Array8 = [6,7,8,9,1,2,3,4,5];
var Array9 = [9,1,2,3,4,5,6,7,8];

function Randomize()
{
  for(var r = 0; r < (randomArray.length); r++)
  {
    var x = Math.random();
    for (var j = 0; j < randomArray.length-2; j++)
    {
        if(x <= 0.5 & j < randomArray.length-2)
        {
          var placeholder1 = Array1[j];
          Array1[j] = Array1[j+1];
          Array1[j+1] = placeholder1;
          var placeholder1 = Array2[j];
          Array2[j] = Array2[j+1];
          Array2[j+1] = placeholder1;
          var placeholder1 = Array3[j];
          Array3[j] = Array3[j+1];
          Array3[j+1] = placeholder1;
          var placeholder1 = Array4[j];
          Array4[j] = Array4[j+1];
          Array4[j+1] = placeholder1;
          var placeholder1 = Array5[j];
          Array5[j] = Array5[j+1];
          Array5[j+1] = placeholder1;
          var placeholder1 = Array6[j];
          Array6[j] = Array6[j+1];
          Array6[j+1] = placeholder1;
          var placeholder1 = Array7[j];
          Array7[j] = Array7[j+1];
          Array7[j+1] = placeholder1;
          var placeholder1 = Array8[j];
          Array8[j] = Array8[j+1];
          Array8[j+1] = placeholder1;
          var placeholder1 = Array9[j];
          Array9[j] = Array9[j+1];
          Array9[j+1] = placeholder1;
        }
        if(x <= 0.5 & j >= randomArray.length-1)
        {
          var placeholder1 = Array1[8];
          Array1[8] = Array1[0];
          Array1[0] = placeholder1;
          var placeholder1 = Array2[8];
          Array2[8] = Array2[0];
          Array2[0] = placeholder1;
          var placeholder1 = Array3[8];
          Array3[8] = Array3[0];
          Array3[0] = placeholder1;
          var placeholder1 = Array4[8];
          Array4[8] = Array4[0];
          Array4[0] = placeholder1;
          var placeholder1 = Array5[8];
          Array5[8] = Array5[0];
          Array5[0] = placeholder1;
          var placeholder1 = Array6[8];
          Array6[8] = Array6[0];
          Array6[0] = placeholder1;
          var placeholder1 = Array7[8];
          Array7[8] = Array7[0];
          Array7[0] = placeholder1;
          var placeholder1 = Array8[8];
          Array8[8] = Array8[0];
          Array8[0] = placeholder1;
          var placeholder1 = Array9[8];
          Array9[8] = Array9[0];
          Array9[0] = placeholder1;
        }
     }
     if(x > 0.5)
     {
       var ArrayHolder1 = Array1;
       Array1 = Array2;
       Array2 = ArrayHolder1;
       var ArrayHolder4 = Array4;
       Array4 = Array5;
       Array5 = ArrayHolder4;
       var ArrayHolder7 = Array7;
       Array7 = Array8;
       Array8 = ArrayHolder7;
     }
     if(x <= 0.5)
     {
       var ArrayHolder3 = Array3;
       Array3 = Array2;
       Array2 = ArrayHolder3;
       var ArrayHolder6 = Array6;
       Array6 = Array5;
       Array5 = ArrayHolder6;
       var ArrayHolder9 = Array9;
       Array9 = Array8;
       Array8 = ArrayHolder9;
     }
  }
  var check1 = Array1[0] + Array1[1] + Array1[2] + Array2[0] + Array2[1] + Array2[2] + Array3[0] + Array3[1] + Array3[2];
  var check2 = Array1[3] + Array1[4] + Array1[5] + Array2[3] + Array2[4] + Array2[5] + Array3[3] + Array3[4] + Array3[5];
  var check3 = Array1[6] + Array1[7] + Array1[8] + Array2[6] + Array2[7] + Array2[8] + Array3[6] + Array3[7] + Array3[8];
  if(check1 == 45){}
  else{Randomize();}
  if(check2 == 45){}
  else{Randomize();}
  if(check3 == 45){}
  else{Randomize();}
  var check4 = Array4[0] + Array4[1] + Array4[2] + Array5[0] + Array5[1] + Array5[2] + Array6[0] + Array6[1] + Array6[2];
  var check5 = Array4[3] + Array4[4] + Array4[5] + Array5[3] + Array5[4] + Array5[5] + Array6[3] + Array6[4] + Array6[5];
  var check6 = Array4[6] + Array4[7] + Array4[8] + Array5[6] + Array5[7] + Array5[8] + Array6[6] + Array6[7] + Array6[8];
  if(check4 == 45){}
  else{Randomize();}
  if(check5 == 45){}
  else{Randomize();}
  if(check6 == 45){}
  else{Randomize();}
  var check7 = Array7[0] + Array7[1] + Array7[2] + Array8[0] + Array8[1] + Array8[2] + Array9[0] + Array9[1] + Array9[2];
  var check8 = Array7[3] + Array7[4] + Array7[5] + Array8[3] + Array8[4] + Array8[5] + Array9[3] + Array9[4] + Array9[5];
  var check9 = Array7[6] + Array7[7] + Array7[8] + Array8[6] + Array8[7] + Array8[8] + Array9[6] + Array9[7] + Array9[8];
  if(check7 == 45){}
  else{Randomize();}
  if(check8 == 45){}
  else{Randomize();}
  if(check9 == 45){}
  else{Randomize();}
}

var x1;
function UpdateTableMedium()
{
    Randomize();
    for (var i = 0; i < randomArray.length; i++)
    {
        Cells1 = 'cell' + (i + 1);
        Cells2 = 'cell' + (i + 11);
        Cells3 = 'cell' + (i + 21);
        Cells4 = 'cell' + (i + 31);
        Cells5 = 'cell' + (i + 41);
        Cells6 = 'cell' + (i + 51);
        Cells7 = 'cell' + (i + 61);
        Cells8 = 'cell' + (i + 71);
        Cells9 = 'cell' + (i + 81);
        document.getElementById(Cells1).innerHTML = Array1[i];
        document.getElementById(Cells2).innerHTML = Array2[i];
        document.getElementById(Cells3).innerHTML = Array3[i];
        document.getElementById(Cells4).innerHTML = Array4[i];
        document.getElementById(Cells5).innerHTML = Array5[i];
        document.getElementById(Cells6).innerHTML = Array6[i];
        document.getElementById(Cells7).innerHTML = Array7[i];
        document.getElementById(Cells8).innerHTML = Array8[i];
        document.getElementById(Cells9).innerHTML = Array9[i];
        document.getElementById("Solution").style.visibility = "visible";
        document.getElementById(Cells1).style.visibility = "hidden";
        document.getElementById(Cells2).style.visibility = "hidden";
        document.getElementById(Cells3).style.visibility = "hidden";
        document.getElementById(Cells4).style.visibility = "hidden";
        document.getElementById(Cells5).style.visibility = "hidden";
        document.getElementById(Cells6).style.visibility = "hidden";
        document.getElementById(Cells7).style.visibility = "hidden";
        document.getElementById(Cells8).style.visibility = "hidden";
        document.getElementById(Cells9).style.visibility = "hidden";
    }
    var x1 = Math.floor(Math.random() * 5);
    var y1 = Math.floor(Math.random() * 3) + 5;
    var x2 = Math.floor(Math.random() * 5);
    var y2 = Math.floor(Math.random() * 3) + 5;
    var x3 = Math.floor(Math.random() * 5);
    var y3 = Math.floor(Math.random() * 3) + 5;
    var x4 = Math.floor(Math.random() * 5);
    var y4 = Math.floor(Math.random() * 3) + 5;
    var x5 = Math.floor(Math.random() * 5);
    var y5 = Math.floor(Math.random() * 3) + 5;
    var x6 = Math.floor(Math.random() * 5);
    var y6 = Math.floor(Math.random() * 3) + 5;
    var x7 = Math.floor(Math.random() * 5);
    var y7 = Math.floor(Math.random() * 3) + 5;
    var x8 = Math.floor(Math.random() * 5);
    var y8 = Math.floor(Math.random() * 3) + 5;
    var x9 = Math.floor(Math.random() * 5);
    var y9 = Math.floor(Math.random() * 3) + 5;
    document.getElementById('cellE1').value = null;
    document.getElementById('cellE2').value = null;
    document.getElementById('cellE3').value = null;
    document.getElementById('cellE4').value = null;
    document.getElementById('cellE5').value = null;
    document.getElementById('cellE6').value = null;
    document.getElementById('cellE7').value = null;
    document.getElementById('cellE8').value = null;
    document.getElementById('cellE9').value = null;
    document.getElementById('cellE11').value = null;
    document.getElementById('cellE12').value = null;
    document.getElementById('cellE13').value = null;
    document.getElementById('cellE14').value = null;
    document.getElementById('cellE15').value = null;
    document.getElementById('cellE16').value = null;
    document.getElementById('cellE17').value = null;
    document.getElementById('cellE18').value = null;
    document.getElementById('cellE19').value = null;
    document.getElementById('cellE21').value = null;
    document.getElementById('cellE22').value = null;
    document.getElementById('cellE23').value = null;
    document.getElementById('cellE24').value = null;
    document.getElementById('cellE25').value = null;
    document.getElementById('cellE26').value = null;
    document.getElementById('cellE27').value = null;
    document.getElementById('cellE28').value = null;
    document.getElementById('cellE29').value = null;
    document.getElementById('cellE31').value = null;
    document.getElementById('cellE32').value = null;
    document.getElementById('cellE33').value = null;
    document.getElementById('cellE34').value = null;
    document.getElementById('cellE35').value = null;
    document.getElementById('cellE36').value = null;
    document.getElementById('cellE37').value = null;
    document.getElementById('cellE38').value = null;
    document.getElementById('cellE39').value = null;
    document.getElementById('cellE41').value = null;
    document.getElementById('cellE42').value = null;
    document.getElementById('cellE43').value = null;
    document.getElementById('cellE44').value = null;
    document.getElementById('cellE45').value = null;
    document.getElementById('cellE46').value = null;
    document.getElementById('cellE47').value = null;
    document.getElementById('cellE48').value = null;
    document.getElementById('cellE49').value = null;
    document.getElementById('cellE51').value = null;
    document.getElementById('cellE52').value = null;
    document.getElementById('cellE53').value = null;
    document.getElementById('cellE54').value = null;
    document.getElementById('cellE55').value = null;
    document.getElementById('cellE56').value = null;
    document.getElementById('cellE57').value = null;
    document.getElementById('cellE58').value = null;
    document.getElementById('cellE59').value = null;
    document.getElementById('cellE61').value = null;
    document.getElementById('cellE62').value = null;
    document.getElementById('cellE63').value = null;
    document.getElementById('cellE64').value = null;
    document.getElementById('cellE65').value = null;
    document.getElementById('cellE66').value = null;
    document.getElementById('cellE67').value = null;
    document.getElementById('cellE68').value = null;
    document.getElementById('cellE69').value = null;
    document.getElementById('cellE71').value = null;
    document.getElementById('cellE72').value = null;
    document.getElementById('cellE73').value = null;
    document.getElementById('cellE74').value = null;
    document.getElementById('cellE75').value = null;
    document.getElementById('cellE76').value = null;
    document.getElementById('cellE77').value = null;
    document.getElementById('cellE78').value = null;
    document.getElementById('cellE79').value = null;
    document.getElementById('cellE81').value = null;
    document.getElementById('cellE82').value = null;
    document.getElementById('cellE83').value = null;
    document.getElementById('cellE84').value = null;
    document.getElementById('cellE85').value = null;
    document.getElementById('cellE86').value = null;
    document.getElementById('cellE87').value = null;
    document.getElementById('cellE88').value = null;
    document.getElementById('cellE89').value = null;
    if(x1 == 0){document.getElementById('cellE1').value = Array1[x1];}
    if(x1 == 1){document.getElementById('cellE2').value = Array1[x1];}
    if(x1 == 2){document.getElementById('cellE3').value = Array1[x1];}
    if(x1 == 3){document.getElementById('cellE4').value = Array1[x1];}
    if(x1 == 4){document.getElementById('cellE5').value = Array1[x1];}
    if(y1 == 5){document.getElementById('cellE6').value = Array1[y1];}
    if(y1 == 6){document.getElementById('cellE7').value = Array1[y1];}
    if(y1 == 7){document.getElementById('cellE8').value = Array1[y1];}
    if(y1 == 8){document.getElementById('cellE9').value = Array1[y1];}
    if(x2 == 0){document.getElementById('cellE11').value = Array2[x2];}
    if(x2 == 1){document.getElementById('cellE12').value = Array2[x2];}
    if(x2 == 2){document.getElementById('cellE13').value = Array2[x2];}
    if(x2 == 3){document.getElementById('cellE14').value = Array2[x2];}
    if(x2 == 4){document.getElementById('cellE15').value = Array2[x2];}
    if(y2 == 5){document.getElementById('cellE16').value = Array2[y2];}
    if(y2 == 6){document.getElementById('cellE17').value = Array2[y2];}
    if(y2 == 7){document.getElementById('cellE18').value = Array2[y2];}
    if(y2 == 8){document.getElementById('cellE19').value = Array2[y2];}
    if(x3 == 0){document.getElementById('cellE21').value = Array3[x3];}
    if(x3 == 1){document.getElementById('cellE22').value = Array3[x3];}
    if(x3 == 2){document.getElementById('cellE23').value = Array3[x3];}
    if(x3 == 3){document.getElementById('cellE24').value = Array3[x3];}
    if(x3 == 4){document.getElementById('cellE25').value = Array3[x3];}
    if(y3 == 5){document.getElementById('cellE26').value = Array3[y3];}
    if(y3 == 6){document.getElementById('cellE27').value = Array3[y3];}
    if(y3 == 7){document.getElementById('cellE28').value = Array3[y3];}
    if(y3 == 8){document.getElementById('cellE29').value = Array3[y3];}
    if(x4 == 0){document.getElementById('cellE31').value = Array4[x4];}
    if(x4 == 1){document.getElementById('cellE32').value = Array4[x4];}
    if(x4 == 2){document.getElementById('cellE33').value = Array4[x4];}
    if(x4 == 3){document.getElementById('cellE34').value = Array4[x4];}
    if(x4 == 4){document.getElementById('cellE35').value = Array4[x4];}
    if(y4 == 5){document.getElementById('cellE36').value = Array4[y4];}
    if(y4 == 6){document.getElementById('cellE37').value = Array4[y4];}
    if(y4 == 7){document.getElementById('cellE38').value = Array4[y4];}
    if(y4 == 8){document.getElementById('cellE39').value = Array4[y4];}
    if(x5 == 0){document.getElementById('cellE41').value = Array5[x5];}
    if(x5 == 1){document.getElementById('cellE42').value = Array5[x5];}
    if(x5 == 2){document.getElementById('cellE43').value = Array5[x5];}
    if(x5 == 3){document.getElementById('cellE44').value = Array5[x5];}
    if(x5 == 4){document.getElementById('cellE45').value = Array5[x5];}
    if(y5 == 5){document.getElementById('cellE46').value = Array5[y5];}
    if(y5 == 6){document.getElementById('cellE47').value = Array5[y5];}
    if(y5 == 7){document.getElementById('cellE48').value = Array5[y5];}
    if(y5 == 8){document.getElementById('cellE49').value = Array5[y5];}
    if(x6 == 0){document.getElementById('cellE51').value = Array6[x6];}
    if(x6 == 1){document.getElementById('cellE52').value = Array6[x6];}
    if(x6 == 2){document.getElementById('cellE53').value = Array6[x6];}
    if(x6 == 3){document.getElementById('cellE54').value = Array6[x6];}
    if(x6 == 4){document.getElementById('cellE55').value = Array6[x6];}
    if(y6 == 5){document.getElementById('cellE56').value = Array6[y6];}
    if(y6 == 6){document.getElementById('cellE57').value = Array6[y6];}
    if(y6 == 7){document.getElementById('cellE58').value = Array6[y6];}
    if(y6 == 8){document.getElementById('cellE59').value = Array6[y6];}
    if(x7 == 0){document.getElementById('cellE61').value = Array7[x7];}
    if(x7 == 1){document.getElementById('cellE62').value = Array7[x7];}
    if(x7 == 2){document.getElementById('cellE63').value = Array7[x7];}
    if(x7 == 3){document.getElementById('cellE64').value = Array7[x7];}
    if(x7 == 4){document.getElementById('cellE65').value = Array7[x7];}
    if(y7 == 5){document.getElementById('cellE66').value = Array7[y7];}
    if(y7 == 6){document.getElementById('cellE67').value = Array7[y7];}
    if(y7 == 7){document.getElementById('cellE68').value = Array7[y7];}
    if(y7 == 8){document.getElementById('cellE69').value = Array7[y7];}
    if(x8 == 0){document.getElementById('cellE71').value = Array8[x8];}
    if(x8 == 1){document.getElementById('cellE72').value = Array8[x8];}
    if(x8 == 2){document.getElementById('cellE73').value = Array8[x8];}
    if(x8 == 3){document.getElementById('cellE74').value = Array8[x8];}
    if(x8 == 4){document.getElementById('cellE75').value = Array8[x8];}
    if(y8 == 5){document.getElementById('cellE76').value = Array8[y8];}
    if(y8 == 6){document.getElementById('cellE77').value = Array8[y8];}
    if(y8 == 7){document.getElementById('cellE78').value = Array8[y8];}
    if(y8 == 8){document.getElementById('cellE79').value = Array8[y8];}
    if(x9 == 0){document.getElementById('cellE81').value = Array9[x9];}
    if(x9 == 1){document.getElementById('cellE82').value = Array9[x9];}
    if(x9 == 2){document.getElementById('cellE83').value = Array9[x9];}
    if(x9 == 3){document.getElementById('cellE84').value = Array9[x9];}
    if(x9 == 4){document.getElementById('cellE85').value = Array9[x9];}
    if(y9 == 5){document.getElementById('cellE86').value = Array9[y9];}
    if(y9 == 6){document.getElementById('cellE87').value = Array9[y9];}
    if(y9 == 7){document.getElementById('cellE88').value = Array9[y9];}
    if(y9 == 8){document.getElementById('cellE89').value = Array9[y9];}
}

var x1;
function UpdateTableEasy()
{
    Randomize();
    for (var i = 0; i < randomArray.length; i++)
    {
        Cells1 = 'cell' + (i + 1);
        Cells2 = 'cell' + (i + 11);
        Cells3 = 'cell' + (i + 21);
        Cells4 = 'cell' + (i + 31);
        Cells5 = 'cell' + (i + 41);
        Cells6 = 'cell' + (i + 51);
        Cells7 = 'cell' + (i + 61);
        Cells8 = 'cell' + (i + 71);
        Cells9 = 'cell' + (i + 81);
        document.getElementById(Cells1).innerHTML = Array1[i];
        document.getElementById(Cells2).innerHTML = Array2[i];
        document.getElementById(Cells3).innerHTML = Array3[i];
        document.getElementById(Cells4).innerHTML = Array4[i];
        document.getElementById(Cells5).innerHTML = Array5[i];
        document.getElementById(Cells6).innerHTML = Array6[i];
        document.getElementById(Cells7).innerHTML = Array7[i];
        document.getElementById(Cells8).innerHTML = Array8[i];
        document.getElementById(Cells9).innerHTML = Array9[i];
        document.getElementById("Solution").style.visibility = "visible";
        document.getElementById(Cells1).style.visibility = "hidden";
        document.getElementById(Cells2).style.visibility = "hidden";
        document.getElementById(Cells3).style.visibility = "hidden";
        document.getElementById(Cells4).style.visibility = "hidden";
        document.getElementById(Cells5).style.visibility = "hidden";
        document.getElementById(Cells6).style.visibility = "hidden";
        document.getElementById(Cells7).style.visibility = "hidden";
        document.getElementById(Cells8).style.visibility = "hidden";
        document.getElementById(Cells9).style.visibility = "hidden";
    }
    var x1 = Math.floor(Math.random() * 2);
    var y1 = Math.floor(Math.random() * 3) + 2;
    var z1 = Math.floor(Math.random() * 3) + 5;
    var x2 = Math.floor(Math.random() * 2);
    var y2 = Math.floor(Math.random() * 3) + 2;
    var z2 = Math.floor(Math.random() * 3) + 5;
    var x3 = Math.floor(Math.random() * 2);
    var y3 = Math.floor(Math.random() * 3) + 2;
    var z3 = Math.floor(Math.random() * 3) + 5;
    var x4 = Math.floor(Math.random() * 2);
    var y4 = Math.floor(Math.random() * 3) + 2;
    var z4 = Math.floor(Math.random() * 3) + 5;
    var x5 = Math.floor(Math.random() * 2);
    var y5 = Math.floor(Math.random() * 3) + 2;
    var z5 = Math.floor(Math.random() * 3) + 5;
    var x6 = Math.floor(Math.random() * 2);
    var y6 = Math.floor(Math.random() * 3) + 2;
    var z6 = Math.floor(Math.random() * 3) + 5;
    var x7 = Math.floor(Math.random() * 2);
    var y7 = Math.floor(Math.random() * 3) + 2;
    var z7 = Math.floor(Math.random() * 3) + 5;
    var x8 = Math.floor(Math.random() * 2);
    var y8 = Math.floor(Math.random() * 3) + 2;
    var z8 = Math.floor(Math.random() * 3) + 5;
    var x9 = Math.floor(Math.random() * 2);
    var y9 = Math.floor(Math.random() * 3) + 2;
    var z9 = Math.floor(Math.random() * 3) + 5;
    document.getElementById('cellE1').value = null;
    document.getElementById('cellE2').value = null;
    document.getElementById('cellE3').value = null;
    document.getElementById('cellE4').value = null;
    document.getElementById('cellE5').value = null;
    document.getElementById('cellE6').value = null;
    document.getElementById('cellE7').value = null;
    document.getElementById('cellE8').value = null;
    document.getElementById('cellE9').value = null;
    document.getElementById('cellE11').value = null;
    document.getElementById('cellE12').value = null;
    document.getElementById('cellE13').value = null;
    document.getElementById('cellE14').value = null;
    document.getElementById('cellE15').value = null;
    document.getElementById('cellE16').value = null;
    document.getElementById('cellE17').value = null;
    document.getElementById('cellE18').value = null;
    document.getElementById('cellE19').value = null;
    document.getElementById('cellE21').value = null;
    document.getElementById('cellE22').value = null;
    document.getElementById('cellE23').value = null;
    document.getElementById('cellE24').value = null;
    document.getElementById('cellE25').value = null;
    document.getElementById('cellE26').value = null;
    document.getElementById('cellE27').value = null;
    document.getElementById('cellE28').value = null;
    document.getElementById('cellE29').value = null;
    document.getElementById('cellE31').value = null;
    document.getElementById('cellE32').value = null;
    document.getElementById('cellE33').value = null;
    document.getElementById('cellE34').value = null;
    document.getElementById('cellE35').value = null;
    document.getElementById('cellE36').value = null;
    document.getElementById('cellE37').value = null;
    document.getElementById('cellE38').value = null;
    document.getElementById('cellE39').value = null;
    document.getElementById('cellE41').value = null;
    document.getElementById('cellE42').value = null;
    document.getElementById('cellE43').value = null;
    document.getElementById('cellE44').value = null;
    document.getElementById('cellE45').value = null;
    document.getElementById('cellE46').value = null;
    document.getElementById('cellE47').value = null;
    document.getElementById('cellE48').value = null;
    document.getElementById('cellE49').value = null;
    document.getElementById('cellE51').value = null;
    document.getElementById('cellE52').value = null;
    document.getElementById('cellE53').value = null;
    document.getElementById('cellE54').value = null;
    document.getElementById('cellE55').value = null;
    document.getElementById('cellE56').value = null;
    document.getElementById('cellE57').value = null;
    document.getElementById('cellE58').value = null;
    document.getElementById('cellE59').value = null;
    document.getElementById('cellE61').value = null;
    document.getElementById('cellE62').value = null;
    document.getElementById('cellE63').value = null;
    document.getElementById('cellE64').value = null;
    document.getElementById('cellE65').value = null;
    document.getElementById('cellE66').value = null;
    document.getElementById('cellE67').value = null;
    document.getElementById('cellE68').value = null;
    document.getElementById('cellE69').value = null;
    document.getElementById('cellE71').value = null;
    document.getElementById('cellE72').value = null;
    document.getElementById('cellE73').value = null;
    document.getElementById('cellE74').value = null;
    document.getElementById('cellE75').value = null;
    document.getElementById('cellE76').value = null;
    document.getElementById('cellE77').value = null;
    document.getElementById('cellE78').value = null;
    document.getElementById('cellE79').value = null;
    document.getElementById('cellE81').value = null;
    document.getElementById('cellE82').value = null;
    document.getElementById('cellE83').value = null;
    document.getElementById('cellE84').value = null;
    document.getElementById('cellE85').value = null;
    document.getElementById('cellE86').value = null;
    document.getElementById('cellE87').value = null;
    document.getElementById('cellE88').value = null;
    document.getElementById('cellE89').value = null;
    if(x1 == 0){document.getElementById('cellE1').value = Array1[x1];}
    if(x1 == 1){document.getElementById('cellE2').value = Array1[x1];}
    if(x1 == 2){document.getElementById('cellE3').value = Array1[x1];}
    if(y1 == 3){document.getElementById('cellE4').value = Array1[y1];}
    if(y1 == 4){document.getElementById('cellE5').value = Array1[y1];}
    if(y1 == 5){document.getElementById('cellE6').value = Array1[y1];}
    if(z1 == 6){document.getElementById('cellE7').value = Array1[z1];}
    if(z1 == 7){document.getElementById('cellE8').value = Array1[z1];}
    if(z1 == 8){document.getElementById('cellE9').value = Array1[z1];}
    if(x2 == 0){document.getElementById('cellE11').value = Array2[x2];}
    if(x2 == 1){document.getElementById('cellE12').value = Array2[x2];}
    if(x2 == 2){document.getElementById('cellE13').value = Array2[x2];}
    if(y2 == 3){document.getElementById('cellE14').value = Array2[y2];}
    if(y2 == 4){document.getElementById('cellE15').value = Array2[y2];}
    if(y2 == 5){document.getElementById('cellE16').value = Array2[y2];}
    if(z2 == 6){document.getElementById('cellE17').value = Array2[z2];}
    if(z2 == 7){document.getElementById('cellE18').value = Array2[z2];}
    if(z2 == 8){document.getElementById('cellE19').value = Array2[z2];}
    if(x3 == 0){document.getElementById('cellE21').value = Array3[x3];}
    if(x3 == 1){document.getElementById('cellE22').value = Array3[x3];}
    if(x3 == 2){document.getElementById('cellE23').value = Array3[x3];}
    if(y3 == 3){document.getElementById('cellE24').value = Array3[y3];}
    if(y3 == 4){document.getElementById('cellE25').value = Array3[y3];}
    if(y3 == 5){document.getElementById('cellE26').value = Array3[y3];}
    if(z3 == 6){document.getElementById('cellE27').value = Array3[z3];}
    if(z3 == 7){document.getElementById('cellE28').value = Array3[z3];}
    if(z3 == 8){document.getElementById('cellE29').value = Array3[z3];}
    if(x4 == 0){document.getElementById('cellE31').value = Array4[x4];}
    if(x4 == 1){document.getElementById('cellE32').value = Array4[x4];}
    if(x4 == 2){document.getElementById('cellE33').value = Array4[x4];}
    if(y4 == 3){document.getElementById('cellE34').value = Array4[y4];}
    if(y4 == 4){document.getElementById('cellE35').value = Array4[y4];}
    if(y4 == 5){document.getElementById('cellE36').value = Array4[y4];}
    if(z4 == 6){document.getElementById('cellE37').value = Array4[z4];}
    if(z4 == 7){document.getElementById('cellE38').value = Array4[z4];}
    if(z4 == 8){document.getElementById('cellE39').value = Array4[z4];}
    if(x5 == 0){document.getElementById('cellE41').value = Array5[x5];}
    if(x5 == 1){document.getElementById('cellE42').value = Array5[x5];}
    if(x5 == 2){document.getElementById('cellE43').value = Array5[x5];}
    if(y5 == 3){document.getElementById('cellE44').value = Array5[y5];}
    if(y5 == 4){document.getElementById('cellE45').value = Array5[y5];}
    if(y5 == 5){document.getElementById('cellE46').value = Array5[y5];}
    if(z5 == 6){document.getElementById('cellE47').value = Array5[z5];}
    if(z5 == 7){document.getElementById('cellE48').value = Array5[z5];}
    if(z5 == 8){document.getElementById('cellE49').value = Array5[z5];}
    if(x6 == 0){document.getElementById('cellE51').value = Array6[x6];}
    if(x6 == 1){document.getElementById('cellE52').value = Array6[x6];}
    if(x6 == 2){document.getElementById('cellE53').value = Array6[x6];}
    if(y6 == 3){document.getElementById('cellE54').value = Array6[y6];}
    if(y6 == 4){document.getElementById('cellE55').value = Array6[y6];}
    if(y6 == 5){document.getElementById('cellE56').value = Array6[y6];}
    if(z6 == 6){document.getElementById('cellE57').value = Array6[z6];}
    if(z6 == 7){document.getElementById('cellE58').value = Array6[z6];}
    if(z6 == 8){document.getElementById('cellE59').value = Array6[z6];}
    if(x7 == 0){document.getElementById('cellE61').value = Array7[x7];}
    if(x7 == 1){document.getElementById('cellE62').value = Array7[x7];}
    if(x7 == 2){document.getElementById('cellE63').value = Array7[x7];}
    if(y7 == 3){document.getElementById('cellE64').value = Array7[y7];}
    if(y7 == 4){document.getElementById('cellE65').value = Array7[y7];}
    if(y7 == 5){document.getElementById('cellE66').value = Array7[y7];}
    if(z7 == 6){document.getElementById('cellE67').value = Array7[z7];}
    if(z7 == 7){document.getElementById('cellE68').value = Array7[z7];}
    if(z7 == 8){document.getElementById('cellE69').value = Array7[z7];}
    if(x8 == 0){document.getElementById('cellE71').value = Array8[x8];}
    if(x8 == 1){document.getElementById('cellE72').value = Array8[x8];}
    if(x8 == 2){document.getElementById('cellE73').value = Array8[x8];}
    if(y8 == 3){document.getElementById('cellE74').value = Array8[y8];}
    if(y8 == 4){document.getElementById('cellE75').value = Array8[y8];}
    if(y8 == 5){document.getElementById('cellE76').value = Array8[y8];}
    if(z8 == 6){document.getElementById('cellE77').value = Array8[z8];}
    if(z8 == 7){document.getElementById('cellE78').value = Array8[z8];}
    if(z8 == 8){document.getElementById('cellE79').value = Array8[z8];}
    if(x9 == 0){document.getElementById('cellE81').value = Array9[x9];}
    if(x9 == 1){document.getElementById('cellE82').value = Array9[x9];}
    if(x9 == 2){document.getElementById('cellE83').value = Array9[x9];}
    if(y9 == 3){document.getElementById('cellE84').value = Array9[y9];}
    if(y9 == 4){document.getElementById('cellE85').value = Array9[y9];}
    if(y9 == 5){document.getElementById('cellE86').value = Array9[y9];}
    if(z9 == 6){document.getElementById('cellE87').value = Array9[z9];}
    if(z9 == 7){document.getElementById('cellE88').value = Array9[z9];}
    if(z9 == 8){document.getElementById('cellE89').value = Array9[z9];}
}

var x1;
function UpdateTableHard()
{
    Randomize();
    for (var i = 0; i < randomArray.length; i++)
    {
        Cells1 = 'cell' + (i + 1);
        Cells2 = 'cell' + (i + 11);
        Cells3 = 'cell' + (i + 21);
        Cells4 = 'cell' + (i + 31);
        Cells5 = 'cell' + (i + 41);
        Cells6 = 'cell' + (i + 51);
        Cells7 = 'cell' + (i + 61);
        Cells8 = 'cell' + (i + 71);
        Cells9 = 'cell' + (i + 81);
        document.getElementById(Cells1).innerHTML = Array1[i];
        document.getElementById(Cells2).innerHTML = Array2[i];
        document.getElementById(Cells3).innerHTML = Array3[i];
        document.getElementById(Cells4).innerHTML = Array4[i];
        document.getElementById(Cells5).innerHTML = Array5[i];
        document.getElementById(Cells6).innerHTML = Array6[i];
        document.getElementById(Cells7).innerHTML = Array7[i];
        document.getElementById(Cells8).innerHTML = Array8[i];
        document.getElementById(Cells9).innerHTML = Array9[i];
        document.getElementById("Solution").style.visibility = "visible";
        document.getElementById(Cells1).style.visibility = "hidden";
        document.getElementById(Cells2).style.visibility = "hidden";
        document.getElementById(Cells3).style.visibility = "hidden";
        document.getElementById(Cells4).style.visibility = "hidden";
        document.getElementById(Cells5).style.visibility = "hidden";
        document.getElementById(Cells6).style.visibility = "hidden";
        document.getElementById(Cells7).style.visibility = "hidden";
        document.getElementById(Cells8).style.visibility = "hidden";
        document.getElementById(Cells9).style.visibility = "hidden";
    }
    var x1 = Math.floor(Math.random() * 8);
    var x2 = Math.floor(Math.random() * 8);
    var x3 = Math.floor(Math.random() * 8);
    var x4 = Math.floor(Math.random() * 8);
    var x5 = Math.floor(Math.random() * 8);
    var x6 = Math.floor(Math.random() * 8);
    var x7 = Math.floor(Math.random() * 8);
    var x8 = Math.floor(Math.random() * 8);
    var x9 = Math.floor(Math.random() * 8);

    document.getElementById('cellE1').value = null;
    document.getElementById('cellE2').value = null;
    document.getElementById('cellE3').value = null;
    document.getElementById('cellE4').value = null;
    document.getElementById('cellE5').value = null;
    document.getElementById('cellE6').value = null;
    document.getElementById('cellE7').value = null;
    document.getElementById('cellE8').value = null;
    document.getElementById('cellE9').value = null;
    document.getElementById('cellE11').value = null;
    document.getElementById('cellE12').value = null;
    document.getElementById('cellE13').value = null;
    document.getElementById('cellE14').value = null;
    document.getElementById('cellE15').value = null;
    document.getElementById('cellE16').value = null;
    document.getElementById('cellE17').value = null;
    document.getElementById('cellE18').value = null;
    document.getElementById('cellE19').value = null;
    document.getElementById('cellE21').value = null;
    document.getElementById('cellE22').value = null;
    document.getElementById('cellE23').value = null;
    document.getElementById('cellE24').value = null;
    document.getElementById('cellE25').value = null;
    document.getElementById('cellE26').value = null;
    document.getElementById('cellE27').value = null;
    document.getElementById('cellE28').value = null;
    document.getElementById('cellE29').value = null;
    document.getElementById('cellE31').value = null;
    document.getElementById('cellE32').value = null;
    document.getElementById('cellE33').value = null;
    document.getElementById('cellE34').value = null;
    document.getElementById('cellE35').value = null;
    document.getElementById('cellE36').value = null;
    document.getElementById('cellE37').value = null;
    document.getElementById('cellE38').value = null;
    document.getElementById('cellE39').value = null;
    document.getElementById('cellE41').value = null;
    document.getElementById('cellE42').value = null;
    document.getElementById('cellE43').value = null;
    document.getElementById('cellE44').value = null;
    document.getElementById('cellE45').value = null;
    document.getElementById('cellE46').value = null;
    document.getElementById('cellE47').value = null;
    document.getElementById('cellE48').value = null;
    document.getElementById('cellE49').value = null;
    document.getElementById('cellE51').value = null;
    document.getElementById('cellE52').value = null;
    document.getElementById('cellE53').value = null;
    document.getElementById('cellE54').value = null;
    document.getElementById('cellE55').value = null;
    document.getElementById('cellE56').value = null;
    document.getElementById('cellE57').value = null;
    document.getElementById('cellE58').value = null;
    document.getElementById('cellE59').value = null;
    document.getElementById('cellE61').value = null;
    document.getElementById('cellE62').value = null;
    document.getElementById('cellE63').value = null;
    document.getElementById('cellE64').value = null;
    document.getElementById('cellE65').value = null;
    document.getElementById('cellE66').value = null;
    document.getElementById('cellE67').value = null;
    document.getElementById('cellE68').value = null;
    document.getElementById('cellE69').value = null;
    document.getElementById('cellE71').value = null;
    document.getElementById('cellE72').value = null;
    document.getElementById('cellE73').value = null;
    document.getElementById('cellE74').value = null;
    document.getElementById('cellE75').value = null;
    document.getElementById('cellE76').value = null;
    document.getElementById('cellE77').value = null;
    document.getElementById('cellE78').value = null;
    document.getElementById('cellE79').value = null;
    document.getElementById('cellE81').value = null;
    document.getElementById('cellE82').value = null;
    document.getElementById('cellE83').value = null;
    document.getElementById('cellE84').value = null;
    document.getElementById('cellE85').value = null;
    document.getElementById('cellE86').value = null;
    document.getElementById('cellE87').value = null;
    document.getElementById('cellE88').value = null;
    document.getElementById('cellE89').value = null;
    if(x1 == 0){document.getElementById('cellE1').value = Array1[x1];}
    if(x1 == 1){document.getElementById('cellE2').value = Array1[x1];}
    if(x1 == 2){document.getElementById('cellE3').value = Array1[x1];}
    if(x1 == 3){document.getElementById('cellE4').value = Array1[x1];}
    if(x1 == 4){document.getElementById('cellE5').value = Array1[x1];}
    if(x1 == 5){document.getElementById('cellE6').value = Array1[x1];}
    if(x1 == 6){document.getElementById('cellE7').value = Array1[x1];}
    if(x1 == 7){document.getElementById('cellE8').value = Array1[x1];}
    if(x1 == 8){document.getElementById('cellE9').value = Array1[x1];}
    if(x2 == 0){document.getElementById('cellE11').value = Array2[x2];}
    if(x2 == 1){document.getElementById('cellE12').value = Array2[x2];}
    if(x2 == 2){document.getElementById('cellE13').value = Array2[x2];}
    if(x2 == 3){document.getElementById('cellE14').value = Array2[x2];}
    if(x2 == 4){document.getElementById('cellE15').value = Array2[x2];}
    if(x2 == 5){document.getElementById('cellE16').value = Array2[x2];}
    if(x2 == 6){document.getElementById('cellE17').value = Array2[x2];}
    if(x2 == 7){document.getElementById('cellE18').value = Array2[x2];}
    if(x2 == 8){document.getElementById('cellE19').value = Array2[x2];}
    if(x3 == 0){document.getElementById('cellE21').value = Array3[x3];}
    if(x3 == 1){document.getElementById('cellE22').value = Array3[x3];}
    if(x3 == 2){document.getElementById('cellE23').value = Array3[x3];}
    if(x3 == 3){document.getElementById('cellE24').value = Array3[x3];}
    if(x3 == 4){document.getElementById('cellE25').value = Array3[x3];}
    if(x3 == 5){document.getElementById('cellE26').value = Array3[x3];}
    if(x3 == 6){document.getElementById('cellE27').value = Array3[x3];}
    if(x3 == 7){document.getElementById('cellE28').value = Array3[x3];}
    if(x3 == 8){document.getElementById('cellE29').value = Array3[x3];}
    if(x4 == 0){document.getElementById('cellE31').value = Array4[x4];}
    if(x4 == 1){document.getElementById('cellE32').value = Array4[x4];}
    if(x4 == 2){document.getElementById('cellE33').value = Array4[x4];}
    if(x4 == 3){document.getElementById('cellE34').value = Array4[x4];}
    if(x4 == 4){document.getElementById('cellE35').value = Array4[x4];}
    if(x4 == 5){document.getElementById('cellE36').value = Array4[x4];}
    if(x4 == 6){document.getElementById('cellE37').value = Array4[x4];}
    if(x4 == 7){document.getElementById('cellE38').value = Array4[x4];}
    if(x4 == 8){document.getElementById('cellE39').value = Array4[x4];}
    if(x5 == 0){document.getElementById('cellE41').value = Array5[x5];}
    if(x5 == 1){document.getElementById('cellE42').value = Array5[x5];}
    if(x5 == 2){document.getElementById('cellE43').value = Array5[x5];}
    if(x5 == 3){document.getElementById('cellE44').value = Array5[x5];}
    if(x5 == 4){document.getElementById('cellE45').value = Array5[x5];}
    if(x5 == 5){document.getElementById('cellE46').value = Array5[x5];}
    if(x5 == 6){document.getElementById('cellE47').value = Array5[x5];}
    if(x5 == 7){document.getElementById('cellE48').value = Array5[x5];}
    if(x5 == 8){document.getElementById('cellE49').value = Array5[x5];}
    if(x6 == 0){document.getElementById('cellE51').value = Array6[x6];}
    if(x6 == 1){document.getElementById('cellE52').value = Array6[x6];}
    if(x6 == 2){document.getElementById('cellE53').value = Array6[x6];}
    if(x6 == 3){document.getElementById('cellE54').value = Array6[x6];}
    if(x6 == 4){document.getElementById('cellE55').value = Array6[x6];}
    if(x6 == 5){document.getElementById('cellE56').value = Array6[x6];}
    if(x6 == 6){document.getElementById('cellE57').value = Array6[x6];}
    if(x6 == 7){document.getElementById('cellE58').value = Array6[x6];}
    if(x6 == 8){document.getElementById('cellE59').value = Array6[x6];}
    if(x7 == 0){document.getElementById('cellE61').value = Array7[x7];}
    if(x7 == 1){document.getElementById('cellE62').value = Array7[x7];}
    if(x7 == 2){document.getElementById('cellE63').value = Array7[x7];}
    if(x7 == 3){document.getElementById('cellE64').value = Array7[x7];}
    if(x7 == 4){document.getElementById('cellE65').value = Array7[x7];}
    if(x7 == 5){document.getElementById('cellE66').value = Array7[x7];}
    if(x7 == 6){document.getElementById('cellE67').value = Array7[x7];}
    if(x7 == 7){document.getElementById('cellE68').value = Array7[x7];}
    if(x7 == 8){document.getElementById('cellE69').value = Array7[x7];}
    if(x8 == 0){document.getElementById('cellE71').value = Array8[x8];}
    if(x8 == 1){document.getElementById('cellE72').value = Array8[x8];}
    if(x8 == 2){document.getElementById('cellE73').value = Array8[x8];}
    if(x8 == 3){document.getElementById('cellE74').value = Array8[x8];}
    if(x8 == 4){document.getElementById('cellE75').value = Array8[x8];}
    if(x8 == 5){document.getElementById('cellE76').value = Array8[x8];}
    if(x8 == 6){document.getElementById('cellE77').value = Array8[x8];}
    if(x8 == 7){document.getElementById('cellE78').value = Array8[x8];}
    if(x8 == 8){document.getElementById('cellE79').value = Array8[x8];}
    if(x9 == 0){document.getElementById('cellE81').value = Array9[x9];}
    if(x9 == 1){document.getElementById('cellE82').value = Array9[x9];}
    if(x9 == 2){document.getElementById('cellE83').value = Array9[x9];}
    if(x9 == 3){document.getElementById('cellE84').value = Array9[x9];}
    if(x9 == 4){document.getElementById('cellE85').value = Array9[x9];}
    if(x9 == 5){document.getElementById('cellE86').value = Array9[x9];}
    if(x9 == 6){document.getElementById('cellE87').value = Array9[x9];}
    if(x9 == 7){document.getElementById('cellE88').value = Array9[x9];}
    if(x9 == 8){document.getElementById('cellE89').value = Array9[x9];}
}

function CheckSolution()
{
    for (var i = 0; i < randomArray.length; i++)
    {
        Cells1 = 'cell' + (i + 1);
        Cells2 = 'cell' + (i + 11);
        Cells3 = 'cell' + (i + 21);
        Cells4 = 'cell' + (i + 31);
        Cells5 = 'cell' + (i + 41);
        Cells6 = 'cell' + (i + 51);
        Cells7 = 'cell' + (i + 61);
        Cells8 = 'cell' + (i + 71);
        Cells9 = 'cell' + (i + 81);
        FullCells1 = 'cellE' + (i + 1);
        FullCells2 = 'cellE' + (i + 11);
        FullCells3 = 'cellE' + (i + 21);
        FullCells4 = 'cellE' + (i + 31);
        FullCells5 = 'cellE' + (i + 41);
        FullCells6 = 'cellE' + (i + 51);
        FullCells7 = 'cellE' + (i + 61);
        FullCells8 = 'cellE' + (i + 71);
        FullCells9 = 'cellE' + (i + 81);
        document.getElementById(Cells1).innerHTML = Array1[i];
        document.getElementById(Cells2).innerHTML = Array2[i];
        document.getElementById(Cells3).innerHTML = Array3[i];
        document.getElementById(Cells4).innerHTML = Array4[i];
        document.getElementById(Cells5).innerHTML = Array5[i];
        document.getElementById(Cells6).innerHTML = Array6[i];
        document.getElementById(Cells7).innerHTML = Array7[i];
        document.getElementById(Cells8).innerHTML = Array8[i];
        document.getElementById(Cells9).innerHTML = Array9[i];
    }
    var score = 0;
    var c1 = document.getElementById('cellE1').value
    var c2 = document.getElementById('cellE2').value
    var c3 = document.getElementById('cellE3').value
    var c4 = document.getElementById('cellE4').value
    var c5 = document.getElementById('cellE5').value
    var c6 = document.getElementById('cellE6').value
    var c7 = document.getElementById('cellE7').value
    var c8 = document.getElementById('cellE8').value
    var c9 = document.getElementById('cellE9').value
    var c11 = document.getElementById('cellE11').value
    var c12 = document.getElementById('cellE12').value
    var c13 = document.getElementById('cellE13').value
    var c14 = document.getElementById('cellE14').value
    var c15 = document.getElementById('cellE15').value
    var c16 = document.getElementById('cellE16').value
    var c17 = document.getElementById('cellE17').value
    var c18 = document.getElementById('cellE18').value
    var c19 = document.getElementById('cellE19').value
    var c21 = document.getElementById('cellE21').value
    var c22 = document.getElementById('cellE22').value
    var c23 = document.getElementById('cellE23').value
    var c24 = document.getElementById('cellE24').value
    var c25 = document.getElementById('cellE25').value
    var c26 = document.getElementById('cellE26').value
    var c27 = document.getElementById('cellE27').value
    var c28 = document.getElementById('cellE28').value
    var c29 = document.getElementById('cellE29').value
    var c31 = document.getElementById('cellE31').value
    var c32 = document.getElementById('cellE32').value
    var c33 = document.getElementById('cellE33').value
    var c34 = document.getElementById('cellE34').value
    var c35 = document.getElementById('cellE35').value
    var c36 = document.getElementById('cellE36').value
    var c37 = document.getElementById('cellE37').value
    var c38 = document.getElementById('cellE38').value
    var c39 = document.getElementById('cellE39').value
    var c41 = document.getElementById('cellE41').value
    var c42 = document.getElementById('cellE42').value
    var c43 = document.getElementById('cellE43').value
    var c44 = document.getElementById('cellE44').value
    var c45 = document.getElementById('cellE45').value
    var c46 = document.getElementById('cellE46').value
    var c47 = document.getElementById('cellE47').value
    var c48 = document.getElementById('cellE48').value
    var c49 = document.getElementById('cellE49').value
    var c51 = document.getElementById('cellE51').value
    var c52 = document.getElementById('cellE52').value
    var c53 = document.getElementById('cellE53').value
    var c54 = document.getElementById('cellE54').value
    var c55 = document.getElementById('cellE55').value
    var c56 = document.getElementById('cellE56').value
    var c57 = document.getElementById('cellE57').value
    var c58 = document.getElementById('cellE58').value
    var c59 = document.getElementById('cellE59').value
    var c61 = document.getElementById('cellE61').value
    var c62 = document.getElementById('cellE62').value
    var c63 = document.getElementById('cellE63').value
    var c64 = document.getElementById('cellE64').value
    var c65 = document.getElementById('cellE65').value
    var c66 = document.getElementById('cellE66').value
    var c67 = document.getElementById('cellE67').value
    var c68 = document.getElementById('cellE68').value
    var c69 = document.getElementById('cellE69').value
    var c71 = document.getElementById('cellE71').value
    var c72 = document.getElementById('cellE72').value
    var c73 = document.getElementById('cellE73').value
    var c74 = document.getElementById('cellE74').value
    var c75 = document.getElementById('cellE75').value
    var c76 = document.getElementById('cellE76').value
    var c77 = document.getElementById('cellE77').value
    var c78 = document.getElementById('cellE78').value
    var c79 = document.getElementById('cellE79').value
    var c81 = document.getElementById('cellE81').value
    var c82 = document.getElementById('cellE82').value
    var c83 = document.getElementById('cellE83').value
    var c84 = document.getElementById('cellE84').value
    var c85 = document.getElementById('cellE85').value
    var c86 = document.getElementById('cellE86').value
    var c87 = document.getElementById('cellE87').value
    var c88 = document.getElementById('cellE88').value
    var c89 = document.getElementById('cellE89').value
    var x1 = Array1[0] - c1;
    var x2 = Array1[1] - c2;
    var x3 = Array1[2] - c3;
    var x4 = Array1[3] - c4;
    var x5 = Array1[4] - c5;
    var x6 = Array1[5] - c6;
    var x7 = Array1[6] - c7;
    var x8 = Array1[7] - c8;
    var x9 = Array1[8] - c9;
    var x11 = Array2[0] - c11;
    var x12 = Array2[1] - c12;
    var x13 = Array2[2] - c13;
    var x14 = Array2[3] - c14;
    var x15 = Array2[4] - c15;
    var x16 = Array2[5] - c16;
    var x17 = Array2[6] - c17;
    var x18 = Array2[7] - c18;
    var x19 = Array2[8] - c19;
    var x21 = Array3[0] - c21;
    var x22 = Array3[1] - c22;
    var x23 = Array3[2] - c23;
    var x24 = Array3[3] - c24;
    var x25 = Array3[4] - c25;
    var x26 = Array3[5] - c26;
    var x27 = Array3[6] - c27;
    var x28 = Array3[7] - c28;
    var x29 = Array3[8] - c29;
    var x31 = Array4[0] - c31;
    var x32 = Array4[1] - c32;
    var x33 = Array4[2] - c33;
    var x34 = Array4[3] - c34;
    var x35 = Array4[4] - c35;
    var x36 = Array4[5] - c36;
    var x37 = Array4[6] - c37;
    var x38 = Array4[7] - c38;
    var x39 = Array4[8] - c39;
    var x41 = Array5[0] - c41;
    var x42 = Array5[1] - c42;
    var x43 = Array5[2] - c43;
    var x44 = Array5[3] - c44;
    var x45 = Array5[4] - c45;
    var x46 = Array5[5] - c46;
    var x47 = Array5[6] - c47;
    var x48 = Array5[7] - c48;
    var x49 = Array5[8] - c49;
    var x51 = Array6[0] - c51;
    var x52 = Array6[1] - c52;
    var x53 = Array6[2] - c53;
    var x54 = Array6[3] - c54;
    var x55 = Array6[4] - c55;
    var x56 = Array6[5] - c56;
    var x57 = Array6[6] - c57;
    var x58 = Array6[7] - c58;
    var x59 = Array6[8] - c59;
    var x61 = Array7[0] - c61;
    var x62 = Array7[1] - c62;
    var x63 = Array7[2] - c63;
    var x64 = Array7[3] - c64;
    var x65 = Array7[4] - c65;
    var x66 = Array7[5] - c66;
    var x67 = Array7[6] - c67;
    var x68 = Array7[7] - c68;
    var x69 = Array7[8] - c69;
    var x71 = Array8[0] - c71;
    var x72 = Array8[1] - c72;
    var x73 = Array8[2] - c73;
    var x74 = Array8[3] - c74;
    var x75 = Array8[4] - c75;
    var x76 = Array8[5] - c76;
    var x77 = Array8[6] - c77;
    var x78 = Array8[7] - c78;
    var x79 = Array8[8] - c79;
    var x81 = Array9[0] - c81;
    var x82 = Array9[1] - c82;
    var x83 = Array9[2] - c83;
    var x84 = Array9[3] - c84;
    var x85 = Array9[4] - c85;
    var x86 = Array9[5] - c86;
    var x87 = Array9[6] - c87;
    var x88 = Array9[7] - c88;
    var x89 = Array9[8] - c89;
    if(x1 == 0){score = score + 1;}
    if(x2 == 0){score = score + 1;}
    if(x3 == 0){score = score + 1;}
    if(x4 == 0){score = score + 1;}
    if(x5 == 0){score = score + 1;}
    if(x6 == 0){score = score + 1;}
    if(x7 == 0){score = score + 1;}
    if(x8 == 0){score = score + 1;}
    if(x9 == 0){score = score + 1;}
    if(x11 == 0){score = score + 1;}
    if(x12 == 0){score = score + 1;}
    if(x13 == 0){score = score + 1;}
    if(x14 == 0){score = score + 1;}
    if(x15 == 0){score = score + 1;}
    if(x16 == 0){score = score + 1;}
    if(x17 == 0){score = score + 1;}
    if(x18 == 0){score = score + 1;}
    if(x19 == 0){score = score + 1;}
    if(x21 == 0){score = score + 1;}
    if(x22 == 0){score = score + 1;}
    if(x23 == 0){score = score + 1;}
    if(x24 == 0){score = score + 1;}
    if(x25 == 0){score = score + 1;}
    if(x26 == 0){score = score + 1;}
    if(x27 == 0){score = score + 1;}
    if(x28 == 0){score = score + 1;}
    if(x29 == 0){score = score + 1;}
    if(x31 == 0){score = score + 1;}
    if(x32 == 0){score = score + 1;}
    if(x33 == 0){score = score + 1;}
    if(x34 == 0){score = score + 1;}
    if(x35 == 0){score = score + 1;}
    if(x36 == 0){score = score + 1;}
    if(x37 == 0){score = score + 1;}
    if(x38 == 0){score = score + 1;}
    if(x39 == 0){score = score + 1;}
    if(x41 == 0){score = score + 1;}
    if(x42 == 0){score = score + 1;}
    if(x43 == 0){score = score + 1;}
    if(x44 == 0){score = score + 1;}
    if(x45 == 0){score = score + 1;}
    if(x46 == 0){score = score + 1;}
    if(x47 == 0){score = score + 1;}
    if(x48 == 0){score = score + 1;}
    if(x49 == 0){score = score + 1;}
    if(x51 == 0){score = score + 1;}
    if(x52 == 0){score = score + 1;}
    if(x53 == 0){score = score + 1;}
    if(x54 == 0){score = score + 1;}
    if(x55 == 0){score = score + 1;}
    if(x56 == 0){score = score + 1;}
    if(x57 == 0){score = score + 1;}
    if(x58 == 0){score = score + 1;}
    if(x59 == 0){score = score + 1;}
    if(x61 == 0){score = score + 1;}
    if(x62 == 0){score = score + 1;}
    if(x63 == 0){score = score + 1;}
    if(x64 == 0){score = score + 1;}
    if(x65 == 0){score = score + 1;}
    if(x66 == 0){score = score + 1;}
    if(x67 == 0){score = score + 1;}
    if(x68 == 0){score = score + 1;}
    if(x69 == 0){score = score + 1;}
    if(x71 == 0){score = score + 1;}
    if(x72 == 0){score = score + 1;}
    if(x73 == 0){score = score + 1;}
    if(x74 == 0){score = score + 1;}
    if(x75 == 0){score = score + 1;}
    if(x76 == 0){score = score + 1;}
    if(x77 == 0){score = score + 1;}
    if(x78 == 0){score = score + 1;}
    if(x79 == 0){score = score + 1;}
    if(x81 == 0){score = score + 1;}
    if(x82 == 0){score = score + 1;}
    if(x83 == 0){score = score + 1;}
    if(x84 == 0){score = score + 1;}
    if(x85 == 0){score = score + 1;}
    if(x86 == 0){score = score + 1;}
    if(x87 == 0){score = score + 1;}
    if(x88 == 0){score = score + 1;}
    if(x89 == 0){score = score + 1;}

    if(score == 81)
    {
      window.alert("You win.");
    }
    else
    {
      window.alert("Mistakes were made.");
    }
}
function GiveUp()
{
    for (var i = 0; i < randomArray.length; i++)
    {
        Cells1 = 'cell' + (i + 1);
        Cells2 = 'cell' + (i + 11);
        Cells3 = 'cell' + (i + 21);
        Cells4 = 'cell' + (i + 31);
        Cells5 = 'cell' + (i + 41);
        Cells6 = 'cell' + (i + 51);
        Cells7 = 'cell' + (i + 61);
        Cells8 = 'cell' + (i + 71);
        Cells9 = 'cell' + (i + 81);

        FullCells1 = 'cellE' + (i + 1);
        FullCells2 = 'cellE' + (i + 11);
        FullCells3 = 'cellE' + (i + 21);
        FullCells4 = 'cellE' + (i + 31);
        FullCells5 = 'cellE' + (i + 41);
        FullCells6 = 'cellE' + (i + 51);
        FullCells7 = 'cellE' + (i + 61);
        FullCells8 = 'cellE' + (i + 71);
        FullCells9 = 'cellE' + (i + 81);
        document.getElementById(Cells1).innerHTML = Array1[i];
        document.getElementById(Cells2).innerHTML = Array2[i];
        document.getElementById(Cells3).innerHTML = Array3[i];
        document.getElementById(Cells4).innerHTML = Array4[i];
        document.getElementById(Cells5).innerHTML = Array5[i];
        document.getElementById(Cells6).innerHTML = Array6[i];
        document.getElementById(Cells7).innerHTML = Array7[i];
        document.getElementById(Cells8).innerHTML = Array8[i];
        document.getElementById(Cells9).innerHTML = Array9[i];
        document.getElementById("Solution").style.visibility = "visible";
        document.getElementById(Cells1).style.visibility = "visible";
        document.getElementById(Cells2).style.visibility = "visible";
        document.getElementById(Cells3).style.visibility = "visible";
        document.getElementById(Cells4).style.visibility = "visible";
        document.getElementById(Cells5).style.visibility = "visible";
        document.getElementById(Cells6).style.visibility = "visible";
        document.getElementById(Cells7).style.visibility = "visible";
        document.getElementById(Cells8).style.visibility = "visible";
        document.getElementById(Cells9).style.visibility = "visible";
    }
}
