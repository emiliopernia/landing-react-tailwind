import { Nav } from "./components";
import { CustomerReviews, Footer, Hero, PopularProduct, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";

const App = () => (
    <main className="relative">
        <nav>
            <Nav />
            <section className="xl:p-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProduct />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffer />
            </section>
            <section className="bg-pale-blue padding">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
                <Footer />
            </section>
        </nav>
    </main>
);

export default App;