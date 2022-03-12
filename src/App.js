import "./App.css";
import MintSection from "./components/mintSection/mintSection";
import NavigationDesktop from "./components/navigation/navigation";
import NavigationMobile from "./components/navigation_mobile/navigation_mobile";
import { pageContent } from "./utils/pageContent";

function App() {
  return (
    <div className="App">
      {pageContent.map((dataObject, key) => {
        return (
          <div key={key} className="OuterPageContainer">
            <div className="InnerPageContainer">
              <NavigationDesktop dataObject={dataObject} />
              <div className="InnerPageContainer__text">
                <h1 className="MintTitle">{dataObject.pageTitle}</h1>
                <p className="MintParagraph">{dataObject.pageParagraph}</p>
              </div>
              <MintSection dataObject={dataObject} />
              <NavigationMobile dataObject={dataObject} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
