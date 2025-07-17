/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { Request, Response } from 'express';

export const getAvailableCountries = async (_: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${process.env.NAGER_BASE_URL}/AvailableCountries`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};

export const getCountryInfo = async (req: Request, res: Response) => {
  const { countryCode } = req.params;

  try {
    const countryInfoResp = await axios.get(`${process.env.NAGER_BASE_URL}/CountryInfo/${countryCode}`);
    const { borders, commonName } = countryInfoResp.data;

    const [populationResp, flagResp] = await Promise.all([
      axios.post(`${process.env.COUNTRIESNOW_POPULATION_URL}`, {
        country: commonName,
      }),
      axios.post(`${process.env.COUNTRIESNOW_FLAG_URL}`, {
        country: commonName,
      }),
    ]);

    res.json({
      borders,
      population: populationResp.data.data.populationCounts,
      flagUrl: flagResp.data.data.flag,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch country info' });
  }
};