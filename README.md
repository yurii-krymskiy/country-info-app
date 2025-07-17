# 🌍 Country Info App - Backend

This is a Node.js (Express) + TypeScript backend application that provides detailed information about countries, including population stats, bordering countries, and national holidays. It also allows users to add holidays to their calendar.

---

## 🚀 Features

- ✅ Get available countries (`/countries`)
- ✅ Fetch country info (borders, flag, population)
- ✅ Add selected national holidays to a user's calendar
- ✅ Uses external APIs: Nager.Date & CountriesNow
- ✅ MongoDB integration to store calendar events
- ✅ Environment-based configuration using `.env`
- ✅ ESLint & Prettier configured for clean code

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- **Axios**
- **ESLint + Prettier**

---

## 📦 Installation

```bash
git clone https://github.com/yurii-krymskiy/country-info-app.git
cd country-info-app
npm install
```

## ⚙️ Environment Setup

Create a .env file in the root directory:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/country-info
NAGER_AVAILABLE_COUNTRIES_URL=https://date.nager.at/api/v3/AvailableCountries
NAGER_COUNTRY_INFO_URL=https://date.nager.at/api/v3/CountryInfo
NAGER_PUBLIC_HOLIDAYS_URL=https://date.nager.at/api/v3/PublicHolidays
COUNTRIESNOW_POPULATION_URL=https://countriesnow.space/api/v0.1/countries/population
COUNTRIESNOW_FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images
```

## 🏁 Running the App

```
npm run dev
```

For production build:

```
npm run build
npm start
```

## 🧪 API Endpoints

📍 Get All Available Countries
```
GET /countries
```
Fetches a list of countries from Nager.Date API.

📍 Get Country Info
```
GET /countries/:countryCode
```
Returns:
```
Borders
Historical population data
Flag URL
```
📍 Add Holidays to User Calendar
```
POST /users/:userId/calendar/holidays
```

Request Body:
```
{
  "countryCode": "US",
  "year": 2025,
  "holidays": ["New Year's Day", "Independence Day"]
}
```

## 🧹 Code Quality

```
npx eslint 'src/**/*.ts' --fix
npx prettier --write .
```

## 📁 Folder Structure

src/
│
├── controllers/
│   └── countryController.ts
│   └── calendarController.ts
├── models/
│   └── Event.ts
├── routes/
│   └── countryRoutes.ts
│   └── calendarRoutes.ts
├── types/
│   └── holiday.ts
├── app.ts
📝 Notes

Make sure MongoDB is running locally or provide a cloud URI.
All external API URLs are stored in .env for flexibility.
Ensure ESLint version is 9+ with Flat Config support.
