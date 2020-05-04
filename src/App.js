import React from "react";
import PropType from "prop-types";

const list = [
  {
    id: 1,
    place: "바다",
    img:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_C6386337D543E5BD60DB8168D08F5CFA.jpg",
  },
  {
    id: 2,
    place: "산",
    img:
      "https://lh3.googleusercontent.com/proxy/3FwPnhdCI9tf0pA4MpME-JMLXNrBNulJgqg9d3Esn_5RGaVLzT93NEpVQciFt-s3rArDXkzQSDeUWO-tjI-zpEFfswbAPzo3aejC0sc78MOZX-tQaagQDjwJWJRNmuAa0F2KtuICL9VLn6SEOgeBXQ",
  },
  {
    id: 3,
    place: "도시",
    img:
      "https://img.hani.co.kr/imgdb/resize/2018/0518/152653444301_20180518.JPG",
  },
];

function Place({ id, place, img }) {
  return (
    <div>
      <h2>
        {id} . {place}
      </h2>
      <img src={img} alt={place} />
      <br />
      <br />
    </div>
  );
}

Place.PropType = {
  place: PropType.string.isRequired,
  img: PropType.string.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>장소와 사진</h1>
      {list.map((item) => (
        <Place key={item.id} id={item.id} place={item.place} img={item.img} />
      ))}
      ;
    </div>
  );
}

export default App;
