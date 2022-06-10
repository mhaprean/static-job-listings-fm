import './Filter.scss';

interface IPropsFilter {
  name: string;
  category: string;
  onRemove?: (name: string, category: string) => void;
}

const Filter = ({ name, category, onRemove = () => {} }: IPropsFilter) => {

    const handleOnRemove = () => {
        onRemove(name, category);
    }
  return (
    <div className="Filter">
      <span className="name">{name}</span>
      <button onClick={handleOnRemove}>
        <img src="./images/icon-remove.svg" alt="" />
      </button>
    </div>
  );
};

export default Filter;
