import { useEffect } from "react";
import "./styles.css";

const data = {
  name: "Joe Bost",
  location: "Seattle",
  company: "@aws",
  avatar: "me.png",
};

const link = {
  company: "https://aws.amazon.com/",
  bgf: "https://en.wikipedia.org/wiki/Big-game_fishing",
  goodreads: "https://www.goodreads.com/joebost",
  chess: "https://www.chess.com/member/ddawnn",
  github: "https://github.com/joebost",
  linkedin: "https://www.linkedin.com/in/joe-bost/",
  email: "mailto:joebost090@gmail.com"
};

interface IconProps {
  readonly id: string;
  readonly src: string;
  readonly link: string;
  readonly alt: string;
}

const icons: Record<string, IconProps> = {
  github: {
    id: "github",
    src: "github.png",
    link: link.github,
    alt: "github",
  },
  linkedin: {
    id: "linkedin",
    src: "linkedin.png",
    link: link.linkedin,
    alt: "linkedin",
  },
  email: {
    id: "email",
    src: "email.png",
    link: link.email,
    alt: "email"
  }
};

export default function App() {
  return (
    <div className="App">
      <img className="Me" src={data.avatar} alt="me" />
      <h1>{data.name}</h1>
      <h5>Software Engineer</h5>
      <div className="Icons">
        <Icon {...icons.github} />
        <Icon {...icons.linkedin} />
        <Icon {...icons.email} />
      </div>
      <p>
        Currently living in {data.location} working{" "}
        <a href={link.company}>{data.company}</a>.
      </p>
      <p>Lived in Charleston, SC.</p>
      <p>Majored in CS at Clemson University.</p>
      <p>
        Worked on <a href={link.bgf}>big game fishing</a> boats on the east
        coast.
      </p>
      <p>Ran minecraft servers like Nextpvp & NextMC.</p>
      <p>
        Enjoy <a href={link.goodreads}>reading</a> and{" "}
        <a href={link.chess}>chess</a>.
      </p>
    </div>
  );
}

function Icon(props: IconProps) {
  return (
    <div className="Icon">
      <a href={props.link}>
        <img id={props.id} src={props.src} alt={props.alt} />
      </a>
    </div>
  );
}
