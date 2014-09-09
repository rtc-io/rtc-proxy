/* jshint node: true */
'use strict';

var RTCPeerConnection = require('rtc-core/detect')('RTCPeerConnection');
var ProxyMediaStream = require('../../mediastream');
var ProxyPeerConnection = require('../../peerconnection');

exports.supported = function(platform) {
  return true;
};

var init = exports.init = function(opts, callback) {
  callback();
};

exports.createConnection = function(config, constraints) {
  return new ProxyPeerConnection(new RTCPeerConnection(config, constraints));
};
