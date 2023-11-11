
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({   
    "amount" : 173,
    "years" : 20,
    "rate" : 5
  })).toEqual("34.60")
  expect(calculateMonthlyPayment({   
    "amount" : 342,
    "years" : 45,
    "rate" : 48
  })).toEqual("153.90")
  expect(calculateMonthlyPayment({   
    "amount" : 654,
    "years" : 49,
    "rate" : 60
  })).toEqual("320.46")
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({   
    "amount" : 173,
    "years" : 20,
    "rate" : 5
  })).toMatch(/^\d+\.\d\d$/)
});

/// etc
