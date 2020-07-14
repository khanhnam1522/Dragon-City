const Dragon = require('./index');
const base64 = require('base-64');
const random_name = require('node-random-name');

class Breeder {
    static breedDragon({ matron, patron }) {
        const matronTraits = matron.traits;
        const patronTraits = patron.traits;
    
        const babyTraits = [];
    
        matronTraits.forEach(({ traitType, traitValue }) => {
            const matronTrait = traitValue;
    
            const patronTrait = patronTraits.find(
                trait => trait.traitType === traitType
            ).traitValue;
    
            babyTraits.push({
                traitType,
                traitValue: Breeder.pickTrait({ matronTrait, patronTrait })
            });
        });
    
        return new Dragon({ nickname: random_name(), traits: babyTraits });
    }

    static pickTrait({ matronTrait, patronTrait }) {
        if (matronTrait === patronTrait) return matronTrait;

        const matronTraitCharSum = Breeder.charSum(base64.encode(matronTrait));
        const patronTraitCharSum = Breeder.charSum(base64.encode(patronTrait));

        const randNum = Math.floor(Math.random() * (matronTraitCharSum + patronTraitCharSum))

        return randNum < matronTraitCharSum ? matronTrait : patronTrait;
    }
    
    static charSum(string) {
        return string.split('').reduce(
            (sum, character) => sum += character.charCodeAt(),
            0
        );
    }
}

module.exports = Breeder;