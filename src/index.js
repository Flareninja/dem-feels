'use strict';

const R = require('ramda');

const compose = R.compose;
const curry = R.curry;
const head = R.head;
const last = R.last;
const indexOf = R.indexOf;
const join = R.join;
const prop = R.prop;
const replace = R.replace;
const slice = R.slice;
const split = R.split;
const tail = R.tail;
const toLower = R.toLower;
const trim = R.trim;

const makeEmoteMap = require('./makeEmoteMap');

// imgTag :: String
const imgTag = '<img src="{url}" title="{name}" width="50" height="50" />';

// parseEmote :: String -> String -> String
const parseEmote = function(url, name) {
  const template = compose(replace('{name}', name), replace('{url}', url));
  return template(imgTag);
};

console.log(parseEmote('lol.png', 'phil'))

// msgToList :: String -> String
const msgToList = compose(split(' '), trim);


// makeParseMessage :: String -> String
const makeParseMessage = curry(function(msg, defaultMaxCount, emotes) {
  const list = msgToList(msg);

  const parsed = list.reduce(function(acc, cur) {
    const token = toLower(cur);
    const isEmote = prop(token, emotes);
    console.log(isEmote, acc.count, token)
    if (isEmote && acc.count < defaultMaxCount) {
      const p = slice(0, indexOf(token, acc.list) + 1, acc.list);
      const o = replace(token, parseEmote(isEmote, token), join(' ', p))
      //console.log(p, o);
      return {
        list: tail(acc.list),
        count: acc.count + 1,
        output: acc.output + ' ' + o
      };
    } else {
      return {
        list: tail(acc.list),
        count: acc.count,
        output: acc.output + ' ' + cur
      };
    }
  }, {list: list, count: 0, output: ''});
console.log('\n\n')
  return parsed.output
});
const emotes = makeEmoteMap.unsafePerformIO();
console.log(emotes);
console.log(makeParseMessage('hello feelsgd feelsgd yo feelsgd feelsgd feelsgd hmm feelsgd', 5, emotes));
