import TextBlockItem from "../components/text/TextBlockItem";

function HomePage() {
  return (
    <section>
      <h1>Home Page</h1>
      <div>
        <TextBlockItem
          title="Welcome"
          description="Hi, welcome to my website. I 
      created it to familiarise myself with React, and for a bit of a 
      creative outlet"
        />
      </div>
    </section>
  );
}
export default HomePage;
