import { WeatherType } from "./WeatherType";

export interface IWeatherData {
    date: string;
    day: {
        mintemp_c: number;
        maxtemp_c: number;
        avgtemp_c: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        }
    }
    weatherType: WeatherType;
}