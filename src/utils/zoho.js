const url = 'https://campaigns.zoho.com/api/v1.1/json/listsubscribe'
const testFunction = async () => {
  const response = await fetch(url, {
    method: 'POST',
    Authorization: `Zoho-oauthtoken ${process.env.NEXT_PUBLIC_ZOHO_KEY}`
  })
  console.log(response)
}

const subscribeUser = async (email) => {
  const listId = process.env.NEXT_PUBLIC_ZOHO_LIST_KEY
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: 'subscribed'
  })
  return {
    id: response.id,
    email: response.email_address
  }
}

module.exports = {
  testFunction,
  subscribeUser
}

