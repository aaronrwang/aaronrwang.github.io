import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type RepoData = {
  name: string;
  html_url: string;
  description?: string;
  stargazers_count?: number;
  forks_count?: number;
  language: string;
  updated_at: string;
};

export function GitHubRepoCard({ repo }: { repo: RepoData }) {

  // const repo: RepoData = {
  //   name: 'repo',
  //   html_url: 'https://api.github.com/repos/aaronrwang/ND-Coursework',
  //   language: 'c++',
  //   updated_at: '5/12/2025',
  // }


  return (
    <div className="border rounded-xl p-4 shadow-lg max-w-xl bg-white dark:bg-neutral-900 text-black dark:text-white">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold flex items-center gap-2 hover:underline">
        <FaGithub /> {repo.name}
      </a>
      <div className="flex gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
        <span>{repo.language}</span>
        <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
export default function Projects() {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/aaronrwang/repos')
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos)
        const targetRepos = repos.filter((r: any) => ['my-repo', 'another-repo'].includes(r.name));
        setRepos(repos);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {repos.map((repo: RepoData) => (
        <GitHubRepoCard key={repo.html_url} repo={repo} />
      ))}
    </div>
  );
}