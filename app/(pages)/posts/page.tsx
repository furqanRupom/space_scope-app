import CreatePost from "@/components/Pages/Posts/CreatePost";
import Posts from "@/components/Pages/Posts/Posts";
import TopAvator from "@/components/TopAvator/TopAvator";

const postsPage = () => {
    return (
        <div className="px-6">
          <TopAvator />

          <CreatePost />


          <div className="mt-12 px-3">
          <Posts />
          </div>
        </div>
    );
};

export default postsPage;