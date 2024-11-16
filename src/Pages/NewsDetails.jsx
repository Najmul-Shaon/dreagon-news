import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNav from "../Components/Layout/RightNav";

const NewsDetails = () => {
  const news = useLoaderData();
  const newsDetails = news.data[0];
  console.log(newsDetails);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h2 className="font-semibold mb-4">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={newsDetails?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{newsDetails.title}</h2>
              <p>{newsDetails.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${newsDetails?.category_id}`}
                  className="btn btn-primary"
                >
                  Back To Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
