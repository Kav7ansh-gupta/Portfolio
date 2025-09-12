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
    <div className="grid md:grid-cols-2 justify-center grid-row gap-4 p-20  ">
      {items.map((c) => (
        <div
          key={c.title}
          className="card bg-base-100 w-80 shadow-sm p-8 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:shadow-glow transition"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl text-gray-500 mb-3">
              {c.title}
            </h2>
          </div>
          <figure>
            <img src={c.image} alt="Shoes" />
          </figure>
          <div className=" flex justify-between mt-3 text-gray-500">
            <p className="text-gray-500">{c.by}</p>
            <p className="text-gray-500">{c.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
