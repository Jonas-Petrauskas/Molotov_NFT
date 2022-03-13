import { Link } from "react-router-dom";
import { connectWallet } from "../../utils/interact";
import "./connectWallet.css";

function ConnectWallet({ dataObject }) {
  return (
    <div className="button-container">
      <Link to="/mint">
        <button className="connect-button" onClick={connectWallet}>
          {dataObject.connectButton}
        </button>
      </Link>
    </div>
  );
}

export default ConnectWallet;
