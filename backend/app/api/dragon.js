const {Router} = require('express');
const DragonTable = require('../dragon/table');
const AccountDragonTable = require('../accountDragon/table')
const AccountTable = require('../account/table');
const {authenticatedAccount} = require('./helper');
const {getPublicDragons} = require('../dragon/helper');
const {getDragonWithTraits} = require('../dragon/helper');
const Breeder = require('../dragon/breeder');
const router = new Router();

router.get('/new', (req,res, next) => {
    let accountId, dragon;
    authenticatedAccount({sessionString: req.cookies.sessionString})
    .then(({account}) => {
        accountId = account.id;
        dragon = req.app.locals.engine.generation.newDragon({accountId});
        return DragonTable.storeDragon(dragon);
    })
    .then(({dragonId}) => {
        dragon.dragonId = dragonId;
        return AccountDragonTable.storeAccountDragon({accountId,dragonId});
    })
    .then(() => res.json ({dragon}))
    .catch(error => next(error));
});

router.put('/update', (req, res, next) => {
    const { dragonId, nickname, isPublic, saleValue, breedValue} = req.body;
  
    DragonTable.updateDragon({ dragonId, nickname, isPublic, saleValue, breedValue})
        .then(() => res.json({ message: 'successfully updated dragon' }))
        .catch(error => next(error));
});

router.get('/public-dragons', (req, res, next) => {
    getPublicDragons()
        .then(({ dragons }) => res.json({ dragons }))
        .catch(error => next(error));
});

router.post('/buy', (req, res, next) => {
    const { dragonId, saleValue } = req.body;
    let buyerId;
  
    DragonTable.getDragon({ dragonId })
        .then(dragon => {
            if (dragon.saleValue !== saleValue) {
                throw new Error('Sale value is not correct');
            }
    
            if (!dragon.isPublic) {
                throw new Error('Dragon must be public')
            }
    
            return authenticatedAccount({ sessionString: req.cookies. sessionString });
        })
        .then(({ account, authenticated }) => {
            if (!authenticated) {
                throw new Error('Unauthenticated')
            }
    
            if (saleValue > account.balance) {
                throw new Error('Sale value exceeds balance')
            }
    
            buyerId = account.id;
    
            return AccountDragonTable.getDragonAccount({ dragonId });
        })
        .then(({ accountId }) => {
            if (accountId === buyerId) {
                throw new Error('Cannot buy your own dragon!');
            }
    
            const sellerId = accountId;
    
            return Promise.all([
                AccountTable.updateBalance({
                    accountId: buyerId, value: -saleValue
                }),
                AccountTable.updateBalance({
                    accountId: sellerId, value: saleValue
                }),
                AccountDragonTable.updateDragonAccount({
                    dragonId, accountId: buyerId
                }),
                DragonTable.updateDragon({
                    dragonId, isPublic: false
                })
            ])
        })
        .then(() => res.json({ message: 'success!' }))
        .catch(error => next(error));
});

router.post('/mate', (req, res, next) => {
    const { matronDragonId, patronDragonId } = req.body;
  
    if (matronDragonId === patronDragonId) {
      throw new Error('Cannot breed with the same dragon!');
    }
  
    let matronDragon, patronDragon, patronBreedValue;
    let matronAccountId, patronAccountId;
  
    getDragonWithTraits({ dragonId: patronDragonId })
        .then(dragon => {
            if (!dragon.isPublic) {
                throw new Error('Dragon must be public');
            }
    
            patronDragon = dragon;
            patronBreedValue = dragon.breedValue;
    
            return getDragonWithTraits({ dragonId: matronDragonId })
        })
        .then(dragon => {
            matronDragon = dragon;
    
            return authenticatedAccount({ sessionString: req.cookies.sessionString });
        })
        .then(({ account, authenticated }) => {
            if (!authenticated) throw new Error('Unauthenticated');
    
            if (patronBreedValue > account.balance) {
                throw new Error('Breed value exceeds balance');
            }
    
            matronAccountId = account.id;
    
            return AccountDragonTable.getDragonAccount({ dragonId: patronDragonId });
        })
        .then(({ accountId }) => {
            patronAccountId = accountId;
    
            if (matronAccountId === patronAccountId) {
                throw new Error('Cannot breed your own dragons!');
            }
    
            const dragon = Breeder.breedDragon({ matron: matronDragon, patron: patronDragon });
    
            return DragonTable.storeDragon(dragon);
        })
        .then(({ dragonId }) => {
            Promise.all([
                AccountTable.updateBalance({
                    accountId: matronAccountId, value: -patronBreedValue
                }),
                AccountTable.updateBalance({
                    accountId: patronAccountId, value: patronBreedValue
                }),
                AccountDragonTable.storeAccountDragon({
                    dragonId, accountId: matronAccountId
                })
            ])
            .then(() => res.json({ message: 'success!' }))
        })
        .catch(error => next(error));
    
  });
  

module.exports = router;