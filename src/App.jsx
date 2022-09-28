import "./styles.css";
import "./components/textLength";
import Data from "./data.json"; // 追加
import Image from "./components/Image";

const items = [{ id: 1 }, { id: 2 }];

export default function App() {
  //   const Media = () => {
  //     return (
  //       <>
  //         <div className="media-container">
  //           <div className="media-inner image">
  //             <Image imagePath={"https://picsum.photos/1200/800/?image=11"} />
  //           </div>
  //           <div className="media-inner text">
  //             <h3>国土交通省について</h3>
  //             <p className="paragraph">
  //               国土交通省は、国土の総合的かつ体系的な利用、開発および保全、そのための社会資本の整合的な整備、交通政策の推進、気象業務の発展並びに海上の安全および治安の確保などを担う官庁です。
  //             </p>
  //             <p className="post">投稿日 2021-09-04</p>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   };

  const MapMedia = ({ name, imagePath }) => {
    // const title = "xxx";
    return (
      <>
        <div className="media-container">
          <div className="media-inner image">
            {/* <Image imagePath={"https://picsum.photos/1200/800/?image=11"} /> */}
            <Image imagePath={imagePath} />
          </div>
          <div className="media-inner text">
            <h3>{name}</h3>
            <p className="paragraph">
              国土交通省は、国土の総合的かつ体系的な利用、開発および保全、そのための社会資本の整合的な整備、交通政策の推進、気象業務の発展並びに海上の安全および治安の確保などを担う官庁です。
            </p>
            <p className="post">投稿日 2021-09-04</p>
          </div>
        </div>
      </>
    );
  };

  // Main
  const Datas = Data.data;
  return (
    <>
      <div className="App">
        <div>
          <ul>
            {Datas.map((user) => (
              <li key={user.id}>
                {user.first_name}: {user.email}
              </li>
            ))}
          </ul>
        </div>

        {/* Media Map */}
        <div>
          {Datas.map((user) => (
            <div key={user.id} style={{ marginBottom: 32 }}>
              <MapMedia name={user.first_name} imagePath={user.avatar} />
            </div>
          ))}
        </div>

        {/* <Media /> */}
      </div>
    </>
  );
}
