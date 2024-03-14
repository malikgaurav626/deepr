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
const accountHealth = document.querySelector(".healthStatus");
const outlook = document.querySelector(".outlook");
const outlookSubtitle = document.querySelector(".outlookSubtitle");
// const supplyBal = document.querySelector(".sb-cv");
const roww = document.querySelector(".roww");

ethereumButton.addEventListener("click", () => {
  getAccount();
});
let account = null;

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

async function getAccountDetails() {
  const account = window.ethereum.selectedAddress;
  const methodData = ethers.utils.defaultAbiCoder.encode(
    ["address"],
    [account]
  );

  const supplyBalance = await window.ethereum.request({
    method: "eth_call",
    params: [
      {
        to: contractAddress,
        data:
          contractABI.find((m) => m.name === "getSupplyBalance").signature +
          methodData,
      },
      "latest",
    ],
  });

  const borrowBalance = await window.ethereum.request({
    method: "eth_call",
    params: [
      {
        to: contractAddress,
        data:
          contractABI.find((m) => m.name === "getBorrowBalance").signature +
          methodData,
      },
      "latest",
    ],
  });

  const borrowLimit = await window.ethereum.request({
    method: "eth_call",
    params: [
      {
        to: contractAddress,
        data:
          contractABI.find((m) => m.name === "getBorrowLimit").signature +
          methodData,
      },
      "latest",
    ],
  });

  const netAPY = await window.ethereum.request({
    method: "eth_call",
    params: [
      {
        to: contractAddress,
        data:
          contractABI.find((m) => m.name === "getNetAPY").signature +
          methodData,
      },
      "latest",
    ],
  });

  return { supplyBalance, borrowBalance, borrowLimit, netAPY };
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

  account = accounts[0];
  const balance = await fetchBalance(account);
  // const accountDetails = await getAccountDetails(account);

  accountHealth.innerHTML = `<svg style="width: 226px; height: 226px; transform: rotate(-90deg);"><circle opacity="0.4" cx="113" cy="113" fill="transparent" r="91" stroke="black" stroke-width="22"></circle><circle cx="113" cy="113" fill="transparent" r="80.08" stroke="#AAA" stroke-width="1" opacity="0.12"></circle><circle cx="113" cy="113" fill="transparent" r="80.08" stroke="url('#progressGradient')" stroke-width="1" stroke-dasharray="541.6767122715875" stroke-dashoffset="0" stroke-linecap="round" filter="url(#reflection)" class="" style="animation: 1s linear 0s 1 normal none running spinner; transform-origin: center center;"></circle><circle cx="113" cy="113" fill="transparent" r="101.92000000000002" stroke="#AAA" stroke-width="1" opacity="0.12"></circle><circle cx="113" cy="113" fill="transparent" r="101.92000000000002" stroke="url('#progressGradient')" stroke-width="1" stroke-dasharray="640.3822465077435" stroke-dashoffset="0" stroke-linecap="round" filter="url(#reflection)" class="" style="animation: 1s linear 0s 1 normal none running spinner; transform-origin: center center;"></circle><circle cx="113" cy="113" fill="transparent" r="91" stroke="url('#progressGradient')" stroke-width="8" stroke-dasharray="571.7698629533423" stroke-dashoffset="0" stroke-linecap="round" class="" style="animation: 1s linear 0s 1 normal none running spinner; transform-origin: center center;"></circle><circle cx="113" cy="113" fill="transparent" r="91" stroke="url('#progressGradient')" stroke-width="8" stroke-dasharray="571.7698629533423" stroke-dashoffset="0" stroke-linecap="round" filter="url(#blur)" class="" opacity="0.4" style="animation: 1s linear 0s 1 normal none running spinner; transform-origin: center center;"></circle><defs><linearGradient id="progressGradient" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#56E39F"></stop><stop offset="65%" stop-color="#56E3B6"></stop></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="3"></feGaussianBlur></filter><filter id="reflection"><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite operator="in" in="SourceGraphic"></feComposite></filter></defs></svg>
  <div class="css-vm63cb showAfterConnect">
              <p class="chakra-text css-gsl2hm">Safety</p><p class="chakra-text css-1bz3mis">
                100</p></div>`;
  accountHealth.classList.add("showw");
  overlay.classList.remove("showw");
  outlook.innerHTML = `
  <div>
  <span>Outlook:</span>
  <span class='color-green'> GREAT</span>
  </div>`;
  outlookSubtitle.innerText =
    "Time to start your grand journey by enabling collateral and supplying funds.";

  // supplyBal.innerHTML = `$<span class="cv-bf">${
  //   String(accountDetails.supplyBalance).split(".")[0]
  // }</span><span class="cv-af">.${
  //   String(accountDetails.supplyBalance).split(".")[1]
  // }</span>`;

  roww.innerHTML = `<div class="coll">
  <div class="ct">
    Supply Balance
  </div>
  <div class="cv sb-cv">$<span class="cv-bf">0</span><span class="cv-af">.000000</span></div>
</div>
<div class="coll">
  <div class="ct">
    Borrow Balance
  </div>
  <div class="cv bb-cv">$<span class="cv-bf">0</span><span class="cv-af">.000000</span></div>
</div>
<div class="coll">
  <div class="ct">
    Borrow Limit
  </div>
  <div class="cv bl-cv">$0.00</div>
</div>
<div class="coll">
  <div class="ct">
    Net APY
  </div>
  <div class="cv na-cv">0.00%</div>
</div>
`;
  document.querySelector(".cw-btn-span").style.display = "none";
  document.querySelector(".account-details").style.display = "flex";
  document.querySelector(".balance-value").innerHTML = `${balance}`;
  document.querySelector(".ac-balance").innerHTML = `${balance} SMR`;
  document.querySelector(".account-value").innerHTML = `${
    account.slice(0, 6) + "..." + account.slice(-4)
  }`;
  document.querySelector(".ac-number").innerHTML = `${
    account.slice(0, 6) + "..." + account.slice(-4)
  }`;
}
async function disconnectAccount() {
  accountoverlay.classList.remove("showw");
  account = null;

  accountHealth.innerHTML = `<svg style="width: 226px; height: 226px; transform: rotate(-90deg)">
  <circle opacity="0.4" cx="113" cy="113" fill="transparent" r="91" stroke="black" stroke-width="22">
  </circle>
  <circle cx="113" cy="113" fill="transparent" r="80.08" stroke="#AAA" stroke-width="1" opacity="0.12">
  </circle>
  <circle cx="113" cy="113" fill="transparent" r="80.08" stroke="url('#progressGradient')" stroke-width="1"
    stroke-dasharray="569.9642739124371" stroke-dashoffset="537.4636711761418" stroke-linecap="round"
    filter="url(#reflection)" class="animated" style="
        animation: 4s linear 0s infinite normal none running spinner;
        transform-origin: center center;
      "></circle>
  <circle cx="113" cy="113" fill="transparent" r="101.92000000000002" stroke="#AAA" stroke-width="1"
    opacity="0.12"></circle>
  <circle cx="113" cy="113" fill="transparent" r="101.92000000000002" stroke="url('#progressGradient')"
    stroke-width="1" stroke-dasharray="575.8866059666065" stroke-dashoffset="535.8561028675392"
    stroke-linecap="round" filter="url(#reflection)" class="animated" style="
        animation: 4s linear 0s infinite normal none running spinner;
        transform-origin: center center;
      "></circle>
  <circle cx="113" cy="113" fill="transparent" r="91" stroke="url('#progressGradient')" stroke-width="8"
    stroke-dasharray="571.7698629533423" stroke-dashoffset="537.4636711761418" stroke-linecap="round"
    class="animated" style="
        animation: 4s linear 0s infinite normal none running spinner;
        transform-origin: center center;
      "></circle>
  <circle cx="113" cy="113" fill="transparent" r="91" stroke="url('#progressGradient')" stroke-width="8"
    stroke-dasharray="571.7698629533423" stroke-dashoffset="537.4636711761418" stroke-linecap="round"
    filter="url(#blur)" class="animated" opacity="0.4" style="
        animation: 4s linear 0s infinite normal none running spinner;
        transform-origin: center center;
      "></circle>
  <defs>
    <linearGradient id="progressGradient" gradientTransform="rotate(90)">
      <stop offset="0%" stop-color="#55df9c"></stop>
      <stop offset="100%" stop-color="#55df9c"></stop>
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="3"></feGaussianBlur>
    </filter>
    <filter id="reflection">
      <feGaussianBlur stdDeviation="4"></feGaussianBlur>
      <feComposite operator="in" in="SourceGraphic"></feComposite>
    </filter>
  </defs>
</svg>`;
  accountHealth.classList.remove("showw");
  overlay.classList.add("showw");
  outlook.innerHTML = `
  Begin Now`;
  outlookSubtitle.innerText =
    "Initiate your journey by linking your wallet and activating collateral. As you deposit funds, Lighthouse will guide your investment path.";

  roww.innerHTML = ``;
  document.querySelector(".cw-btn-span").style.display = "static";
  document.querySelector(".account-details").style.display = "none";
  document.querySelector(".balance-value").innerHTML = ``;
  document.querySelector(".ac-balance").innerHTML = ``;
  document.querySelector(".account-value").innerHTML = ``;
  document.querySelector(".ac-number").innerHTML = ``;
}

