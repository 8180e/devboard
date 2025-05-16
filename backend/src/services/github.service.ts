import axios from "axios";
import {
  GITHUB_ACCESS_TOKEN as ACCESS_TOKEN,
  GITHUB_CLIENT_ID as CLIENT_ID,
  GITHUB_CLIENT_SECRET as CLIENT_SECRET,
} from "../config/env.config.js";
import { Octokit } from "octokit";
import { UnauthorizedError } from "../utils/errors.util.js";

const octokit = new Octokit({ auth: ACCESS_TOKEN });

const getAccessToken = async (code: string) => {
  const {
    data: { access_token },
  } = await axios.post(
    "https://github.com/login/oauth/access_token",
    { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
    { headers: { Accept: "application/json" } }
  );

  return access_token;
};

const getGithubActivity = async (accessToken: string | undefined) => {
  if (!accessToken) {
    throw new UnauthorizedError("Access token is required");
  }

  const {
    data: { login: username },
  } = await axios.get("https://api.github.com/user", {
    headers: { Authorization: accessToken },
  });

  const [commitRes, prRes, starRes] = await Promise.all([
    octokit
      .request("GET /users/{username}/events", { username })
      .then((res) => res.data),
    octokit
      .request("GET /search/issues", {
        q: `author:${username}+type:pr`,
        advanced_search: "true",
      })
      .then((res) => res.data),
    octokit
      .request("GET /users/{username}/starred", { username })
      .then((res) => res.data),
  ]);

  return {
    commits: commitRes.filter((event) => event.type === "PushEvent"),
    pullRequests: prRes.items || [],
    starred: starRes || [],
  };
};

export { getAccessToken, getGithubActivity };
