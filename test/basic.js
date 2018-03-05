var test = require('tape')
var getdevicemedia = require('./../')

test('get all devices streams', function (t) {
  getdevicemedia(function (err, devices) {
    if (err) {
      console.log(err)
      return t.fail('failed to get devices')
    }
    t.plan(devices.length)
    devices.forEach(function (device) {
      device.getStream(function (err, stream) {
        t.true(stream instanceof MediaStream, 'got MediaStream')
      })
    })
  })
})