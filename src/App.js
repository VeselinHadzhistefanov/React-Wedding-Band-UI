import logo from './logo.svg';
import './App.css';
import { WeddingBandFeatureSelector } from './WeddingBandFeatures';
import { IconButton } from './components/image-display-group/icon-button';

function WeddingBandFeatures() {

  // Radio button text content
  let options = [
    {
      name: "THE HEAD",
      description: "How do you want your center stone to be set?",
      options: ["Four-prong", "Six-prong", "double prong", "V-prong/chevron", "diamond tipped", "bezel set", "half-bezel", "bar-set"]
    },
    {
      name: "THE SHANK",
      description: "How do you want the band around your stone finger to look?",
      options: ["traditional", "euro-style", "cathedral", "straight", "tapered", "reverse tapered", "split", "bypass", "criss-cross"]
    },
    {
      name: "EMBELLISHMENTS",
      description: "What other design features do you want included?",
      options: ["milgrain", "engraving", "filigree", "pierced/openwork", "rope", "surprise diamond"]
    },
    {
      name: "THE ACCENT STONES",
      description: "If you want accent stones, how do you want them set?",
      options: ["channel", "bead & bright-cut/pinpoint", "surface prong", "shared prong", "bezel", "bar", "gypsy/flush"]
    },
    {
      name: "SHAPE",
      description: "What shape do you want your center stone to be?",
      options: ["round", "princess", "cushion", "oval", "emrald", "pear", "marquise", "radiant", "heart", "asscher", "trillion"]
    }
  ]

  let weddingBandSelectors = options.map(feature =>
    <div key={feature.name}>
      <WeddingBandFeatureSelector title={feature.name.toTitleCase()} description={feature.description} options={feature.options}></WeddingBandFeatureSelector>
      <br></br>
    </div>
  );

  return (
    <div className="WeddingBandFeatures">
      {weddingBandSelectors}
    </div>
  );
}

String.prototype.toTitleCase = function() {
  let contents = this.toLowerCase()
  return contents[0].toUpperCase + contents.substring(1)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span style={{ color: "lightblue" }}>Edit <code>src/App.js</code> and save to reload.</span>
          <br></br>
          This section is intended to represent the actual structure of the web page <br></br>
          and stands for it's contents.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <MyYesButton></MyYesButton>
        <IconButton></IconButton>
        <br></br>
        <WeddingBandFeatures></WeddingBandFeatures>
      </header>
    </div>
  );
}

function MyYesButton() {
  return (
    <button>I'm a accepting this wedding band as a symbol of eternal love and devotion from my partner and I vow to be infinitelly loyal and in love with my partner no matter what. I am my partner's love and my partner is my lover and protector for eternity.</button>
  );
}

export { App, MyYesButton };