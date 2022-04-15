const Web3 = require("web3");

const Abi = require("./abi.json");


let web3;

const provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/287af69fca9142f3b1681a93ce4c3afa"
);
web3 = new Web3(provider);



async function getBalance(contractAddress,userAddress) {

  const contractInstance=new web3.eth.Contract(Abi,contractAddress);
  

  const decimals=await contractInstance.methods.decimals().call();
  const stake= await contractInstance.methods.balanceOf(userAddress).call();
  const symbol=await contractInstance.methods.symbol().call();

  const balance=(stake/(10**decimals)).toFixed(2);

  if(balance!=0)
  console.log('balance:',balance,symbol.slice(3));
}

let address="0x86267a97db68210dc29e407884f026caad1960bd";
const contract1="0x5Aa653A076c1dbB47cec8C1B4d152444CAD91941";
const contract2="0x65f7BA4Ec257AF7c55fd5854E5f6356bBd0fb8EC";
getBalance(contract1,address);
getBalance(contract2,address);


