var proxy = require('./index');

function ProxyMediaStream(original) {
  if (! (this instanceof ProxyMediaStream)) {
    return new ProxyMediaStream(original);
  }

  this.__orig = original;

  proxy(
    this,
    [],
    [
      [ 'id', { enumerable: true } ],
      [ 'ended', { enumerable: true } ]
    ]
  );
}

module.exports = ProxyMediaStream;
var prot = proxy(
  ProxyMediaStream.prototype,
  // methods
  [
    'getAudioTracks',
    'getVideoTracks',
    'getTrackById',
    'addTrack',
    'removeTrack'
  ],

  // properties [ name, attributes ]
  [],

  // events
  [
    'ended',
    'addtrack',
    'removetrack'
  ]
);

prot.clone = function() {
  return new ProxyMediaStream(this.__orig);
};
