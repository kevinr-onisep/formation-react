import { Link } from "react-router";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>Bonjour et bienvenue, voici les action possible sur ce site :</div>
      <ul>
        <li>
          <Link to={"/editor"}>Nouveau</Link>
        </li>
        <li>
          <Link to={"/thumbs"}>thumbnail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
