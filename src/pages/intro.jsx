import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/ress.css";
import "../css/intro.css";


const Intro = () => {
  const [data, setData] = useState(null);
  const [nowIndex, setNowIndex] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=44.0268&longitude=145.1645&timezone=Asia/Tokyo&hourly=temperature_2m,wind_speed_10m,precipitation,weathercode&forecast_days=2"
        );
        const json = await res.json();

        setData(json);

        const now = new Date();
        const index = json.hourly.time.findIndex(t =>
          new Date(t).getHours() === now.getHours()
        );

        setNowIndex(index >= 0 ? index : 0);
      } catch (e) {
        console.error(e);
      }
    };

    fetchWeather();
  }, []);

  if (!data || nowIndex === null) {
    return <p>天候データ取得中...</p>;
  }

  // 現在の気象値
  const temp = data.hourly.temperature_2m[nowIndex];
  const wind = data.hourly.wind_speed_10m[nowIndex];
  const rain = data.hourly.precipitation[nowIndex];
  const code = data.hourly.weathercode[nowIndex];

  // 点数計算
  const scoreTemp = temp >= 15 ? 20 : temp >= 10 ? 10 : temp >= 5 ? 5 : 0;
  const scoreWind = wind <= 5 ? 25 : wind <= 10 ? 10 : 0;
  const scoreRain = rain === 0 ? 20 : rain <= 1 ? 5 : 0;
  const scoreWeather = code <= 1 ? 25 : code <= 3 ? 5 : 0;

  const total = scoreTemp + scoreWind + scoreRain + scoreWeather;
  // const total= 70;
  const result =
  total < 40 ? "入れなさそう" :
  total < 70 ? "微妙" :
  "入れそう";
  const bgImage =
    total < 40
      ? "/img/batu.png"
      : total < 70
      ? "/img/sannkaku.png"
      : "/img/maru.png";

  return (
    <main>
      <Header />

      <section>
        <div className="intro-section">
          <div className="introduction">
            <h1>瀬石温泉とは</h1>
              <p>
              瀬石温泉は、明治32年（1899年）に発見された北海道羅臼町瀬石の波打ち際に湧き出る、秘湯の天然露天風呂です。<br />
              干潮時にのみ姿を現し、満潮時には海中に埋没してしまうという、ダイナミックな自然のサイクルと一体となったユニークな温泉です。
              </p>
              <p>潮の満ち引きによって入浴できないことがあり、満潮時には温泉が海中に沈み、<br/>干潮時には海水で薄まらない約64℃の源泉がそのまま湧き出るため、熱すぎる場合もあります。</p>
              <p>源泉は岩礁の裂け目から湧き出し、ナトリウム塩化物泉のお湯は神経痛や腰痛、慢性皮膚病、坐骨神経痛などにも効能があるとされています</p>
              <p>地名はアイヌ語のセセク（sesek=熱い、熱くなる）に由来している</p>
              <p>テレビドラマ「北の国から 2002 遺言」 の露天風呂シーンのロケ地にも使われました</p>
              <div className="img-wrap">
                <img src="/img/seseki1.jpg" alt="瀬石温泉" />
                <img src="/img/seseki_mantyou.jpg" alt="瀬石温泉満潮時" />
              </div>
            <h1>温泉について</h1>
            <h3>入浴期間</h3>
            <p>７月初旬～９月中旬又は下旬<br />おすすめは、お盆過ぎから秋口にかけて</p>
            <h3>おすすめの時間</h3>
            <p>帯お昼前後</p>
            <h3>入浴時間</h3>
            <p>基本的に入浴時間は決まっていない</p>
            <ul>
              <li>瀬石温泉は干潮時に温泉としての姿を現し、満潮時には海水に埋没してしまう秘湯であるという事。（※その日の天候、海の状態にもよります）</li>
              <li>ここを管理している、漁師さんが干潮時になり、海水の中から現れた温泉を毎日清掃している。手順として、温泉の中に入ってしまった海藻などを除去し、海水を汲み出し、温泉をこすり洗いしています。その後、1～2時間をかけ温泉が岩のすき間より沸いて来るのを待つ為</li>
              <li>漁師さんの仕事の合間などをみて清掃しています。この温泉は個人管理の下にある温泉である</li>
            </ul>
            <p>理由から入浴時間については、<span className="line">現地に来てから、又はお電話でご確認ください</span><br />
            管理：濱澤水産<br />電話（夏季：瀬石番屋）0153-89-2654 電話（夏季以外）0153-88-2384</p>
            <h3>住所</h3>
            <p>〒086-1811 北海道目梨郡羅臼町瀬石</p>
            <h3>入浴時のマナーについて</h3>
            <p>入り口にはゲートが設置されています。ゲートが閉まっている時は入浴しないでください</p>
            <h3>脱衣所はありますか？</h3>
            <p>脱衣所は設置しておりません。どうしてもという方は駐車場にトイレがございますので、そちらで着替えをお願いします。</p>
            <h3>シャワーはありますか？</h3>
            <p>シャワーはありません</p>
            <h3>入浴料はいくらですか？</h3>
            <p>無料ですが、温泉の維持・管理等に経費がかかる為、『気持ちの箱』という募金箱設置してあるので、<br />入浴後に温泉に対する気持ちをお願いします</p>
            <h3>売店はありますか？</h3>
            <p>売店はあるが、濱澤水産の直売所なので入浴に関するものは売っていません。<br />タオルなどの持参をお願いします</p>
            <h3>水着の着用はいいですか？</h3>
            <p>温泉ですので水着を着用しないで入るというのが当然のマナーですが、<br />露天風呂で夏休み時期になると沢山の方が来るので抵抗のある方は水着を着用して入浴してもかまいません。</p>
            <h3>入浴人数は何人ですか？</h3>
            <p>海に向かって左側と右側に温泉があり、左側は暑すぎるため入浴できません。<br />右側はだいたい大人8人ぐらいは一度に入浴できる広さです</p>
            <h3>混浴ですか</h3>
            <p>混浴です</p>
            <h3>泉質</h3>
              <p>ナトリウム塩化物泉</p>
              <p>泉質：含硫黄ーナトリウムー塩化物泉<br />泉温：６４℃～７１℃、
                PH:６．６、成分総計：６,０００mg／kg</p>
          </div>
          <div
            className="score"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 10%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <p>{result} <br /><Link to="/">詳細を見る</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Intro;
