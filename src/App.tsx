import React, { useEffect, useState } from 'react';
import './App.scss';
import Filters from './components/Filters';
import JobCard, { IJob } from './components/JobCard';
import jobdata from './data.json';

function App() {
  const jobs = jobdata;

  const [jobss, setJobs] = useState<IJob[]>(jobdata);

  const [role, setRole] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [languages, setLanguages] = useState<string[]>([]);

  const handlePickFilter = (value: string, category: string) => {
    console.log('!!! handlePickFilter ', value, category);

    if (category === 'role') {
      setRole(role !== value ? value : '');
    }

    if (category === 'level') {
      setLevel(level !== value ? value : '');
    }

    if (category === 'language') {
      if (languages.includes(value)) {
        setLanguages(languages.filter((lang, idx) => lang !== value));
      } else {
        setLanguages([...languages, value]);
      }
    }
  };

  const handleFilterRemove = (category: string, value: string) => {
    if (category === 'role') {
      setRole('');
    }
    if (category === 'level') {
      setLevel('');
    }

    if (category === 'language') {
      const newLangs = languages.filter((lang, idx) => lang !== value);
      setLanguages(newLangs);
    }
  }

  useEffect(() => {
    let newJobs = jobdata;

    if (role !== '') {
      newJobs = newJobs.filter((job, idx) => job.role === role);
    }

    if (level !== '') {
      newJobs = newJobs.filter((job, idx) => job.level === level);
    }

    if (languages.length > 0) {
      newJobs = newJobs.filter((job, idx) => {
        let hasLang = true;

        languages.forEach((lang, idx) => {
          if (!job.languages.includes(lang)) {
            hasLang = false;
          }
        });

        return hasLang;
      });
    }

    setJobs(newJobs);
  }, [role, level, languages]);

  return (
    <div className="App">
      <div className="Header" style={{ backgroundImage: "url('images/bg-header-desktop.svg')" }}></div>
      <div className="container">
        {(role !== '' || level !== '' || languages.length > 0) && (
          <Filters
            role={role}
            level={level}
            languages={languages}
            onClear={() => {
              setRole('');
              setLevel('');
              setLanguages([]);
            }}
            removeFilter={handleFilterRemove}
          />
        )}
      </div>

      <div className="container">
        {jobss.map((job, idx) => (
          <JobCard key={idx} job={job} onPick={(value: string, category: string) => handlePickFilter(value, category)} />
        ))}
      </div>
    </div>
  );
}

export default App;
