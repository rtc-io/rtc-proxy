var EventEmitter = require('eventemitter3');

module.exports = function(prot, methods, attributes, events) {

  function emitter(target) {
    if (! target.__emitter) {
      target.__emitter = new EventEmitter();
    }

    return target.__emitter;
  }

  // patch methods
  methods.forEach(function(method) {
    target[method] = function() {
      var fn = this.__orig && this.__orig[method];

      if (typeof fn == 'function') {
        return fn.apply(this.__orig, arguments);
      }
    };
  });

  // patch properties
  attributes.forEach(function(attrData) {
    var key = attrData[0];
    var readonly = attrData[1];
    var gs = {
      get: function() {
        return this.__orig[key];
      }
    };

    if (! readonly) {
      gs.set = function(value) {
        this.__orig[key] = value;
      };
    }

    Object.defineProperty(prot, key, gs);
  });

  events.forEach(function(name) {
    Object.defineProperty(prot, 'on' + name, {
      get: function() {
        return emitter(this).listeners(name)[0];
      },

      set: function(handler) {
        emitter(this).on(name, handler);
      }
    });
  });

  prot.addEventListener = function(name, handler) {
    emitter(this).on(name, handler);
  };

  prot.removeEventListener = function(name, handler) {
    emitter(this).removeListener(name, handler);
  };

  return prot;
};
