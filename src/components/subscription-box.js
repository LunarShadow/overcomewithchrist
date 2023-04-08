import { useForm } from 'react-hook-form'
import { subscribeUser } from '@/utils/mailchimp'
import {useState} from 'react'
import {captureException, captureMessage} from '@sentry/nextjs'

const SubscriptionBox = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [subscribedMessage, setSubscribedMessage ] = useState()

  const onSubmit = (data) => {
    subscribeUser(data.email).then((res)=>{
      setSubscribedMessage(`Thank you! ${res.email_address} has successfully been subscribed`)
    }).catch((ex)=>{
      setSubscribedMessage(`Unable to subscribe the provided email. Please use a different email.`)
      captureMessage(`Unable to subscribe user to mailchimp: ${data.email_address}`,'log')
      captureException(ex)
    })
  }
  return(
    <div className={'w-full text-white px-3 flex flex-col content-center items-center'} id={'subscribe'}>
      <iframe id="iframewin" width="100%" height="100%"
              src="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc3f1c12&zx=1301c1e42&tD=1f17c3b0ff69c0ed&sD=1f17c3b0ff69c61a"></iframe>
    </div>
  )
}

export default  SubscriptionBox