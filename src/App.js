import "./App.css";
import { useEffect, useState } from "react";
import MintSection from "./components/mintSection/mintSection";
import NavigationDesktop from "./components/navigation/navigation";
import NavigationMobile from "./components/navigation_mobile/navigation_mobile";
import { pageContent } from "./utils/pageContent";
import { getCurrentWalletConnected, connectWallet } from "./utils/interact";

function App() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function getCurrentWallet() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
    }
    getCurrentWallet();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

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
              {walletAddress.length > 0 ? (
                <MintSection dataObject={dataObject} />
              ) : (
                <div className="button-container">
                  <button
                    className="connect-button"
                    onClick={connectWalletPressed}
                  >
                    {dataObject.connectButton}
                  </button>
                </div>
              )}
              <NavigationMobile dataObject={dataObject} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
