describe("helpers testing", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 150;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });
  it("should the total of tipAmt, billAmt, tipPercent", function () {
    // some code to test... will need before each to set vaule
    expect(sumPaymentTotal("billAmt")).toEqual(150);
    expect(sumPaymentTotal("tipAmt")).toEqual(10);
    expect(sumPaymentTotal("tipPercent")).toEqual(7);

    billAmtInput.value = 130;
    tipAmtInput.value = 40;
    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(280);
    expect(sumPaymentTotal("tipAmt")).toEqual(50);
  });
  it("should return the tip percent", function () {
    expect(calculateTipPercent(100, 10)).toEqual(10);
    expect(calculateTipPercent(100, 20)).toEqual(20);
  });

  it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  it("should generate delete td and append to tr on appendDeleteBtn(tr, type)", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
