var fish = 0;
var consume = 0;
var upgrade = 0;
var message = 0;
var egghold = 0;
var x = Math.random()*100;

function FishingTime()
{
  x = Math.random()*100;
  if(x < 75)
  {
    document.getElementById('FishBin').src = document.getElementById('fishcommon').src;
    fish = fish + 1;
  }
  if(x >= 25)
  {
    document.getElementById('FishBin').src = document.getElementById('fishuncommon').src;
    fish = fish + 5;
  }
  document.getElementById('FishScore').value = fish;
  document.getElementById('FishScore').innerHTML = fish;
}
function FishingTime2()
{
  if(upgrade >= 1)
  {
    x = Math.random()*200;
    if(x < 100)
    {
      document.getElementById('FishBin').src = document.getElementById('fishcommon').src;
      fish = fish + 1;
    }
    if(x >= 100 && x < 175)
    {
      document.getElementById('FishBin').src = document.getElementById('fishuncommon').src;
      fish = fish + 5;
    }
    if(x >= 175)
    {
      document.getElementById('FishBin').src = document.getElementById('fishrare').src;
      fish = fish + 25;
    }
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
  }
  if(upgrade < 1)
  {
    window.alert("Not unlocked yet");
  }
}
function FishingTime3()
{
  if(upgrade >= 2)
  {
    var x = Math.random()*500;
    if(x < 200)
    {
      document.getElementById('FishBin').src = document.getElementById('fishcommon').src;
      fish = fish + 1;
    }
    if(x >= 200 && x < 350)
    {
      document.getElementById('FishBin').src = document.getElementById('fishuncommon').src;
      fish = fish + 5;
    }
    if(x >= 350 && x < 450)
    {
      document.getElementById('FishBin').src = document.getElementById('fishrare').src;
      fish = fish + 25;
    }
    if(x >= 450)
    {
      document.getElementById('FishBin').src = document.getElementById('fishlegendary').src;
      fish = fish + 100;
    }
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
  }
  if(upgrade < 2)
  {
    window.alert("Not unlocked yet");
  }
}
function FishingTime4()
{
  if(upgrade >= 3)
  {
    var x = Math.random()*1000;
    if(x < 500)
    {
      document.getElementById('FishBin').src = document.getElementById('fishcommon').src;
      fish = fish + 1;
    }
    if(x >= 500 && x < 700)
    {
      document.getElementById('FishBin').src = document.getElementById('fishuncommon').src;
      fish = fish + 5;
    }
    if(x >= 700 && x < 850)
    {
      document.getElementById('FishBin').src = document.getElementById('fishrare').src;
      fish = fish + 25;
    }
    if(x >= 850 && x < 950)
    {
      document.getElementById('FishBin').src = document.getElementById('fishlegendary').src;
      fish = fish + 100;
    }
    if(x >= 950 && x < 999)
    {
      document.getElementById('FishBin').src = document.getElementById('fishmythical').src;
      fish = fish + 200;
    }
    if(x == 1000)
    {
      window.alert("You Lucky Larry! You found the 1 in 1000 Fish!");
      document.getElementById('FishBin').src = document.getElementById('fishpeak').src;
      fish = fish + 1000;
    }
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
  }
  if(upgrade < 3)
  {
    window.alert("Not unlocked yet");
  }
}
function Upgrade1()
{
  var fish500 = 500;
  if(fish >= 500 && upgrade == 0)
  {
    fish = fish - 500;
    upgrade = 1;
    document.getElementById('FishButton2').innerHTML = "Fish2";
    document.getElementById('UpgradeButton1').disabled = "true";
    document.getElementById('UpgradeButton2').innerHTML = "Upgrade2";
    window.alert("Fish2 Unlocked.");
  }
  if(fish < 500 && upgrade == 0)
  {
    window.alert("Cannot upgrade, need " + (fish500-fish) + " more fish.");
  }
  document.getElementById('FishScore').value = fish;
  document.getElementById('FishScore').innerHTML = fish;
}
function Upgrade2()
{
  var fish1000 = 1000;
  if(fish >= 1000 && upgrade == 1)
  {
    fish = fish - 1000;
    upgrade = 2;
    document.getElementById('FishButton3').innerHTML = "Fish3";
    document.getElementById('UpgradeButton2').disabled = "true";
    document.getElementById('UpgradeButton3').innerHTML = "Upgrade3";
    window.alert("Fish3 Unlocked.");
  }
  if(fish < 1000 && upgrade == 1)
  {
    window.alert("Cannot upgrade, need " + (fish1000-fish) + " more fish.");
  }
  if(upgrade < 1)
  {
    window.alert("Not unlocked yet");
  }
  document.getElementById('FishScore').value = fish;
  document.getElementById('FishScore').innerHTML = fish;
}
function Upgrade3()
{
    var fish2000 = 2000;
    if(fish >= 2000 && upgrade == 2)
    {
      fish = fish - 2000;
      upgrade = 3;
      document.getElementById('FishButton4').innerHTML = "Fish4";
      document.getElementById('UpgradeButton3').disabled = "true";
      window.alert("Fish4 Unlocked.");
    }
    if(fish < 2000 && upgrade == 2)
    {
      window.alert("Cannot upgrade, need " + (fish2000-fish) + " more fish.");
    }
    if(upgrade < 2)
    {
      window.alert("Not unlocked yet");
    }
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
}
function EggHunt()
{
  if(egghold == 1)
  {
    window.alert("Egg already acquired.");
  }
  if(fish >= 100 && egghold == 0)
  {
      document.getElementById('EggBin').src = document.getElementById('eggpeak').src;
      fish = fish - 100;
      egghold = 1;
      document.getElementById('EggHunt').innerHTML = "Egg Acquired";
      document.getElementById('ConsumeButton').innerHTML = "Feed Egg";
      document.getElementById('ConsumeButtonMid').innerHTML = "Feed Egg(10)";
      document.getElementById('ConsumeButtonBig').innerHTML = "Feed Egg(100)";
      document.getElementById('ConsumeButtonAll').innerHTML = "Feed All";
      window.alert("Egg acquired.");
  }
  if(fish < 100 && egghold == 0)
  {
    window.alert("Not enough fish");
  }
  document.getElementById('FishScore').value = fish;
  document.getElementById('FishScore').innerHTML = fish;
}
function ConsumeTime()
{
  if(fish > 0  && egghold == 1)
  {
    fish = fish - 1;
    consume = consume + 1;
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
    document.getElementById('ConsumeScore').value = consume;
    document.getElementById('ConsumeScore').innerHTML = consume;
  }
  if(fish == 0  && egghold == 1)
  {
    window.alert("Out of Fish");
  }
  if(egghold == 0)
  {
    window.alert("Egg not found");
  }
  HatchTime();
}
function ConsumeTimeMid()
{
  var fish10 = 10;
  if(fish >= 10 && egghold == 1)
  {
    fish = fish - 10;
    consume = consume + 10;
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
    document.getElementById('ConsumeScore').value = consume;
    document.getElementById('ConsumeScore').innerHTML = consume;
  }
  if(fish < 10  && egghold == 1)
  {
    window.alert("Not enough Fish, need " + (fish10-fish) + " more fish");
  }
  if(egghold == 0)
  {
    window.alert("Egg not found");
  }
  HatchTime();
}
function ConsumeTimeBig()
{
  var fish100 = 100;
  if(fish >= 100 && egghold == 1)
  {
    fish = fish - 100;
    consume = consume + 100;
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
    document.getElementById('ConsumeScore').value = consume;
    document.getElementById('ConsumeScore').innerHTML = consume;
  }
  if(fish < 100  && egghold == 1)
  {
    window.alert("Not enough Fish, need " + (fish100-fish) + " more fish");
  }
  if(egghold == 0)
  {
    window.alert("Egg not found");
  }
  HatchTime();
}
function ConsumeTimeAll()
{
  if(fish > 0 && egghold == 1)
  {
    consume = consume + fish;
    fish = fish - fish;
    document.getElementById('FishScore').value = fish;
    document.getElementById('FishScore').innerHTML = fish;
    document.getElementById('ConsumeScore').value = consume;
    document.getElementById('ConsumeScore').innerHTML = consume;
  }
  if(fish == 0  && egghold == 1)
  {
    window.alert("Out of Fish");
  }
  if(egghold == 0)
  {
    window.alert("Egg not found");
  }
  HatchTime();
}
function HatchTime()
{
  if(consume >= 100 && message == 0 && egghold == 1)
  {
    message = 1;
    document.getElementById('EggBin').src = document.getElementById('dragonsmall').src;
    document.getElementById('ConsumeButton').innerHTML = "Feed Hatchling Beast";
    document.getElementById('ConsumeButtonMid').innerHTML = "Feed HB(10)";
    document.getElementById('ConsumeButtonBig').innerHTML = "Feed HB(100)";
    window.alert("Beast busts out");
  }
  if(consume >= 500 && message == 1 && egghold == 1)
  {
    message = 2;
    document.getElementById('EggBin').src = document.getElementById('dragonmedium').src;
    document.getElementById('ConsumeButton').innerHTML = "Feed Young Beast";
    document.getElementById('ConsumeButtonMid').innerHTML = "Feed YB(10)";
    document.getElementById('ConsumeButtonBig').innerHTML = "Feed YB(100)";
    window.alert("Hatchling is growing");
  }
  if(consume >= 1000 && message == 2 && egghold == 1)
  {
    message = 3;
    document.getElementById('EggBin').src = document.getElementById('dragonbig').src;
    document.getElementById('ConsumeButton').innerHTML = "Feed Adult Beast";
    document.getElementById('ConsumeButtonMid').innerHTML = "Feed AB(10)";
    document.getElementById('ConsumeButtonBig').innerHTML = "Feed AB(100)";
    window.alert("The beast grows in power");
  }
  if(consume >= 2000 && message == 3 && egghold == 1)
  {
    message = 4;
    document.getElementById('EggBin').src = document.getElementById('dragonfinal').src;
    document.getElementById('ConsumeButton').disabled = "true";
    document.getElementById('ConsumeButtonMid').disabled = "true";
    document.getElementById('ConsumeButtonBig').disabled = "true";
    document.getElementById('ConsumeButtonAll').disabled = "true";
    window.alert("The beast reaches its peak");
    window.alert("Your friend is here for you");
  }
}
