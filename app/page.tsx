import SpaceCharts from "@/components/SpaceCharts/SpaceCharts";
import TopAvator from "@/components/TopAvator/TopAvator"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto w-full ">
      <section className="grid grid-cols-1 lg:grid-cols-[4fr,1fr] w-full gap-10">
        <div className="">
          <div>
            <TopAvator />
          </div>

          <div className="mt-12">
         <SpaceCharts />

          </div>
        </div>
        <div className="bg-gray-50 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
          perferendis labore iste dolore culpa praesentium ea voluptatum, facere
          natus eum, quam distinctio explicabo nostrum sequi magnam rem iure
          sapiente itaque consequatur debitis! Animi nesciunt sequi enim autem
          debitis assumenda.
        </div>
      </section>
    </main>
  );
}
