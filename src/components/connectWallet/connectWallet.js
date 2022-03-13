import { Link } from "react-router-dom";

function ConnectWallet() {
  return (
    <div>
      <Link to="/mint">
        <button>Connect</button>
      </Link>
    </div>
  );
}

export default ConnectWallet;
