let router=require('express').Router();

let predictionScores=require('../controllers/predictionscores');

router.post('/',predictionScores.savePrediction);


module.exports=router;