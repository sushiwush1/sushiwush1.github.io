import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/layout/Layout'
import { footer, navLinks, site, socialLinks } from './content/site'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NoteDetailPage } from './pages/NoteDetailPage'
import { NotesPage } from './pages/NotesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { WorkDetailPage } from './pages/WorkDetailPage'
import { WorkPage } from './pages/WorkPage'

const Kitchen = import.meta.env.DEV
  ? lazy(() => import('./components/_Kitchen').then((m) => ({ default: m.Kitchen })))
  : null

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {Kitchen ? <Route path="_kitchen" element={<Kitchen />} /> : null}
          <Route
            element={
              <Layout logo={site.logo} links={navLinks} socials={socialLinks} footer={footer} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="work/:slug" element={<WorkDetailPage />} />
            <Route path="notes" element={<NotesPage />} />
            <Route path="notes/:slug" element={<NoteDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
