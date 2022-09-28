import Image from "./components/Image";
import "./styles.css";
import "./components/textLength";

export default function App() {
  // Text Count & Trim
  // let TexCount = document.querySelector(".paragraph");
  // let res = TexCount.innerHTML.length;
  // let CountView = document.querySelector(".count");
  // CountView.innerHTML = res;

  // const MAX_LENGTH = 30; //文字数上限
  // if (res > MAX_LENGTH) {
  //   TexCount.innerHTML = TexCount.innerHTML.substr(0, MAX_LENGTH) + "...";
  // }

  return (
    <div className="App">
      <div className="media-container">
        <div className="media-inner image">
          <Image imagePath={"https://picsum.photos/1200/800/?image=11"} />
        </div>
        <div className="media-inner text">
          <h3>国土交通省について</h3>
          {/* <p className="count">Count</p> */}
          <p className="paragraph">
            国土交通省は、国土の総合的かつ体系的な利用、開発および保全、そのための社会資本の整合的な整備、交通政策の推進、気象業務の発展並びに海上の安全および治安の確保などを担う官庁です。
          </p>
          <p className="post">投稿日 2021-09-04</p>
        </div>
      </div>
    </div>
  );
}
