import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CloudSun } from "lucide-react";
import axios from "axios";

type Weather = {
  cityName: string;
  temp: number;
  description: string;
  humidity: number;
};

const WeatherAndTime = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const {
            data: {
              main: { temp, humidity },
              weather: [{ main: description }],
              name: cityName,
            },
          } = await axios.get(`weather?lat=${latitude}&lon=${longitude}`);
          setWeather({ cityName, temp, description, humidity });
        });
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchWeather();

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 text-center">
        <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold">
          <CloudSun className="h-5 w-5" /> Weather & Local Time
        </h2>
        {weather ? (
          <>
            <div className="mb-2 text-2xl font-medium">{weather.cityName}</div>
            <div className="mb-2 text-lg">Local Time: {formatTime(time)}</div>

            <div className="text-sm text-gray-700">
              <div>Temperature: {weather.temp}°C</div>
              <div>Condition: {weather.description}</div>
              <div>Humidity: {weather.humidity}%</div>
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-500">Loading weather...</div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherAndTime;
