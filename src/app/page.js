import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import HomeBegin from "../components/Home/HomeBegin";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import HomeEndSection from "../components/Home/HomeEndSection";

import Hero from "../components/Home/Hero";


export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      < Hero blogs={allBlogs} />
      <HomeBegin blogs={allBlogs} />
      <HomeEndSection blogs={allBlogs} />


    </main>
  )
}
