import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";

const TWENTY_FIVE_MINUTES = 25 * 60;
const SECONDS_PER_MINUTE = 60;

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(TWENTY_FIVE_MINUTES);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }
  }, [isRunning, intervalId]);

  const formatTime = (seconds: number) => {
    const mins = String(Math.floor(seconds / SECONDS_PER_MINUTE)).padStart(
      2,
      "0",
    );
    const secs = String(seconds % SECONDS_PER_MINUTE).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 text-center">
        <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold">
          <Timer className="h-5 w-5" /> Pomodoro Timer
        </h2>
        <div className="mb-4 text-4xl font-bold">{formatTime(timeLeft)}</div>
        <div className="flex justify-center gap-4">
          <Button onClick={() => setIsRunning(true)}>Start</Button>
          <Button onClick={() => setIsRunning(false)}>Pause</Button>
          <Button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(TWENTY_FIVE_MINUTES);
            }}
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PomodoroTimer;
