const Indev = require('./individual')

class Population {
    constructor(popSize, num) {
        this.population = this.createPopulation(popSize, num)
        this.popSize = popSize
        this.num = num
    }
    createPopulation(popSize, num) {
        let population = []
        for (let i = 0; i < popSize; i++) {
            population.push(new Indev(num))
        }
        return population
    }
    getFitness(indev, testData) {
        let fitness = 0
        for (let test of testData) {
            fitness += indev.getFitness(test.data, test.result)
        }
        return fitness
    }
    bestOfPopulation(testData) {
        let bestFitness = this.getFitness(this.population[0], testData)
        let bestIndev = this.population[0]
        let bestArr = [{bestFitness, bestIndev}, {bestFitness, bestIndev}, {bestFitness, bestIndev}]
        for (let indev of this.population){
            let fitness = this.getFitness(indev, testData)
            if (fitness < bestFitness){
                bestFitness = fitness
                bestIndev = indev
                bestArr[2] = {...bestArr[1]}
                bestArr[1] = {...bestArr[0]}
                bestArr[0] = {bestFitness, bestIndev}
            }
        }
        return bestArr
    }
    modifyPopulation(bestArr){
        let population = []
        let i = 0
        while (i < this.popSize) {
            population.push(new Indev(this.num, bestArr[i % 3].bestIndev.neuralNet))
            i ++
        }
        this.population = population
    }
}

module.exports = Population