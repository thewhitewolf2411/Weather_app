import * as React from "react";
import { Label, Spinner } from "@fluentui/react-components";

import { IWeatherData } from "../../Interface/IWeatherData";
import { Constants } from "../../Config/constants";
import WeatherBox from "../WeatherBox";
import "./WeatherView.css";

interface State {
  isLoading: boolean;
  weatherData: IWeatherData[];
}

export class WeatherView extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: false,
      weatherData: [],
    };
  }

  private async generateWeatherData() {
    try {
      const response = await fetch(
        `${Constants.baseUrl}?key=${Constants.WeatherApiKey}&q=London&days=5&aqi=no&alerts=no`
      );
      const responseData = await response.json();
      this.setState({ weatherData: responseData.forecast.forecastday });
    } catch (e) {
      console.log(e);
    }
    this.setState({ isLoading: false });
  }

  componentDidMount(): void {
    this.setState({ isLoading: true });
    this.generateWeatherData();
  }

  public render(): React.ReactNode {
    return (
      <div>
        <Label size="large" weight="semibold">
          Weather Forecast App
        </Label>

        {this.state.isLoading ? (
          <Spinner size="medium" />
        ) : (
          <div className="cards__container">
            {this.state.weatherData.map((item, index) => {
              return React.createElement(WeatherBox, { ...item, key: index });
            })}
          </div>
        )}
      </div>
    );
  }
}
