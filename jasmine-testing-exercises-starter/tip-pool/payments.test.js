describe("payment testing center", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 150;
    tipAmtInput.value = 10;
  });
  it("should add object to allPayments", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("150");
    expect(allPayments["payment1"].tipPercent).toEqual(7);
    expect(allPayments["payment1"].tipAmt).toEqual("10");
  });
  it("should return undefined with negative or empty inputs", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let noPayment = createCurPayment();
    expect(noPayment).toEqual(undefined);
  });
  // it("should not add in all payment on sumbit payment if enter empty bill", function () {
  //   billAmtInput.value = "";
  //   submitPaymentInfo();
  //   expect(Object.keys(allPayments).length).toEqual(0);
  // });
  it("should return an object with bill, tip and %", function () {
    let expectedPayment = {
      billAmt: "150",
      tipAmt: "10",
      tipPercent: 7,
    };
    expect(createCurPayment()).toEqual(expectedPayment);
  });
  It("should Create table row element and pass to appendTd", () => {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll("#paymentTable tbody tr td");

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual("$150");
    expect(curTdList[1].innerText).toEqual("$10");
    expect(curTdList[2].innerText).toEqual("%7");
    expect(curTdList[3].innerText).toEqual("X");
  });
  afterEach(function () {
    // teardown logic
    let allPayments = {};
    let paymentId = 0;
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
  });
});
