import Image from "next/image";
export default function EventsPage({ data }) {
  return (
    <>
      <h1>Events Page </h1>
      <div>
        {data.map((ev) => (
          <a href={`/events/${ev.id}`} key={ev.id}>
            <Image src={ev.image} alt={ev.title} width={200} height={200} />
            <h2>{ev.title}</h2>
          </a>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json"); // requesting on the events_categories data from the data.json file

  return {
    props: {
      data: events_categories,
    },
  };
}
