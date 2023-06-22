export default async function ConnectMetamask() {
  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => {
        return res[0];
      });
  } else {
    return '';
  }
}