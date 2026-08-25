import { Outlet } from 'react-router'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import ScrollProgress from '../ui/ScrollProgress'

export default function PageLayout() {
  return (
    <>
      <ScrollProgress />
      <TopNavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
