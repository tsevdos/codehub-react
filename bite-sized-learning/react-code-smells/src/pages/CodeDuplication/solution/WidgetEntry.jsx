const WidgetEntry = ({ title, number, percentage }) => (
  <div>
    <h3>{title}</h3>
    <p>
      {number} &nbsp;<span>{percentage}</span>
    </p>
  </div>
);

export default WidgetEntry;
