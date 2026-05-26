import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function App() {
    return (
        <>
            <Navbar />
            <section className="page-content">
              <Sidebar />
            </section>
            <Footer />
        </>
    )

}