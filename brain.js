const Population = require('./population')

class Brain {
    constructor(inputs, popSize = 100, gens = 100) {
        this.population = new Population(popSize, inputs)
        this.gens = gens
        this.best
    }
    train(data) {
        let allData = data.map(x => {
            return { data: this.converter(x.data), result: x.result }
        })
        let best
        for (let i = 0; i < this.gens; i++) {
            best = this.population.bestOfPopulation(allData)
            this.population.modifyPopulation(best)
        }
        this.best = best[0].bestIndev
    }
    test(testData) {
        const testNurmal = this.converter(testData)
        let score = this.best.test(testNurmal)
        console.log(this.numarlScore(score))
    }
    numarlScore(score) {
        return (1.265 * score - 0.126)
    }
    testPrettify(testData) {
        const testNurmal = this.converter(testData)
        let score = this.best.test(testNurmal)
        let niceNum = Math.floor(this.numarlScore(score) * 100)
        console.log(niceNum)
    }
    converter(test) {
        return test.map(x => x * 2 - 1)
    }
}

module.exports = Brain
