# dem-feels

A meme based emoticon standard.

## example

```js
const demFeels = require('dem-feels');

demFeels('hello world! feelsgd');
// => hello world! <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/feelsgd.png" title="feelsgd" width="50" height="50" />'
```

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
// => <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/feelsgd.png" title="feelsgd" width="50" height="50" /> feelsgd'
```

But setting it to 2 will parse two emotes:

```js
demFeels('feelsgd feelsgd');
// => <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/feelsgd.png" title="feelsgd" width="50" height="50" /> <img src="https://cdn.rawgit.com/CreaturePhil/dem-feels/master/feelsgd.png" title="feelsgd" width="50" height="50" />'
```

## license

[MIT](LICENSE)
