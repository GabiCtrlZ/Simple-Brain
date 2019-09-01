const Brain = require('./brain')
const data = require('./data')

const b = new Brain(3)
b.train(data)
b.test([1, 0, 0])
b.testPrettify([0, 0, 1])