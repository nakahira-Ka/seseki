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
    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7102.615854776563!2d145.30537444530063!3d44.17455686071209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f6cbcbc5cad38b5%3A0xac94ed635ca5c5d8!2z54Cs55-z5rip5rOJ!5e0!3m2!1sja!2sjp!4v1770270720152!5m2!1sja!2sjp"
  title="瀬石温泉のGoogleMap"
  width="600"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

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
