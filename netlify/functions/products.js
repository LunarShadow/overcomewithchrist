import {getProducts} from '/src/context/product-list-context'

exports.handler = async function (event, context) {
  // your server-side functionality
  let snipCartObject
  if (event.httpMethod === 'GET') {
    const products = getProducts()
    snipCartObject = products.map(({details}) => {
      let sizes = ''
      details.variants.map((variant)=>{
        sizes += `${variant.size} [+${variant.price}]| `
      })
      sizes = sizes.substring(0, sizes.length - 2)
      return {
        id: details.pid,
        price: details.price,
        url: 'https://overcomewithchrist.com/shop/',
        image: details.images[0],
        customFields: [
          {
            name: 'sizes',
            options: sizes
          },
          {
            name: 'color',
            options: details.color
          }
        ]
      }
    })
  }
  return {
    statusCode: 200,
    body: JSON.stringify(snipCartObject)
  }
}
