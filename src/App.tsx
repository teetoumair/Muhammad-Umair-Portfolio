import { Routes, Route } from 'react-router'
import PageLayout from './components/layout/PageLayout'
import HomePage from './components/pages/HomePage'
import ChatbotPage from './components/pages/ChatbotPage'
import ContactPage from './components/pages/ContactPage'
import JsonLd from './components/seo/JsonLd'

export default function App() {
  return (
    <>
      <JsonLd />
      <Routes>
        <Route path="chatbot" element={<ChatbotPage />} />
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}
