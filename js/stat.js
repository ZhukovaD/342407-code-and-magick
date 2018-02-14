'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;

  var FONT_SIZE = 16;
  var letterSpacing = FONT_SIZE / 3;

  var cloudPaddingRight = CLOUD_X + CLOUD_WIDTH / 10;
  var cloudPaddingTop = CLOUD_Y + CLOUD_HEIGHT / 10;
  var cloudPaddingBottom = CLOUD_Y + CLOUD_HEIGHT - cloudPaddingTop + FONT_SIZE;

  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var barPaddingBottom = cloudPaddingBottom - FONT_SIZE - letterSpacing;


  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };


  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (maxElement < arr[i]) {
        maxElement = arr[i];
      }
    }
    return (maxElement);
  };

  var drawStat = function (ctx, color, i, times, maxTime) {
    ctx.fillStyle = color;
    ctx.fillRect(cloudPaddingRight + (BAR_WIDTH + BAR_GAP) * i, barPaddingBottom, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]).toString(), cloudPaddingRight + (BAR_WIDTH + BAR_GAP) * i, -(BAR_HEIGHT * times[i]) / maxTime + barPaddingBottom - letterSpacing);

  };


  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура! Вы победили!', cloudPaddingRight, cloudPaddingTop);
    ctx.fillText('Список результатов:', cloudPaddingRight, cloudPaddingTop + FONT_SIZE + letterSpacing);


    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], cloudPaddingRight + (BAR_WIDTH + BAR_GAP) * i, cloudPaddingBottom);
      if (names[i] === 'Вы') {
        drawStat(ctx, 'rgba(255, 0, 0, 1)', i, times, maxTime);
      } else {
        drawStat(ctx, 'rgba(1, 0, 115, ' + Math.random() + ')', i, times, maxTime);
      }
    }
  };
})();
