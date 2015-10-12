/*
Clark (https://github.com/ajacksified/Clark by Jack Lawson) converted to bar charts.
*/

(function(root) {
  var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇'],
      data;

  var bark = function(data) {
    var max = Math.max.apply(Math, data),
        currentTick;

    var i, len, results = [];

    for (i = 0, len = data.length; i < len; i++) {
      currentTick = data[i];
      results.push(ticks[Math.floor(currentTick / max * 7) - 1]);
    }

    return results.join('');
  };

  /* expose it to the world */

  if((typeof module !== "undefined") && module.exports){
    module.exports = bark;
  } else if((typeof define === 'function') && define.amd) {
    // AMD
    define('bark', [], function() {
      root.bark = bark;
      return bark;
    });
  } else {
    // Browser global
    root.bark  = bark;
  }
}).call(this);
