import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/ress.css";
import "../css/access.css";

const Access = () => {
return (
  <main>
    <Header />

    <h1>アクセス</h1>
    <div className="access-wrap">


      <div className="access">
        <h3>住所</h3>
        <p>
        〒086-1811 <br />
        北海道目梨郡羅臼町瀬石
        </p>
        <p>駐車場は10台程度入ります</p>
        <h3>交通機関</h3>
        <p>
          羅臼町へのアクセスは、最寄りの駅または空港からバスか車をご利用ください。<br />
          釧路駅～羅臼町約3時間<br />
          中標津空港～羅臼町約1時間15分<br />
          女満別空港～羅臼町約2時間40分<br />
          釧路空港～羅臼町約3時間10分<br />
          瀬石温泉までは、羅臼町市街地から道道87号線を相泊方面へ約20分（23km）程です。<br />
          ※バスは市街地までです。そこからはタクシーかレンタカーなどで行ってください
        </p>
      </div>
    </div>
    
    <Footer />
    </main>
  );
};

export default Access;