const overlay = document.getElementById("overlay");
const button = document.querySelector(".showOverlay");

button.addEventListener("click", () => {
  overlay.classList.add("showw");
});

const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("showw");
});

const accountoverlay = document.getElementById("account-overlay");
const accountbutton = document.querySelector(".account-container");

accountbutton.addEventListener("click", () => {
  accountoverlay.classList.add("showw");
});

const accountcloseBtn = document.querySelector(".account-closeBtn");

accountcloseBtn.addEventListener("click", () => {
  accountoverlay.classList.remove("showw");
});

const copyaccountbtn = document.querySelector(".copy-ac-number");

copyaccountbtn.addEventListener("click", () => {
  const account = window.ethereum.selectedAddress;
  navigator.clipboard.writeText(account);
  copyaccountbtn.innerHTML = `
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(1); opacity: 1;">
  <path d="M1 3L3 5L7 1" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
  
                        </svg>
  
  `;
  setTimeout(() => {
    copyaccountbtn.innerHTML = `
    
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(1); opacity: 1;">
                        <path d="M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5" stroke="#fff" stroke-width="2"></path>
                        <rect x="10" y="10" width="9" height="9" rx="2" stroke="#fff" stroke-width="2"></rect>
                        </svg>
                        `;
  }, 2000);
});

const disconnectBtn = document.querySelector(".disconnect-btn");

disconnectBtn.addEventListener("click", () => {
  disconnectAccount();
});
