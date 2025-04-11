import { useQuery } from "@apollo/client";
import { getArticles } from "../../queries/article";
import Article from "./Article";
import "./article.css";

const ListeArticle = () => {
  const { data } = useQuery(getArticles);
  return (
    <div className="article-container">
      {(data?.getArticles ?? [])
        .filter((el) => el !== null)
        .map((article) => {
          return (
            <Article
              id={article.id!}
              titre={article.titre!}
              description={article.description!}
              date={article.date!}
              nombreDeLike={article.nombreDeLike!}
              username={article.auteur.username!}
              userId={article.auteur.id!}
            />
          );
        })}
    </div>
  );
};

export default ListeArticle;
