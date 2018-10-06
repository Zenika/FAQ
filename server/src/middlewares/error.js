const handling = (err, req, res, next) => {
  if (err) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(err)
    }
    return res.status(err.status || 500).json(err)
  }
  next()
}

module.exports = { handling }
