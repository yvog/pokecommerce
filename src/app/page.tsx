import Overview from './components/overview/Overview';

export default function Homepage() {
  return (
    <>
      <header className="flex flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold sm:text-6xl bg-gradient-to-r from-primary to-primaryLight text-transparent bg-clip-text">
          Pokémons
        </h1>
      </header>
      <main>
        <Overview />
      </main>
    </>
  );
}
