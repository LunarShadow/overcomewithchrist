// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getProducts} from '../../context/product-list-context'

export default function handler(req, res) {
  let snipCartObject
  if (req.method === 'GET') {
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
  res.status(200).json(snipCartObject)
}
