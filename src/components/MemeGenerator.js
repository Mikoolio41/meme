import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      name: "",
    };
  }

  allMemeImgs = async (e) => {
    const randomNumber = Math.floor(Math.random() * 100);
    e.preventDefault();
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    this.setState({
      randomImage: data.data.memes[randomNumber].url,
      name: data.data.memes[randomNumber].name,
    });
  };

  textInputTop = (e) => {
    e.preventDefault();
    this.setState({ topText: e.target.value });
  };

  textInputBottom = (e) => {
    e.preventDefault();
    this.setState({ bottomText: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="meme-form">
          <input onChange={this.textInputTop} placeholder="Top Text" />
          <input onChange={this.textInputBottom} placeholder="Bottom Text" />
          <button onClick={this.allMemeImgs}>Gen</button>
        </form>
        <div className="meme">
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
          <img src={this.state.randomImage} alt={this.state.name} />
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
