import React  from 'react';
import Home   from "./screens/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import "./screens/template-elements/assets/css/main.css"
import MetaTags from "react-meta-tags";

function App() {
  return (
    <>
    <MetaTags>
    <title>
      Chaba Josa Portfolio
    </title>
    <meta
      property="og:url"
      content="https://chabaportfolio.herokuapp.com"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Chaba Josa - Software Developer"
    />
    <meta
      property="og:description"
      content=""
    />
    <meta property="og:image" content="../src/screens/template-elements/images/ProfilePic.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:site"
      content="https://chabaportfolio.herokuapp.com"
    />
    <meta name="twitter:creator" content="Chaba Josa" />
    <meta
      name="twitter:title"
      content="Chaba Josa"
    />
    <meta
      name="twitter:description"
      content="Chaba Josa - Software Developer"
    />
    <meta name="twitter:image" content="../src/screens/template-elements/images/ProfilePic.png" />
  </MetaTags>
    <div className="App">
      <Home />
    </div>
    </>
  );
}

export default App;
