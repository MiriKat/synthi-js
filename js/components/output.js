var Output = new Component(["B", "C", "O", "P"], null, [{
  id: "left",
  ugen: "flock.ugen.filter.biquad.bp",
  freq: 440,
  q: 4,
  source: {
    ugen: "flock.ugen.math",
    inputs: {
      source: {
        id: "left1",
        ugen: "flock.ugen.math",
        inputs: {
          source: {
            id: "input-B1",
            ugen: "flock.ugen.in"
          },
          mul: {
            ugen: "flock.ugen.value",
            value: 1,
            add: {
              id: "input-O1",
              ugen: "flock.ugen.in",
              mul: 1/6
            }
          }
        }
      },
      add: {
        id: "left2",
        ugen: "flock.ugen.math",
        inputs: {
          source: {
            id: "input-C1",
            ugen: "flock.ugen.in"
          },
          mul: {
            ugen: "flock.ugen.value",
            value: 1,
            add: {
              id: "input-O2",
              ugen: "flock.ugen.in",
              mul: 1/6
            }
          }
        }
      }
    }
  }
},{
  id: "right",
  ugen: "flock.ugen.filter.biquad.bp",
  freq: 440,
  q: 4,
  source: {
    ugen: "flock.ugen.math",
    inputs: {
      source: {
        id: "right1",
        ugen: "flock.ugen.math",
        inputs: {
          source: {
            id: "input-B2",
            ugen: "flock.ugen.in"
          },
          mul: {
            ugen: "flock.ugen.value",
            value: 1,
            add: {
              id: "input-P1",
              ugen: "flock.ugen.in",
              mul: 1/6
            }
          }
        }
      },
      add: {
        id: "right2",
        ugen: "flock.ugen.math",
        inputs: {
          source: {
            id: "input-C2",
            ugen: "flock.ugen.in"
          },
          mul: {
            ugen: "flock.ugen.value",
            value: 1,
            add: {
              id: "input-P2",
              ugen: "flock.ugen.in",
              mul: 1/6
            }
          }
        }
      }
    }
  }
}]);
Output.connect = function (inputPin, connectedPins) {
  this.connectedPins[inputPin] = connectedPins;
  var inputBuses = connectedPins.map(function (p) {return buses[p];});

  this.synth.set("input-"+inputPin+"1.bus", inputBuses);
  this.synth.set("input-"+inputPin+"2.bus", inputBuses);
  this.moveToFront();
};
Output.set = function (property, value) {
  this.synth.set(property, value);
};
