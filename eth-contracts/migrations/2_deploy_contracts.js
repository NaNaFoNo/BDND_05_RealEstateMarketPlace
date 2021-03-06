// migrating the appropriate contracts
//var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol")
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  //deployer.deploy(ERC721MintableComplete, "CryptoEstateToken", "CET");
  deployer.deploy(Verifier).then(() => {
    return deployer.deploy(SolnSquareVerifier, Verifier.address, "CryptoEstateToken", "CET");
  })
  
};
