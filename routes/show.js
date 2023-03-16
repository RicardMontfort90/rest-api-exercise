const router = require('express').Router();
const Show = require('../models/Show');

// @desc    Get all shows
// @route   GET /shows
// @access  Public
router.get('/', async (req, res, next) => {
    try {
        const shows = await Show.find();
        res.status(200).json(shows);
    } 
    catch (error) {
        next(error);
    }
});

// @desc    Get one show
// @route   GET /shows/:showId
// @access  Public
router.get('/:showId', async (req, res, next) => {
    const {showId} = req.params;
    try {
        const show = await Show.findById(showId);
        res.status(200).json(show);
    } 
    catch (error) {
        next(error);
    }
});

// @desc    Create one show
// @route   POST /shows
// @access  Public
router.post('/', async (req, res, next) => {
    try {
        const show = await Show.create(req.body);
        res.status(201).json(show);
    } 
    catch (error) {
        next(error);
    }
});

// @desc    Edit one show
// @route   PUT /shows/:showId
// @access  Public
router.put('/:showId', async (req, res, next) => {
    const {showId} = req.params;
    try {
        await Show.findByIdAndUpdate(showId, req.body);
    } 
    catch (error) {
        next(error);
    }
});

// @desc    Delete one show
// @route   DELETE /shows/:showId
// @access  Public
router.delete('/:showId', async (req, res, next) => {
    const {showId} = req.params;
    try {
        const show = await Show.findByIdAndDelete(showId);
        res.status(204).json(show);
    } 
    catch (error) {
        next(error);
    }
});

module.exports = router;