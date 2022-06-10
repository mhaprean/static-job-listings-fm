import Filter from './Filter';
import './Filters.scss';

interface IPropsFilters {
  role: string;
  level: string;
  languages: string[];
  onClear: () => void;
  removeFilter: (category: string, value: string) => void;
}
const Filters = ({ role, level, languages, onClear, removeFilter }: IPropsFilters) => {
  return (
    <div className="Filters">
      <div className="filter-group">
        {role && <Filter name={role} category="role" onRemove={() => removeFilter('role', role)} />}
        {level && <Filter name={level} category="level" onRemove={() => removeFilter('level', level)} />}

        {languages.map((lang, idx) => (
          <Filter key={idx} name={lang} category="language" onRemove={() => removeFilter('language', lang)} />
        ))}
      </div>

      <button className="clear-button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default Filters;
