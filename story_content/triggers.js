function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64lEbJIoPSC":
        Script1();
        break;
      case "6RmdgRgkkFS":
        Script2();
        break;
      case "6pDMG4LOVPm":
        Script3();
        break;
      case "6O80VC5Lwav":
        Script4();
        break;
      case "6oTTsBlqOPq":
        Script5();
        break;
      case "6APUUEIn6oO":
        Script6();
        break;
      case "68zOiwGVm1X":
        Script7();
        break;
      case "5vVFMOREjsf":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6hKsnRtt2E0');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6hKsnRtt2E0');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5XcChl8x6gd');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5XcChl8x6gd');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6hyeqvjg3RB');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6hyeqvjg3RB');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6nTetOlxEf4');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6nTetOlxEf4');
const duration = 500;
const easing = 'ease-out';
const id = '601V5wh2nHS_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
