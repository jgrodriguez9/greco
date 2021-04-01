import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import CallUs from '../components/CallUs'
import ContactUs from '../components/ContactUs'
import Layout, { siteTitle } from '../components/Layout'
import MediosTecnicos from '../components/MediosTecnicos'
import OurServices from '../components/OurServices'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <AboutUs />
        <OurServices />
        <CallUs />
        <Portfolio />
        <MediosTecnicos />
        <ContactUs />
    </Layout>
  )
}
