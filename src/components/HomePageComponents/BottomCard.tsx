function BottomCard() {
  return (
    <div className="cardBG shadow-md shadow-gray-600 rounded-md w-full bg-neutral-100 bg-opacity-60 ">
      <h3 className="bg-yellow-600 text-white p-2 rounded-t text-2xl">PayCircle</h3>
      <div className="top flex justify-between p-2">
        <p>
          Adv Banking -1000
          <br />
          $1000.01
        </p>
        <button className="bottomButtons bg-yellow-600 m-1 pl-10 pr-10 rounded shadow-md shadow-gray-600 hover:border">
          VIEW
        </button>
      </div>
      <hr className="line" />

      <div className="bottom flex justify-between p-2">
        <p>
          Customized Cash Reward Visa
          <br />
          Signature - 1001 <br /> $1.00
        </p>
        <button className="bottomButtons bg-yellow-600 pl-10 pr-10 rounded shadow-md shadow-gray-600 hover:border h-10 mr-1">
          VIEW
        </button>
      </div>
      <hr className="line" />

      <h1 className="text-center p-3"> OPEN NEW ACCOUNT</h1>
    </div>
  );
}

export default BottomCard;
