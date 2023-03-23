import "./index.css";

const TabsList = (props) => {
  const { tabsList, onClickCategory, isActive } = props;
  const { tabId, displayText } = tabsList;

  const onChangeTab = () => {
    onClickCategory(tabId);
  };

  const tabBtnClassName = isActive ? "tab-button active" : "tab-button";

  return (
    <li className="list-container">
      <button className={tabBtnClassName} type="button" onClick={onChangeTab}>
        <p className="tabList-para">{displayText}</p>
      </button>
    </li>
  );
};

export default TabsList;
