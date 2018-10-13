import axios from 'axios';

const API_KEY = 'c2afc9c8761c37bb8a7f0a12edfa74c4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},india`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}