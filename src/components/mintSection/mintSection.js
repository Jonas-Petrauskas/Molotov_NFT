import { useState } from "react";
import "./mintSection.css";
import $ from "jquery";
import Web3 from "web3";
import ContractAbi from "../../contract/contract-abi.json";

const contractAddress = "0xe38559f4CFc38FAeA641246572Ef154b1cEc6eaE";

const swatch_1 = require("../../assets/01.jpg");
const swatch_2 = require("../../assets/02.jpg");
const swatch_3 = require("../../assets/03.jpg");
const swatch_4 = require("../../assets/04.jpg");
const swatch_5 = require("../../assets/05.jpg");

function MintSection() {
  const [minted, setMinted] = useState(false);

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

  let tier_value = 0.05;
  let current_tier = 1;
  function setSwatch_1() {
    tier_value = 0.05;
    current_tier = 1;
    console.log(tier_value);
    $(".TierSelector2").removeClass("active");
    $(".TierSelector3").removeClass("active");
    $(".TierSelector4").removeClass("active");
    $(".TierSelector5").removeClass("active");
    $(".TierSelector1").addClass("active");
    $(".DonatePrice").text(tier_value);
    $(".Swatch1").show();
    $(".Swatch2").hide();
    $(".Swatch3").hide();
    $(".Swatch4").hide();
    $(".Swatch5").hide();
  }
  function setSwatch_2() {
    tier_value = 0.1;
    current_tier = 1;
    console.log(tier_value);
    // Front
    $(".TierSelector1").removeClass("active");
    $(".TierSelector3").removeClass("active");
    $(".TierSelector4").removeClass("active");
    $(".TierSelector5").removeClass("active");
    $(".TierSelector2").addClass("active");
    $(".DonatePrice").text(tier_value);
    $(".Swatch1").hide();
    $(".Swatch3").hide();
    $(".Swatch4").hide();
    $(".Swatch5").hide();
    $(".Swatch2").show();
  }
  function setSwatch_3() {
    tier_value = 0.5;
    current_tier = 1;
    console.log(tier_value);
    $(".TierSelector1").removeClass("active");
    $(".TierSelector2").removeClass("active");
    $(".TierSelector4").removeClass("active");
    $(".TierSelector5").removeClass("active");
    $(".TierSelector3").addClass("active");
    $(".DonatePrice").text(tier_value);
    $(".Swatch1").hide();
    $(".Swatch2").hide();
    $(".Swatch4").hide();
    $(".Swatch5").hide();
    $(".Swatch3").show();
  }
  function setSwatch_4() {
    tier_value = 1;
    current_tier = 1;
    console.log(tier_value);
    $(".TierSelector1").removeClass("active");
    $(".TierSelector2").removeClass("active");
    $(".TierSelector3").removeClass("active");
    $(".TierSelector5").removeClass("active");
    $(".TierSelector4").addClass("active");
    $(".DonatePrice").text(tier_value);
    $(".Swatch1").hide();
    $(".Swatch2").hide();
    $(".Swatch3").hide();
    $(".Swatch5").hide();
    $(".Swatch4").show();
  }
  function setSwatch_5() {
    tier_value = 5;
    current_tier = 1;
    console.log(tier_value);
    $(".TierSelector1").removeClass("active");
    $(".TierSelector3").removeClass("active");
    $(".TierSelector4").removeClass("active");
    $(".TierSelector2").removeClass("active");
    $(".TierSelector5").addClass("active");
    $(".DonatePrice").text(tier_value);
    $(".Swatch1").hide();
    $(".Swatch2").hide();
    $(".Swatch3").hide();
    $(".Swatch4").hide();
    $(".Swatch5").show();
  }

  return (
    <div className="MintContainer">
      <div>
        <img className="MainImage Swatch1" src={swatch_1} />
        <img className="MainImage Swatch2" src={swatch_2} />
        <img className="MainImage Swatch3" src={swatch_3} />
        <img className="MainImage Swatch4" src={swatch_4} />
        <img className="MainImage Swatch5" src={swatch_5} />
      </div>
      <div>
        <p className="ChooseTierText">Choose the NFT Tier</p>
        <div className="SwatchContainer">
          <button
            onClick={setSwatch_1}
            className="TierSwatch active TierSelector1"
          >
            <img src={swatch_1} />
          </button>
          <button onClick={setSwatch_2} className="TierSwatch TierSelector2">
            <img src={swatch_2} />
          </button>
          <button onClick={setSwatch_3} className="TierSwatch TierSelector3">
            <img src={swatch_3} />
          </button>
          <button onClick={setSwatch_4} className="TierSwatch TierSelector4">
            <img src={swatch_4} />
          </button>
          <button onClick={setSwatch_5} className="TierSwatch TierSelector5">
            <img src={swatch_5} />
          </button>
        </div>
        {!minted ? (
          <button onClick={() => mintToken()} className="MintButton">
            Mint for <span className="DonatePrice">0.05</span>ETH
          </button>
        ) : (
          <p>Token minted succesfully</p>
        )}
      </div>
    </div>
  );
}

export default MintSection;
