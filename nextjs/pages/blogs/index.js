import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import styles from "./blogs.module.scss";

function Blogs(props) {
  console.log(props);
  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="row">
          {props.posts.map((val) => {
            return (
              <div className="col-md-4 " key={val.id}>
                <div className={classNames(styles.card, "p-3 mb-2 shadow")}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="icon">
                        <Image
                          alt="Mountains"
                          src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
                          layout="fixed"
                          objectFit="cover"
                          quality={100}
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="ms-2 c-details">
                        <h6 className="mb-0">Mailchimp1</h6>{" "}
                        <span>1 days ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h6 className="heading">{val.title}</h6>
                  </div>
                  <div className="d-grid gap-2 col-3 mx-auto">
                    <Link href={"/blogs/" + val.id}>
                      <button className="btn btn-primary" type="button">
                        More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
const LoginWithRouter = Blogs;
LoginWithRouter.getLayout = (page) => <>{page}</>;

export default LoginWithRouter;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
