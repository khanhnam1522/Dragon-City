const TRAITS = require('../../data/traits');
const random_name = require('node-random-name');

const DEFAULT_PROPERTIES = {
    dragonId: undefined,
    nickname: 'unnamed',
    generationId: undefined,
    isPublic: false,
    saleValue: 0,
    breedValue: 0,
    get birthdate(){
        return new Date();
    },
    get randomTraits(){
        const traits = [];
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];
            traits.push({traitType, traitValue});
        });
        return traits;
    }
}
class Dragon {
    constructor({dragonId,birthdate, nickname, traits, generationId, isPublic, saleValue, breedValue} = {}){
        this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || random_name();
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
        this.isPublic = isPublic || DEFAULT_PROPERTIES.isPublic;
        this.saleValue = saleValue || DEFAULT_PROPERTIES.saleValue;
        this.breedValue = breedValue || DEFAULT_PROPERTIES.breedValue;
    }
}

module.exports = Dragon;