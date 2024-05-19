import React from 'react'
import Container from '../layers/Container'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'

const Cart = () => {
  return (
    <div>
        <Container>
            <HeaderForBreadcrumb text="Cart" className="px-0"/>
        </Container>
    </div>
  )
}

export default Cart