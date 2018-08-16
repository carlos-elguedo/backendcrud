const express = require('express')
const router = express.Router()
const providersCtrl = require('../controllers/providersCtrl')


router.get('/', providersCtrl.getProviders)
router.post('/', providersCtrl.createProvider)
router.get('/:id', providersCtrl.getProvider)
router.put('/:id', providersCtrl.editProvider)
router.delete('/:id', providersCtrl.deleteProvider)

module.exports = router