import express from 'express';
import { createListing, deleteListing, updateListing, showListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/user.js';

const router = express.Router();

router.post('/create',verifyToken,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);  
router.get('/get/:id',showListing);
export default router;