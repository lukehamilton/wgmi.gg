// import { useWeb3React } from "@web3-react/core";

const SignMessage = () => {
  // const { library, account } = useWeb3React();

  const handleSign = () => {
    // library
    //   .getSigner(account)
    //   .signMessage("👋")
    //   .then((signature: any) => {
    //     console.log("signature", signature);
    //     window.alert(`Success!\n\n${signature}`);
    //   })
    //   .catch((error: any) => {
    //     window.alert(
    //       "Failure!" + (error && error.message ? `\n\n${error.message}` : "")
    //     );
    //   });
  };

  return (
    <button
      onClick={handleSign}
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign Message
    </button>
  );
};

export default SignMessage;
