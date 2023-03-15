import Link from "next/link";
import Image from "next/image";
export default function HomePage({data}) {
  return (
    <>
      <main className="">
        {data.map((ev) => (
          <Link href={`/events/${ev.id}`} key={ev.id} passHref={true}>
            <Image src={ev.image} alt={ev.title} width={200} height={150} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </main>
    </>
  );
}
