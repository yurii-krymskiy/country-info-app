/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import axios from 'axios';
import Event from '../models/Event';
import { Holiday } from '../types/holiday';

export const addHolidaysToCalendar = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { countryCode, year, holidays } = req.body;

  try {
    const { data } = await axios.get(
      `${process.env.NAGER_PUBLIC_HOLIDAYS_URL}/${year}/${countryCode}`
    );

    const filtered = holidays
      ? data.filter((h: Holiday) => holidays.includes(h.name))
      : data;

    const events = filtered.map((h: Holiday) => ({
      userId,
      name: h.name,
      date: h.date,
      countryCode,
    }));

    await Event.insertMany(events);

    res.status(201).json({ added: events.length });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add holidays' });
  }
};
