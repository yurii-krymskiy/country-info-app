import express from 'express';
import { addHolidaysToCalendar } from '../controllers/calendarController';

const router = express.Router();

router.post('/:userId/calendar/holidays', addHolidaysToCalendar);

export default router;
