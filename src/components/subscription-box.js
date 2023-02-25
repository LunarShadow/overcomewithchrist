import { useForm } from 'react-hook-form'
import { subscribeUser } from '@/utils/mailchimp'
import {useState} from 'react'
import {captureException, captureMessage} from '@sentry/nextjs'

const SubscriptionBox = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [subscribedMessage, setSubscribedMessage ] = useState(null)

  const onSubmit = (data) => {
    subscribeUser(data.email).then((data)=>{
      setSubscribedMessage(`Thank you! ${data.email_address} has successfully been subscribed`)
    }).catch((ex)=>{
      setSubscribedMessage(`${data.email_address} is not able to be subscribed. Please use a different email.`)
      captureMessage(`Unable to subscribe user to mailchimp: ${data.email_address}`,'log')
      captureException( ex)
    })
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      { errors?.email && <span>Please enter an email.</span> }
      { subscribedMessage && <span> {subscribedMessage} </span> }
      <input type={'email'} placeholder={'Enter your email address.'} {...register("email", { required: true })} />
      <input type={'submit'} value={'Sign Up'} />
    </form>
  )
}

export default  SubscriptionBox