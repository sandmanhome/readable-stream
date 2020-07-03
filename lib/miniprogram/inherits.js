module.exports = function (ctor, superCtor) {
  if (ctor === undefined || ctor === null)
      throw new Error('ctor error');
  
  if (superCtor === undefined || superCtor === null)
      throw new Error('superCtor error');
  
  if (superCtor.prototype === undefined)
      throw new Error('superCtor.prototype');
  
  Object.defineProperty(ctor, 'super_', {
      value: superCtor,
      writable: true,
      configurable: true
  });
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
};