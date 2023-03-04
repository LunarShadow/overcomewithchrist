import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MC_KEY,
  server: process.env.NEXT_PUBLIC_MC_SERVER
})

const testFunction = async () => {
  const response = await mailchimp.ping.get()
  console.log(response)
}

const subscribeUser = async (email) => {
  const listId = process.env.NEXT_PUBLIC_MC_LIST_ID
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