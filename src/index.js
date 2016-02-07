'use strict';

const makeEmoteMap = require('./makeEmoteMap');
const makeParseMessage = require('./makeParseMessage');

const emotes = makeEmoteMap.unsafePerformIO();

let maxCount = 5;

function demFeels(msg) {
  return makeParseMessage(emotes, maxCount, msg);
}

demFeels.getEmotes = function() {
  return emotes;
};

demFeels.setMaxCount = function(count) {
  maxCount = count;
};

module.exports = demFeels;
