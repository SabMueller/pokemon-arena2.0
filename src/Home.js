export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <section>
        {pokemon.slice(10).map((pokemon) => (
          <article>{pokemon.name}</article>
        ))}
      </section>
    </>
  );
}
