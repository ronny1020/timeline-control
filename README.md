# timeline-control

[![NPM](https://img.shields.io/npm/v/timeline-control.svg)](https://www.npmjs.com/package/timeline-control) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What is this

A tool for controlling whatever you want to do on anywhere on time line.

## Install

```bash
npm i timeline-control
```

## Usage

```jsx
import runTimeline from 'timeline-control'

let count = 0
const t = [
  {
    timeInterval: 1000,
    repeat: 10,
    action: () => {
      count++
      console.log(count)
    },
  },
  { timeInterval: 1000, action: () => console.log('end') },
]

setTimeline(t)
```

## Properties

| property     | type     | default  | description                                        |
| ------------ | -------- | -------- | -------------------------------------------------- |
| timeInterval | number   | 0        | The time interval between the last action or start |
| repeat       | number   | 1        | Times to repeat this function                      |
| action       | function | () => {} | Action to do on the moment                         |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [ronny1020](https://github.com/ronny1020)
