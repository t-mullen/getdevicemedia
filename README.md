# getdevicemedia

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Easily list and get MediaStreams from any media device.

```javascript
getdevicemedia(function (err, devices) {
  // devices is an array of capture devices

  devices[0].label // Built-in Microphone
  devices[0].getStream(function (err, stream) {
    stream // MediaStream for this device
  })
})
```

## install

```
npm install --save getdevicemedia
```

or

```html
<script src="dist/getdevicemedia.js"></script>
```

