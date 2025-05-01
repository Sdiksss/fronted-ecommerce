import React, { useEffect } from 'react'
import usePurchase from '../hooks/usePurchase'
import PurchaseCard from '../components/Purchase/PurchaseCard'
import './styles/Purchase.css'

const Purchase = () => {

    const {purchases, getAllPurchases} = usePurchase()

    useEffect(()=> {
        getAllPurchases()
    },[])

    return (
    <div className='purchase'>
        <h2>Purchases</h2>
        <div>
            {
                purchases?.map(prod => (
                    <PurchaseCard
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>

    </div>
  )
}

export default Purchase