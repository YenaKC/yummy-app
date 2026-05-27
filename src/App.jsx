import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Recipe } from './components/Recipe';

export default function App() {
    return (
        <>
            <Navbar />
            <section className="page-content">
              <Sidebar />
              <Recipe />
            </section>
            <Footer />
        </>
    )

}