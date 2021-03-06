import React, { useRef, useEffect } from 'react'

function PayPal({ total, checkoutFunc }) {

    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "tech excess order",
                            amount: {
                                currency_code: "USD",
                                value: total
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                checkoutFunc()
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

export default PayPal