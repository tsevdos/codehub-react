const UserCards = () => {
  return (
    <div>
      <h2>My user cards</h2>
      <hr />
      <div style={{ width: "300px" }}>
        <img
          alt="John Tsevdos photo"
          src="https://avatars1.githubusercontent.com/u/175707"
          width="300px"
          height="300px"
        />
        <h3>John Tsevdos (tsevdos)</h3>
        <p>is admin: yes</p>
      </div>
      <div style={{ width: "300px" }}>
        <img
          alt="Alan Turing photo"
          src="https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg"
          width="300px"
          height="300px"
        />
        <h3>Alan Turing (turing)</h3>
        <p>is admin: no</p>
      </div>
    </div>
  );
};

export default UserCards;
