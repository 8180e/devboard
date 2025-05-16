const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const API_URL = import.meta.env.VITE_API_URL;

const GitHubLogin = () => {
  const redirectToGitHub = () => {
    const redirectUri = encodeURIComponent(`${API_URL}/auth`);
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=read:user user:email`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="rounded bg-white p-8 text-center shadow-md dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
          Login with GitHub
        </h2>
        <button
          onClick={redirectToGitHub}
          className="rounded bg-black px-6 py-2 text-white transition hover:bg-gray-800"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default GitHubLogin;
