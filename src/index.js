import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle"
};

function Image(props) {
  //  console.log("Image props", props);
  return <img src={props.src} alt={props.alt} />;
}

//function MovieItem(props) {
//  console.log("MovieItem props", props);
//  const {
//    data: { title, vote_average, image }
//  } = props;
//  return (
//    <div>
//      <Image src={image} alt={title} />
//      <p>{title}</p>
//      <p>{vote_average}</p>
//    </div>
//  );
//}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log("state", this.state);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button type="button">Like</button>
        </div>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
