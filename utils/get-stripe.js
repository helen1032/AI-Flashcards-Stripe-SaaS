import { loadStripe } from "@stripe/stripe-js";
let stripePromise 

const getStrpe = () => {
    if (!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    }
    return stripePromise
}

export default getStrpe 

