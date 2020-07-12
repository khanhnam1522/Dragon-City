const pool = require('../../databasePool');
const { response } = require('express');

class TraitTable{
    static getTraitId({traitType, traitValue}){
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT id FROM trait WHERE "traitType" = $1 and "traitValue" = $2',
                [traitType, traitValue],
                (error,response) => {
                    if(error) return reject(error);
                    resolve({traitId: response.rows[0].id});
                }
            )
        });
    }
}

module.exports = TraitTable;