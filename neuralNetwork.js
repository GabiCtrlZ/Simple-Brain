class NeuralNet {
    constructor(num) {
        this.inputs = this.createConnections(num)
        this.bias = this.createBias()
    }
    createConnections(num) {
        let obj = {}
        for (let i = 0; i < num; i++) {
            obj[i] = Math.random() * 2 - 1
        }
        return obj
    }
    createBias() {
        if (Math.random() > 0.5) {
            return 1
        }
        else {
            return -1
        }
    }
}

module.exports = NeuralNet