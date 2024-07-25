import React from 'react'
import { Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReview,Subscribe,Footer } from './sections'
import Nav from './components/Nav'

const App = () => (
  <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <PopularProducts />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <SuperQuality />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Services />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <SpecialOffer />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b bg-pale-blue'>
        <CustomerReview />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b w-full sm:py-32 py-16'>
        <Subscribe />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b padding-x padding-t bg-black'>
        <Footer />
      </section>

  </main>
)

export default App