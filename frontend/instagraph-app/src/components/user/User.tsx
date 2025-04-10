import Article from "../article/Article";
import { getArticlesByUser } from "../../queries/article";
import { useQuery } from "@apollo/client";

const User = () => {
  const { data } = useQuery(getArticlesByUser);
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
            />
          );
        })}
    </div>
  );
};

export default User;
