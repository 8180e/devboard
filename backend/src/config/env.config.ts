import "dotenv/config";

export const {
  PORT = 3000,
  GITHUB_ACCESS_TOKEN,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  OPENWEATHERMAP_API_KEY,
  FRONTEND_URLS,
} = process.env as Record<string, string>;
