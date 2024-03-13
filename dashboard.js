// Detect the MetaMask Ethereum provider

const provider = await detectEthereumProvider();

if (provider) {
  startApp(provider);
} else {
  console.log("Please install MetaMask!");
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
}

// Prompt users to connect to MetaMask

const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function fetchBalance(account) {
  const balance = await window.ethereum
    .request({
      method: "eth_getBalance",
      params: [account, "latest"],
    })
    .catch((err) => {
      console.error(err);
    });

  // Convert the balance from Wei to Ether
  const balanceInEther = ethers.utils.formatEther(balance);

  return balanceInEther;
}

async function getAccount() {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });

  const account = accounts[0];
  const balance = await fetchBalance(account);

  showAccount.innerHTML = `Account: ${account}<br>Balance: ${balance} Ether`;
  showAccount.style.opacity = 1;
}
