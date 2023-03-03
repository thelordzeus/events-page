import Image from "next/image";
export default function EventsCategoryPage({ data }) {
  return (
    <>
      <h1>Events in London</h1>

      {data.map((ev) => (
        <a href={`/events/${ev.city}/${ev.id}`} key={ev.id}>
          <Image src={ev.image} alt={ev.title} width={200} height={200} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </a>
      ))}
    </>
  );
}
// generating dynamic paths so next js knows how many pages to render for each category dynamically
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: { cat: ev.id.toString() },
    };
  });

  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: {
      data,
    },
  };
}
