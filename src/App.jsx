import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { RecipeList } from './components/RecipeList';

export default function App() {
    return (
        <>
            <Navbar />
            <section className="page-content">
              <Sidebar />
              <RecipeList />
            </section>
            <Footer />
        </>
    )

}