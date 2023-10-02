import Profile from "./Profile";

const Header = () => (
  <header style={{ display: "flex", justifyContent: "space-between", border: "2px solid red" }}>
    <div className="logo">
      <img
        src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F2EP14mWkbx9sq03nWnRSGT%2Ff1d22d88bb5dde030275f9520c0f2e92%2FReact_YT_Thumbnail.png&w=1920&q=75&dpl=dpl_6mzijDzWQXRCmAJvwaFfyMYcMLqZ"
        height="100px"
      />
    </div>
    <nav>
      <ul style={{ display: "flex" }}>
        <li style={{ padding: "1rem", listStyleType: "none" }}>
          <a href="#">Menu item 1</a>
        </li>
        <li style={{ padding: "1rem", listStyleType: "none" }}>
          <a href="#">Menu item 2</a>
        </li>
        <li style={{ padding: "1rem", listStyleType: "none" }}>
          <a href="#">Menu item 3</a>
        </li>
        <li style={{ padding: "1rem", listStyleType: "none" }}>
          <a href="#">Menu item 4</a>
        </li>
      </ul>
    </nav>
    <Profile />
  </header>
);

export default Header;
