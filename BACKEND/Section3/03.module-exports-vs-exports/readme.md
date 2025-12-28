1. module.exports is actual object that gets exported, while exports is just a reference to it.
2. Modifying exports by adding properties (exports.key = value) will modify the actual object (module.exports).
3. Although reassigning a new value to exports (exports = { key: value }) will not modify the actual object (module.exports).

note : --> it's advisable to use module.exports instead of exports as whatever value residing in module.exports will be returned to the caller 
i.e. require().