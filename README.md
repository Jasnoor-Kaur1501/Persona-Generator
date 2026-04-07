#WeatherMood 🌤️
Real-time weather with a personality.
WeatherMood fetches live weather data for any city and translates it into a vibe because "partly cloudy, 18°C" doesn't tell you how the day feels.
Features

Live weather data for any city worldwide
Translates conditions into a distinct mood/vibe with personality
Animated background orbs that shift based on weather
Humidity, wind speed, and feels-like temperature
Zero API key required, powered by Open-Meteo

Tech Stack
HTML · CSS · JavaScript · Open-Meteo API · Open-Meteo Geocoding API
How to Use

Clone or download the repo
Open index.html in your browser
Type any city name and hit Check vibe

No setup, no API key, no install needed.
API
Uses two free, open APIs — no account or key required:

Geocoding: https://geocoding-api.open-meteo.com/v1/search
Weather: https://api.open-meteo.com/v1/forecast

Vibe Categories
ConditionVibeHot + Sunnymain character summer energyWarm + Sunnygolden hour all dayCool + Clearcrisp and clear eraWarm + Cloudysoft diffused light energyCold + Cloudycozy blanket weatherWarm Rainpetrichor and chaosCold Rainfull melancholy mode activatedStormchaotic wind eraSnowsnow globe momentFogmysterious liminal hour
Project Structure
WeatherMood/
└── index.html    # everything lives here
About
Built as part of my journey into working with real external APIs. First project to move beyond localStorage and hit a live data source.
