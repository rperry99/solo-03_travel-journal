import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  // const jokeElements = jokesList.map((joke) => {
  //   return <Joke setup={joke.setup} punchline={joke.punchline} />;
  // });
  const travelData = data.map((entry) => {
    return (
      <Card
        key={entry.id}
        imageURL={entry.imageURL}
        imageAlt={entry.imageAlt}
        location={entry.location}
        mapURL={entry.mapURL}
        destination={entry.destination}
        travelDate={entry.travelDate}
        description={entry.description}
      />
    );
  });
  return (
    <>
      <section className="card-container">{travelData}</section>
    </>
  );
}

export default App;
