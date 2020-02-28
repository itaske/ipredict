let router=require('express').Router();
let Fixtures=require('../controllers/fixtures');

router.get('/',Fixtures.getFixures);
router.post('/',Fixtures.postFixtures);

module.exports=router;