import Widget from "./Widget";

const WidgetApp = () => {
  return (
    <div>
      <h2>Component and code dublication</h2>
      <hr />
      <Widget
        title="Website traffic"
        imageUrl="https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
        endpoint="https://api.npoint.io/157ca596ba27de2df1ce"
        btnTitle="Fetch website traffic data"
      />
      <Widget
        title="Website errors"
        imageUrl="https://cdn-icons-png.flaticon.com/512/753/753344.png"
        endpoint="https://api.npoint.io/e0c521123b42e8e2b9cc"
        btnTitle="Fetch website traffic data"
      />
    </div>
  );
};

export default WidgetApp;
