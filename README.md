# jellyfish-Brain


## About

`jellyfish-brain` is a library of a simple [Neural Networks](http://en.wikipedia.org/wiki/Artificial_neural_network) written in JavaScript.

:bulb: **Note**: You're welcome to check my github repository [**GabiCtrlZ/simple-brain**](https://github.com/gabictrlz/simple-brain).

# Examples
Here's an example showcasing how to learn a simple task

```javascript
const Brain = require('jellyfish-brain') //require the brain library
const data = [ //an array of training data
    {data: [0, 1, 1], result: 0},
    {data: [0, 0, 1], result: 0},
    {data: [0, 1, 0], result: 0},
    {data: [1, 0, 1], result: 1},
    {data: [1, 1, 0], result: 1},
]

const b = new Brain(3) // creating new brain instance
b.train(data) // training the brain on the data
b.test([1, 0, 0]) // will result in a value between 0-1 on how likely it should result in 1, in this case about 0.98
b.testPrettify([0, 0, 1]) // same as test only a value between 0-100, will result in about 2
```

# Usage

### Node
If you have [node](http://nodejs.org/), you can install `jellyfish-brain` with [npm](http://npmjs.org):

```
npm install jellyfish-brain
```

Or if you prefer yarn:
```
yarn add jellyfish-brain
```

# Training
Use `train()` to train the network with an array of training data. The network has to be trained with all the data in bulk in one call to `train()`. More training patterns will probably take longer to train, but will usually result in a network better
at classifying new patterns.

### Data format
#### For training with `NeuralNetwork`
Each training pattern should have an `input` and an `output`, both of which can be either an array of numbers from `0` to `1`.