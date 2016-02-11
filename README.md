# dem-feels

A meme based emoticon standard.

[![Build Status](https://travis-ci.org/CreaturePhil/dem-feels.svg)](https://travis-ci.org/CreaturePhil/dem-feels)
[![Dependency Status](https://david-dm.org/CreaturePhil/dem-feels.svg)](https://david-dm.org/CreaturePhil/dem-feels)
[![devDependency Status](https://david-dm.org/CreaturePhil/dem-feels/dev-status.svg)](https://david-dm.org/CreaturePhil/dem-feels#info=devDependencies)

## example

```js
const demFeels = require('dem-feels');

demFeels('hello world! feelsgd');
// => hello world! <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsgd.png" title="feelsgd" width="50" height="50" />'
```

## emotes

**Emote** | **Name** | **Description**
--------- | -------- | ---------------
[![feelsgd](emotes/feelsgd.png)](https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsgd.png) | feelsgd | Feels Good Man
[![feelsbd](emotes/feelsbd.png)](https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsbd.png) | feelsbd | Feels Bad Man
[![feelsmd](emotes/feelsmd.png)](https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsmd.png) | feelsmd | Feels Mad Man
[![feelsrs](emotes/feelsrs.png)](https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsrs.png) | feelsrs | Feels Serious Man
[![feelsok](emotes/feelsok.png)](https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsok.png) | feelsok | Feels Okay Man

## documentation

### demFeels(message)

Parses the message with dem feels. Default maximum count of parsing amount of
emotes is ``5``.

### demFeels.getEmotes()

Get an object of emotes. For example: ``{'feelsgd': 'https://cdn.rawgit.com/CreaturePhil/dem-feels/master/feelsgd.png'}``

### demFeels.setMaxCount(count)

Set the maximum number of emotes to parse. For example, limiting it to 1 will
only parse one emote:

```js
demFeels('feelsgd feelsgd');
// => <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsgd.png" title="feelsgd" width="50" height="50" /> feelsgd'
```

But setting it to 2 will parse two emotes:

```js
demFeels('feelsgd feelsgd');
// => <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsgd.png" title="feelsgd" width="50" height="50" /> <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/feelsgd.png" title="feelsgd" width="50" height="50" />'
```

## license

[MIT](LICENSE)
