const test = require('tape');
const demFeels = require('../src');

// ei shorthand for emoteImage
function ei(name) {
  return '<img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/' + name + '.png" title="' + name + '" width="50" height="50" />';
}

test('parse a single emote', function(t) {
  t.plan(2);

  t.equal(demFeels('feelsgd'), ei('feelsgd'));

  t.equal(demFeels('feelsbd'), ei('feelsbd'));
});

test('parse multiple emotes', function(t) {
  t.plan(2);

  t.equal(demFeels('feelsgd feelsgd'), ei('feelsgd') + ' ' + ei('feelsgd'));

  t.equal(demFeels('feelsgd feelsbd'), ei('feelsgd') + ' ' + ei('feelsbd'));
});

test('dont parse emote if it is not seperated by a spaces', function(t) {
  t.plan(2);

  t.equal(demFeels('feelsgdfeelsgd'), 'feelsgdfeelsgd');

  t.equal(demFeels(' feelsgdfeelsgd '), 'feelsgdfeelsgd');
});

test('parse emote with other text', function(t) {
  t.plan(3);

  t.equal(demFeels('hi feelsgd'), 'hi ' + ei('feelsgd'));

  t.equal(demFeels('feelsgd bye'), ei('feelsgd') + ' bye');

  t.equal(demFeels('hi feelsgd bye'), 'hi '+ ei('feelsgd') + ' bye');
});

test('parse maximum emotes', function(t) {
  t.plan(2);

  const fg = ' ' + ei('feelsgd');
  const fb = ' ' + ei('feelsbd');

  t.equal(demFeels('hello feelsgd feelsgd feelsgd feelsgd feelsgd'), 'hello' + fg + fg + fg + fg + fg);

  t.equal(demFeels('sup feelsgd feelsgd feelsbd feelsgd feelsgd yo feelsgd feelsbd see ya'), 'sup' + fg + fg + fb + fg + fg + ' yo feelsgd feelsbd see ya');
});

test('increasing maxCount limit', function(t) {
  t.plan(1);

  demFeels.setMaxCount(10);

  const fg = ' ' + ei('feelsgd');
  const fb = ' ' + ei('feelsbd');

  t.equal(demFeels('sup feelsgd feelsgd feelsbd feelsgd feelsgd yo feelsgd feelsbd see ya'), 'sup' + fg + fg + fb + fg + fg + ' yo' + fg + fb + ' see ya');
});

test('getting emotes', function(t) {
  t.plan(1);

  t.equal(typeof demFeels.getEmotes(), 'object');
});

test('extend emotes', function(t) {
  t.plan(1);

  const oldEmotes = demFeels.getEmotes();

  const emotes = {
    'feelsnew': 'feelsnew.png'
  };

  demFeels.extendEmotes(emotes);

  t.deepEqual(demFeels.getEmotes(), Object.assign({}, oldEmotes, emotes));
});
