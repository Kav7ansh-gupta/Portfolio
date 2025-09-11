const items = [
  {
    title: "MongoDB Basics for Students",
    by: "MongoDB",
    year: "2024",
    image: "src/assets/MongoDB.png",
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="p-16">
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((c) => (
          <div
            key={c.title}
            className="card bg-base-100 w-80 shadow-sm p-8 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:shadow-glow transition"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl mb-3 text-accent">
                {c.title}
              </h2>
            </div>
            <figure>
              <img src={c.image} alt="Shoes" />
            </figure>
            <div className=" flex justify-between mt-3 text-accent">
              <p>{c.by}</p>
              <p>{c.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
