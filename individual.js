const NeuralNet = require('./neuralNetwork')

class Indev {
    constructor(num, net = null) {
        if (net == null) {
            this.neuralNet = new NeuralNet(num)
        }
        else {
            this.neuralNet = this.mutatNeuralNet(net)
        }
    }
    mutatNeuralNet(net) {
        let modified = {inputs: {}}
        for (let key of Object.keys(net.inputs)) {
            let maxKey = net.inputs[key] + (Math.random() * 0.5 - 0.25)
            modified.inputs[key] = Math.min(Math.max(maxKey, 0), 1)
        }
        return modified
    }
    test(data) {
        let weightedSum = 0
        for (let i = 0; i < data.length; i++) {
            weightedSum += data[i] * this.neuralNet.inputs[i]
        }
        return (Math.tanh(weightedSum) + 1) / 2
    }
    getFitness(data, result) {
        let weightedSum = this.test(data)
        return Math.abs(result - weightedSum)
    }
}

module.exports = Indev