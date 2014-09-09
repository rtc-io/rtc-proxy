function ProxyMediaStream(original) {
  if (! (this instanceof ProxyMediaStream)) {
    return new ProxyMediaStream(original);
  }

  this.__orig = original;
}

module.exports = ProxyMediaStream;

var prot = require('./index.js')(
  ProxyMediaStream.prototype,
  // methods
  [
    'getAudioTracks',
    'getVideoTracks',
    'getTrackById',
    'addTrack',
    'removeTrack'
  ],

  // properties [ name, readonly? ]
  [
    [ 'id', true ],
    [ 'ended', true ]
  ],

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
