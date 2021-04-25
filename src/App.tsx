import "./styles.css";

const data = {
  name: "Joe Bost",
  location: "Seattle",
  company: "@aws",
  avatar: "me.png"
};

const link = {
  company: "https://aws.amazon.com/",
  bgf: "https://en.wikipedia.org/wiki/Big-game_fishing",
  goodreads: "https://www.goodreads.com/joebost",
  chess: "https://www.chess.com/member/ddawnn"
};

export default function App() {
  return (
    <div className="App">
      <img className="Me" src={data.avatar} alt="me"/>
      <h1>{data.name}</h1>
      <h5>{data.location} based Software Engineer</h5>
      <p>Currently working <a href={link.company}>{data.company}</a>.</p>
      <p>Lived in Charleston, SC.</p>
      <p>Majored in CS at Clemson University.</p>
      <p>Worked on <a href={link.bgf}>big game fishing</a> boats on the east coast.</p>
      <p>Ran minecraft servers like Nextpvp & NextMC.</p>
      <p>Enjoy <a href={link.goodreads}>reading</a> and <a href={link.chess}>chess</a>.</p>
    </div>
  );
}