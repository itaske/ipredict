let router=require('express').Router();

let scoreboard=require('../controllers/scoreboard');

router.get('/',scoreboard.getScoreboard);

router.post('/',scoreboard.createScoreboardForCurrentUsers);

module.exports=router;