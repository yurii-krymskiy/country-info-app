import express from 'express';
import { getAvailableCountries, getCountryInfo } from '../controllers/countryController';

const router = express.Router();

router.get('/', getAvailableCountries);
router.get('/:countryCode', getCountryInfo);

export default router;
