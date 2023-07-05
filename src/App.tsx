

import AboutCity from "components/aboutCity/AboutCity";
import CityReviews from "components/cityReviews/CityReviews";
import barcelonaImg from 'assets/images/barcelona.png';
import SupportChat from "components/supportChat/SupportChat";
import { ChatProvider } from "context/ChatContext";

const App: React.FC = () => {
  return (
    <main className="container">
      <AboutCity
        imgSrc={barcelonaImg}
        imgAlt="barselona"
        title="барселона — обзор города"
        linkToArticle="#"
      >
        барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями
      </AboutCity>

      <CityReviews />

      <ChatProvider>
        <SupportChat />
      </ChatProvider>
    </main>
  );
}

export default App;
