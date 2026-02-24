function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oABnbMNwEL":
        Script1();
        break;
      case "5bQ6qq12eHV":
        Script2();
        break;
      case "5iX100d0ieX":
        Script3();
        break;
      case "6V9ds1jKHI5":
        Script4();
        break;
      case "5YreBiTKa5K":
        Script5();
        break;
      case "5UjEd0WMAKy":
        Script6();
        break;
      case "6WhmN2xWrtj":
        Script7();
        break;
      case "6YkvN8Ul9fb":
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
