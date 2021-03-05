import { ChalllengesProvider } from "../contexts/ChallengesContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChalllengesProvider>
      <Component {...pageProps} />
    </ChalllengesProvider>
  );
}

export default MyApp;
