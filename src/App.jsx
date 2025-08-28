import { Welcome } from "./pages/Welcome";
import {Header} from './components/Header';
import { Footer } from "./components/Footer";
import { ContentDescription} from "./components/ContentDescription"
import { NoticeSection } from "./pages/NoticeSection";

function App() {

  return (
    <>
      <Header />
      <section>
        <Welcome />
      </section>
      <section style={{backgroundColor: "whitesmoke"}}>
        <ContentDescription />
      </section>
      <section>
        <NoticeSection />
      </section>
        <Footer />
    </>
  )
}

export default App;