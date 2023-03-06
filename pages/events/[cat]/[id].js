import Image from "next/image";

export default function EventPage({ data }) {
  return (
    <>
      <Image src={data.image} alt={data.title} width={500} height={300} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </>
  );
}

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city, // keep it same as the file name
        id: path.id, // keep it same as the file name
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.id;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.find((ev) => id === ev.id);

  return {
    props: {
      data,
    },
  };
}
