import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Blog({ post }) {
  console.log(post);
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="card p-3 mb-2 shadow ">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="icon">
                <Image
                  alt="Mountains"
                  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
                  height={200}
                  width={200}
                />
              </div>
              <div className="ms-2 c-details">
                <h6 className="mb-0">Mailchimp1</h6> <span>1 days ago</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="heading">{post.title}</h6>
            <p className="heading">{post.body}</p>
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            <Link href={"/blogs"}>
              <button className="btn btn-primary" type="button">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { blogId: post.id.toString() },
  }));
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps(context) {
  console.log(context);
  const blogId = context.params.blogId.toString();

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Blog;
