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
    <div className={'w-full bg-yellow-900 text-white py-12 px-3 text-center flex flex-col content-center items-center'} id={'subscribe'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'pb-6'}>
          <p className={'text-4xl font-semibold'}> Stay In The Loop</p>
          <p className={'text-xs'}> Subscribe to my newsletter for all the latest updates</p>
        </div>
        <div className={''}>
          { errors?.email && <span className={'text-red-200 block'}>Please enter a valid email address.</span> }
          { subscribedMessage && <span className={'text-amber-400 block'}> {subscribedMessage} </span> }
          <input className={'text-black text-base rounded-full px-5 py-1 my-2 block'} type={'email'} placeholder={'Enter your email address.'} {...register("email", { required: true })} />
          <input className={'text-black text-base bg-white rounded-full px-10 py-1 block hover:bg-primary mx-auto'} type={'submit'} value={'Sign Up'} />
        </div>
      </form>
    </div>
  )
}

export default  SubscriptionBox