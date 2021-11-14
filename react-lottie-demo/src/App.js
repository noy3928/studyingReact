import React, {useEffect, useRef} from "react";
import lottie from "lottie-web"


function App() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay:true,
      animationData:require("./book.json")
    })
  },[])
  return (
    <div className="App">
      <h1>하이</h1>
      <div className="container" ref={container}></div>
    </div>
  );
}

export default App;
