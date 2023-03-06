import Image from "next/image";
import Link from "next/link";
export default function EventsCategoryPage({ data, pageName }) {
  return (
    <>
      <h1>Events in {pageName}</h1>

      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref={true}>
          <Image src={ev.image} alt={ev.title} width={200} height={200} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
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
      pageName: id,
    },
  };
}
