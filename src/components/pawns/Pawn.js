import classes from "./Pawn.module.css";
import { ReactComponent as Ankylosaurus } from "./ankylosaurus.svg";
import { ReactComponent as Allosaurus } from "./allosaurus.svg";
import { ReactComponent as Diplodocus } from "./diplodocus.svg";

function Pawn({ move, player }) {
  const styles =
    player === "machine" ? classes["dyno-machine"] : classes["dyno-human"];
  let svgImage;
  switch (move) {
    case 1:
      svgImage = <Allosaurus className={styles} />;
      break;
    case 2:
      svgImage = <Ankylosaurus className={styles} />;
      break;
    case 3:
      svgImage = <Diplodocus className={styles} />;
      break;
    default:
      svgImage = <div>IMAGE NOT FOUND</div>;
      break;
  }

  return svgImage;
}

export default Pawn;
