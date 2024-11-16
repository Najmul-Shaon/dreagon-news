import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const { title } = news;
  console.log(news);
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        {/* Author Section */}
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={news.author.img}
            alt="Author Profile"
          />
          <div className="text-sm font-semibold">
            <p>{news.author.name}</p>
            <p className="text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto text-gray-400">
            <i className="fas fa-share-alt cursor-pointer"></i>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl font-bold text-gray-900">{news.title}</h2>

        {/* Thumbnail Image */}
        <img
          className="w-full h-96 mt-4 object-cover rounded-md"
          src={news.thumbnail_url}
          alt="News Thumbnail"
        />

        {/* Details */}
        <p className="mt-4 text-sm text-gray-500">
          {news.details.substring(0, 200)}...
          <Link
            to={`/news/${news._id}`}
            className="text-orange-600 cursor-pointer"
          >
            Read More
          </Link>
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center text-orange-500">
            <i className="fas fa-star"></i>
            <span className="ml-2 font-semibold">{news.rating.number}</span>
            <span className="ml-1 text-sm text-gray-500">
              ({news.rating.badge})
            </span>
          </div>

          {/* Total View Count */}
          <div className="flex items-center text-gray-500">
            <i className="fas fa-eye"></i>
            <span className="ml-2">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
