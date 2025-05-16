import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GitCommit, GitPullRequest, Star } from "lucide-react";
import axios from "axios";

type Commit = { repo: { name: string }; created_at: string };
type PullRequest = { title: string; html_url: string };
type Repo = { html_url: string; full_name: string };
type ActivityResponse = {
  commits: Commit[];
  pullRequests: PullRequest[];
  starred: Repo[];
};

const GitHubActivity = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [starred, setStarred] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { commits: commitRes, pullRequests: prRes, starred: starRes },
      }: { data: ActivityResponse } = await axios.get("github/activity");

      setCommits(commitRes);
      setPullRequests(prRes);
      setStarred(starRes);
    };
    fetchData();
  }, []);

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h2 className="mb-4 text-xl font-semibold">GitHub Activity</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <GitCommit className="h-4 w-4" /> Recent Commits
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {commits.slice(0, 5).map((event, i) => (
                <li key={i}>
                  {`${event.repo.name} -
                  ${new Date(event.created_at).toLocaleString()}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <GitPullRequest className="h-4 w-4" /> Pull Requests
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {pullRequests.slice(0, 5).map((pr, i) => (
                <li key={i}>
                  <a
                    href={pr.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pr.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <Star className="h-4 w-4" /> Starred Repos
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {starred.slice(0, 5).map((repo, i) => (
                <li key={i}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.full_name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubActivity;
