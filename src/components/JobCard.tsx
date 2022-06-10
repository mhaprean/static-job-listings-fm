import './JobCard.scss';

export interface IJob {
  company?: string;
  logo?: string;
  new?: boolean;
  featured?: boolean;
  position?: string;
  role?: string;
  level?: string;
  postedAt?: string;
  contract?: string;
  location?: string;
  languages?: string[];
  tools?: string[];
}

interface IPropsJobCard {
  job: IJob
  onPick?: (value: string, category: string) => void;
}

const JobCard = ({job, onPick }: IPropsJobCard) => {

  const handlePick = (value: string, category: string) => {
    if (onPick) {
      onPick(value, category);
    }
  };
  return (
    <div className="JobCard">
      <div className="image">
        <img src={job.logo} alt="" />
      </div>

      <div className="content">
        <div className="header">
          <div className="title">{job.company}</div>
          {job.new && <label className="label label-new">NEW!</label>}
          {job.featured && <label className="label label-featured">FEATURED</label>}
        </div>
        <div className="body">
          <div className="job-info">
            <div className="position">{job.position}</div>

            <div className="meta">
              <div className="meta-item">{job.postedAt}</div>
              <div className="meta-item dot">•</div>
              <div className="meta-item">{job.contract}</div>
              <div className="meta-item dot">•</div>
              <div className="meta-item">{job.location}</div>
            </div>
          </div>

          <div className="tags">
            <div className="tag" onClick={() => handlePick(job.role || '', 'role')}>
              {job.role}
            </div>

            <div className="tag" onClick={() => handlePick(job.level || '', 'level')}>
              {job.level}
            </div>

            {job.languages?.map((lang, idx) => (
              <div className="tag" key={idx} onClick={() => handlePick(lang || '', 'language')}>
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
