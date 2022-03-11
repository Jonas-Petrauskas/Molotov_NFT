import { useState } from "react";
import "./mintSection.css";
import $ from "jquery";
import Web3 from "web3";
import ContractAbi from "../../contract/contract-abi.json";
import {
  setSwatch_1,
  setSwatch_2,
  setSwatch_3,
  setSwatch_4,
  setSwatch_5,
} from "../../utils/jqueryFunctions";

const contractAddress = "0xe38559f4CFc38FAeA641246572Ef154b1cEc6eaE";

const swatch_1 = require("../../assets/01.jpg");
const swatch_2 = require("../../assets/02.jpg");
const swatch_3 = require("../../assets/03.jpg");
const swatch_4 = require("../../assets/04.jpg");
const swatch_5 = require("../../assets/05.jpg");

function MintSection({ dataObject }) {
  const [minted, setMinted] = useState(false);

  console.log(dataObject);

  const mintToken = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ContractAbi, contractAddress);

    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const result = await contract.methods.donate(2).send({
          value: web3.utils.toWei("0.1"),
          from: addressArray[0],
        });
        return result;
      } catch (err) {
        return console.err(err);
      }
    }
  };

  return (
    <div className="MintContainer">
      <div>
        <img className="MainImage Swatch1" scr={swatch_1} alt="noImage" />
        <img className="MainImage Swatch2" src={swatch_2} alt="noImage" />
        <img className="MainImage Swatch3" src={swatch_3} alt="noImage" />
        <img className="MainImage Swatch4" src={swatch_4} alt="noImage" />
        <img className="MainImage Swatch5" src={swatch_5} alt="noImage" />
      </div>
      <div>
        <p className="ChooseTierText">{dataObject.chooseTier}</p>
        <div className="SwatchContainer">
          <button
            onClick={setSwatch_1}
            className="TierSwatch active TierSelector1"
          >
            <img src={swatch_1} alt="noImage" />
          </button>
          <button onClick={setSwatch_2} className="TierSwatch TierSelector2">
            <img src={swatch_2} alt="noImage" />
          </button>
          <button onClick={setSwatch_3} className="TierSwatch TierSelector3">
            <img src={swatch_3} alt="noImage" />
          </button>
          <button onClick={setSwatch_4} className="TierSwatch TierSelector4">
            <img src={swatch_4} alt="noImage" />
          </button>
          <button onClick={setSwatch_5} className="TierSwatch TierSelector5">
            <img src={swatch_5} alt="noImage" />
          </button>
        </div>
        {!minted ? (
          <button onClick={() => mintToken()} className="MintButton">
            {dataObject.mintText}{" "}
            <span className="DonatePrice">{dataObject.priceDefault}</span>
            {dataObject.eth}
          </button>
        ) : (
          <p>{dataObject.afterMintText}</p>
        )}
      </div>
    </div>
  );
}

export default MintSection;
