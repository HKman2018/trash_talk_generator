const hbs = require('handlebars')
hbs.registerHelper('ifEquals', (value1, value2) => {
  return (value1 === value2) ? 'checked' : ''
  console.log(value1)
})
