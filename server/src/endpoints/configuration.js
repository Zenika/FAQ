const { getConfiguration } = require('../middlewares/configuration')

const configurationEndpoint = multiTenant => async (req, res) =>
  getConfiguration(multiTenant, req, err => {
    res.header('Access-Control-Allow-Origin', '*')

    if (err) {
      res.sendStatus(500)
      return
    }

    // TMP_TAGS
    const {
      title,
      auth0Domain,
      auth0ClientId,
      tagCategories,
      workplaceSharing,
      bugReporting
    } = multiTenant.current(req)._meta.configuration

    // An unauthenticated user can only access this part of the configuration
    res.json({
      title,
      auth0Domain,
      auth0ClientId,
      tagCategories,
      workplaceSharing,
      bugReporting
    })
  })

module.exports = configurationEndpoint
