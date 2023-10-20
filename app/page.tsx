import CircleCharts from "@/components/CircleCharts/CircleCharts";
import HomeCard from "@/components/HomeCard/HomeCard";
import SideSection from "@/components/SideSection/SideSection";
import SmallTable from "@/components/SmallTable/SmallTable";
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
         <HomeCard />

          </div>
        </div>
        <div className="bg-gray-50 p-5">
         <SideSection />
         <CircleCharts />
         <SmallTable />
        </div>
      </section>
    </main>
  );
}
