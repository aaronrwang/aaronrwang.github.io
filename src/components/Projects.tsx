import { useEffect, useState } from 'react';
import { FaFolder, FaFile } from 'react-icons/fa';

type FileItem = {
  name: string;
  path: string;
  type: 'file' | 'dir';
  html_url: string;
};

// const GITHUB_API = 'https://api.github.com/repos/aaronrwang/ND-Coursework/contents/ACMS%2020750%20Math%20Methods%20II';
const GITHUB_API = 'PLEASE FAIL'

export default function Projects() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState(false);

  // useEffect(() => {
  //   fetch(GITHUB_API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFiles(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching files:', err);
  //       setLoading(false);
  //       setFail(true);
  //     });
  // }, []);

  if (loading) return <div>Loading files...</div>;
  if (fail) return <div> Failed to Retrieve Info</div>;
  return (
    <div className="max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Files in Repo</h2>
      <ul className="space-y-2">
        {files.map((file) => (
          <li key={file.path} className="flex items-center gap-2 text-sm">
            {file.type === 'dir' ? <FaFolder className="text-yellow-500" /> : <FaFile className="text-gray-600" />}
            <a
              href={file.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600 dark:text-blue-300"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}