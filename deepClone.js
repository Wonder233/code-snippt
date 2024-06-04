function deepClone(obj, cache = new WeakMap()) {
  const type = typeof obj

  let res
  if (cache.has(obj)) {
    return cache.get(obj)
  } else if (Array.isArray(obj)) {
    res = []
    cache.set(obj, res)
    obj.forEach((item) => {
      res.push(deepClone(item, cache))
    })
  } else if (type === 'object') {
    res = {}
    cache.set(obj, res)
    for (let item of Object.keys(obj)) {
      res[item] = deepClone(obj[item], cache)
    }
  } else {
    res = obj
  }
  return res
}
