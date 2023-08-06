import * as React from "react";
import {
  Label,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import {
  Body1,
  Caption1,
} from "@fluentui/react-components";

import './WeatherBox.css';
import { IWeatherData } from "../../Interface/IWeatherData";

export class WeatherBox extends React.Component<IWeatherData> {
  public getDayName(dateStr: string, locale: string): string {
    console.log(dateStr);
    var date = new Date(dateStr);
    console.log(date.toLocaleDateString(locale, { weekday: "long" }));
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  public render(): React.ReactNode {
    return (
      <Card className="card">
        <CardHeader
          header={
            <>
              <Body1>
                <b>{this.getDayName(this.props.date, "en-US")}</b>
              </Body1>
              <br></br>
              <Caption1>{this.props.date}</Caption1>
            </>
          }
        ></CardHeader>
        <CardPreview className="dataContainer">
          <img
            style={{ width: "60px", height: "60px" }}
            src={this.props.day.condition.icon}
            alt="Weather preview"
          />
          <Body1>
            <b>{this.props.day.avgtemp_c}&deg;C</b>
            <br></br>
            <Caption1>{this.props.day.condition.text}</Caption1>
          </Body1>
        </CardPreview>
        <CardFooter></CardFooter>
      </Card>
    );
  }
}
