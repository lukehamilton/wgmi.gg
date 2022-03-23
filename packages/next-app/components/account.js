import { useWeb3 } from "../lib/web3";

const Account = () => {
  const { web3Modal, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3();
  console.log("web3Modal", web3Modal);

  const modalButtons = [];

  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <button
          key="logoutbutton"
          style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          shape="round"
          size="large"
          onClick={logoutOfWeb3Modal}
        >
          logout
        </button>
      );
    } else {
      modalButtons.push(
        <button
          key="loginbutton"
          style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          shape="round"
          size="large"
          onClick={loadWeb3Modal}
        >
          connect
        </button>
      );
    }

    // const display =
  }

  return <div>{modalButtons}</div>;
};

export default Account;
