var proxy = require('./index');
var ProxyMediaStream = require('./mediastream');

function ProxyPeerConnection(original) {
  if (! (this instanceof ProxyPeerConnection)) {
    return new ProxyPeerConnection(original);
  }

  this.__orig = original;

  proxy(
    this,
    [],
    [
      [ 'localDescription', { enumerable: true } ],
      [ 'remoteDescription', { enumerable: true } ],
      [ 'signalingState', { enumerable: true } ],
      [ 'iceGatheringState', { enumerable: true } ],
      [ 'iceConnectionState', { enumerable: true } ]
    ]
  );
}

module.exports = ProxyPeerConnection;

var prot = proxy(
  ProxyPeerConnection.prototype,

  // methods
  [
    'createOffer',
    'createAnswer',
    'createDataChannel',
    'setLocalDescription',
    'setRemoteDescription',
    'updateIce',
    'addIceCandidate',
    'close'
  ],

  // properties [ name, readonly? ]
  [],

  // events
  [
    'negotiationneeded',
    'icecandidate',
    'signalingstatechange',
    'addstream',
    'removestream',
    'iceconnectionstatechange',
    'datachannel'
  ]
);

prot.addStream = function(stream) {
  if (! stream) {
    return;
  }

  return this.__orig.addStream(stream.__orig || stream);
};

prot.removeStream = function(stream) {
  if (! stream) {
    return;
  }

  return this.__orig.removeStream(stream.__orig || stream);
};

prot.getLocalStreams = function() {
  return this.__orig.getLocalStreams().map(ProxyMediaStream);
};

prot.getRemoteStreams = function() {
  return this.__orig.getRemoteStreams().map(ProxyMediaStream);
};

prot.getStreamById = function(id) {
  var stream = this.__orig.getStreamById(id);

  if (stream) {
    stream = new ProxyMediaStream(stream);
  }

  return stream;
};
