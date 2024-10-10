import MainScreen from "./pages/Main"

type AppScreenProps = {
  placesCount: number;
}
  
  function App(props: AppScreenProps): JSX.Element {
    return (
      <MainScreen placesCount={props.placesCount} />
    );
  }
  
  export default App;