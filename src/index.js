var getusermedia = require('getusermedia')
var enumerateDevices = require('enumerate-devices')

function getanymedia (callback) {
  getusermedia({ audio: true, video: true }, function (err) { // "warm up" gum
    if (err) return callback(err, null)

    enumerateDevices().then(function (devices) {
      callback(null, devices.map(function (device) {
        device.getStream = function (constraints, callback) {
          if (typeof constraints === 'function') {
            callback = constraints
            constraints = {}
          }

          constraints = constraints || {}
          constraints.audio = hasSubstring(device.kind, 'audio') ? { exact: device.deviceId } : undefined
          constraints.video = hasSubstring(device.kind, 'video') ? { exact: device.deviceId } : undefined
          getusermedia(constraints, function (err, stream) {
            callback(err, stream)
          })
        }
        return device
      }))
    }).catch(function (err) {
      callback(err, null)
    })
  })
}

function hasSubstring (str, substr) {
  return str.indexOf(substr) !== -1
}

module.exports = getanymedia
