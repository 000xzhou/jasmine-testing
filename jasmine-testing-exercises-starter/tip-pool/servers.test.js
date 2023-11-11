describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });
  // it('should not beable to add new server if it"s empty'),
  //   function () {
  //     serverNameInput.value = "";
  //     submitServerInfo();
  //     expect(Object.keys(allServers).length).toEqual(0);
  //   };

  afterEach(function () {
    // teardown logic
    serverTbody.innerHTML = "";
    allServers = {};
    serverId = 0;
  });
});
