var should = require('should');
const utils = require('./utils');

describe('4) Given an array of numbers, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements', function() {
    it('Verify sending a positive array', function() {    
        const arrayNumber = [0,6,9,0,8,4,1];

        arrayOfNumbers = utils.sortArray(arrayNumber)
        arrayOfNumbers.should.be.eql([1,4,6,8,9,0,0])

    })

    it('Verify sending a positive array with repeated numbers', function() {
        const arrayNumber = [0,6,8,9,4,0,8,4,1];

        arrayOfNumbers = utils.sortArray(arrayNumber)
        arrayOfNumbers.should.be.eql([1,4,4,6,8,8,9,0,0])

    })

    it('Verify sending an array with negative and positive numbers', function() {
        let arrayNumber = [0,6,-8,9,4,0,8,-4,1];

        arrayOfNumbers = utils.sortArray(arrayNumber)
        arrayOfNumbers.should.be.eql([-8,-4,1,4,6,8,9,0,0])

    })

    it('Verify sending an array with just zeros', function() {
        // Verify sending a positive array
        let arrayNumber = [0,0,0,0];

        arrayOfNumbers = utils.sortArray(arrayNumber)
        arrayOfNumbers.should.be.eql([0,0,0,0])

    })

    it('Verify sending an array with numbers different to zeros', function() {
        let arrayNumber = [-4,-8,1,6,4,9,8];

        arrayOfNumbers = utils.sortArray(arrayNumber)
        arrayOfNumbers.should.be.eql([-8,-4,1,4,6,8,9])

    })

    it('Verify invalid data on array input chars', function() {
        let arrayNumber = [-4,-8,'b',1,6,'a',4,9,8];

        try{
            arrayOfNumbers = utils.sortArray(arrayNumber)
        }catch(e){
            e.should.be.eql('The array contains invalid data')
        }
    })

    it('Verify invalid data on array input symbols', function() {
        let arrayNumber = [-4,-8,'&',1,6,4,9,8];

        try{
            arrayOfNumbers = utils.sortArray(arrayNumber)
        }catch(e){
            e.should.be.eql('The array contains invalid data')
        }
    })

    it('Verify invalid data on array input float', function() {
        let arrayNumber = [-4,-8,1.5,1,6,,4,9,8];

        try{
            arrayOfNumbers = utils.sortArray(arrayNumber)
        }catch(e){
            e.should.be.eql('The array contains invalid data')
        }
    })

});