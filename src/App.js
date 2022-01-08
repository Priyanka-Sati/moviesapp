import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Home from './Home';
import Description from './Description';

function App() {
  return (
    <div className="app">
      <Nav />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/desc" component={Description} />
        </Switch>
      </Router>


      {/* <Nav />
      <Banner />

      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}

    </div>
  );
}

export default App;
