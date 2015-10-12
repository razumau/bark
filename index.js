/*
Clark (https://github.com/ajacksified/Clark by Jack Lawson) converted to bar charts.
*/

(function(root) {
  var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇'],
      data;

  var clark = function(data) {
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
    module.exports = clark;
  } else if((typeof define === 'function') && define.amd) {
    // AMD
    define('clark', [], function() {
      root.clark = clark;
      return clark;
    });
  } else {
    // Browser global
    root.clark  = clark;
  }
}).call(this);
