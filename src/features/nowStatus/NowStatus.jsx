import { useOpenMeteo } from "../../hooks/useOpenMeteo";
import CurrentScore from "./CurrentScore";
import SeishiScore from "./SeishiScore";
import TideView from "./TideView";
import "../../css/nowStatus.css";

const NowStatus = () => {
  const { data, nowIndex } = useOpenMeteo();

  if (!data || nowIndex === null) return <p>読み込み中…</p>;

  
  return (
    <section className="now-status">
      <div className="now-column">
        <CurrentScore data={data} nowIndex={nowIndex} />
      </div>

      <div className="now-column">
        <TideView />
      </div>

      <div className="now-column">
        <SeishiScore data={data} nowIndex={nowIndex} />
      </div>
    </section>

  );
};

export default NowStatus;
