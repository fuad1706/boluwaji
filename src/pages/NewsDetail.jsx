// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
// import { newsData } from "../lib/newsData";
// import NewsSidebar from "../components/NewsSidebar";

// // ✅ ShareButton component
// const ShareButton = ({ id }) => {
//   const handleCopy = () => {
//     const links = {
//       1: `https://dailytimesng.com/boluwaji-apanisile-wins-most-creative-photographer-at-ace-awards-plans-big-for-2025/${id}`,
//       2: `https://www.thisdaylive.com/index.php/2024/09/14/boluwaji-apanisile-redefining-nigerias-creative-industry-through-innovation-storytelling/?amp${id}`,
//       3: `https://guardian.ng/technology/icre8-conference-unveils-viable-future-for-creative-industries/${id}`,
//       4: `https://dailytimesng.com/experts-converge-at-the-inaugural-icre8-conference-discussing-the-future-of-creativity/${id}`,
//       5: `https://www.thisdaylive.com/index.php/2024/08/05/icre8-conference-to-discuss-the-opportunities-and-challenges-in-nigerias-creative-sector/${id}`,
//       6: `https://www.vanguardngr.com/2024/08/nakestudios-to-host-icre8-conference-fostering-innovation-in-nigerias-creative-industry/${id}`,
//     };

//     const link = links[id];
//     navigator.clipboard
//       .writeText(link)
//       .then(() => {
//         alert("Link copied to clipboard!");
//       })
//       .catch((err) => console.error("Copy failed", err));
//   };

//   return (
//     <button
//       onClick={handleCopy}
//       className="flex items-center text-gray-500 hover:text-yellow-500 transition-colors"
//     >
//       <Share2 size={18} />
//       <span className="ml-2 text-sm hidden md:inline">Share</span>
//     </button>
//   );
// };

// const NewsDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [news, setNews] = useState(null);
//   const [relatedNews, setRelatedNews] = useState([]);

//   useEffect(() => {
//     if (id) {
//       const newsId = parseInt(id);
//       const foundNews = newsData.find((item) => item.id === newsId);

//       if (foundNews) {
//         setNews(foundNews);

//         const related = newsData
//           .filter((item) => item.id !== newsId)
//           .sort(() => 0.5 - Math.random())
//           .slice(0, 2);

//         setRelatedNews(related);
//         window.scrollTo(0, 0);
//       } else {
//         navigate("/news");
//       }
//     }
//   }, [id, navigate]);

//   if (!news) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-16 lg:px-20 md:px-10">
//       {/* Back button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center mb-8 text-gray-600 hover:text-yellow-500 transition-colors"
//       >
//         <ArrowLeft size={20} className="mr-2" />
//         Back to News
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Main content */}
//         <div className="lg:col-span-2">
//           {/* News header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center text-sm text-gray-500">
//                 <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
//                   <Calendar size={14} className="mr-1" />
//                   {news.date}
//                 </span>
//                 <span className="ml-3 flex items-center">
//                   <User size={14} className="mr-1" />
//                   By {news.author}
//                 </span>
//               </div>

//               {/* ✅ Share Button */}
//               <ShareButton id={news.id} />
//             </div>
//           </div>

//           {/* Feature image */}
//           <div className="mb-8">
//             <img
//               src={news.image}
//               alt={news.title}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>

//           {/* News content */}
//           <div className="prose max-w-none mb-16">
//             <p className="text-lg mb-4">{news.excerpt}</p>
//             {news.content
//               .split("\n")
//               .filter((para) => para.trim() !== "")
//               .map((paragraph, index) => (
//                 <p key={index} className="mb-4">
//                   {paragraph.trim()}
//                 </p>
//               ))}
//           </div>

//           {/* Related news */}
//           {relatedNews.length > 0 && (
//             <div className="mb-8 lg:mb-0">
//               <h2 className="text-2xl font-bold mb-6">Related News</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {relatedNews.map((item) => (
//                   <div
//                     key={item.id}
//                     className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
//                     onClick={() => navigate(`/news/${item.id}`)}
//                   >
//                     <div className="relative overflow-hidden group">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-bold mb-2 hover:text-yellow-500 transition-colors">
//                         {item.title}
//                       </h3>
//                       <div className="text-xs text-gray-500">
//                         {item.date} • {item.author}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Sidebar */}
//         <div className="lg:col-span-1">
//           <NewsSidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, ExternalLink } from "lucide-react";
import { newsData } from "../lib/newsData";
import NewsSidebar from "../components/NewsSidebar";

// ✅ ShareButton copies the original article link
const ShareButton = ({ url }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Copy failed", err));
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center text-gray-500 hover:text-yellow-500 transition-colors"
    >
      <Share2 size={18} />
      <span className="ml-2 text-sm hidden md:inline">Share</span>
    </button>
  );
};

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    if (id) {
      const newsId = parseInt(id, 10);
      const foundNews = newsData.find((item) => item.id === newsId);

      if (foundNews) {
        setNews(foundNews);

        const related = newsData
          .filter((item) => item.id !== newsId)
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);

        setRelatedNews(related);

        window.scrollTo(0, 0);
        document.title = foundNews.title; // optional SEO
      } else {
        navigate("/news");
      }
    }
  }, [id, navigate]);

  if (!news) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 lg:px-20 md:px-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-8 text-gray-600 hover:text-yellow-500 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to News
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* News header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {news.date}
                </span>
                <span className="ml-3 flex items-center">
                  <User size={14} className="mr-1" />
                  By {news.author}
                </span>
              </div>

              {/* ✅ Share Button */}
              <ShareButton url={news.sourceUrl} />
            </div>
          </div>

          {/* Feature image */}
          <div className="mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* News content */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg mb-4">{news.excerpt}</p>
            {news.content
              .split("\n")
              .filter((para) => para.trim() !== "")
              .map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
          </div>

          {/* ✅ Button to original article */}
          <a
            href={news.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-500 text-black px-5 py-2 rounded-full font-medium hover:bg-black hover:text-yellow-500 transition-colors mb-16"
          >
            Visit Original Article
            <ExternalLink size={16} className="ml-2" />
          </a>

          {/* Related news */}
          {relatedNews.length > 0 && (
            <div className="mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-6">Related News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/news/${item.id}`)}
                  >
                    <div className="relative overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 hover:text-yellow-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-gray-500">
                        {item.date} • {item.author}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
