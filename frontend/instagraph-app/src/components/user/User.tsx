import { getArticlesByUser } from "../../queries/article";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import ArticleUser from "./ArticleUser";

const User = () => {
  const { userId, username } = useParams();
  const { data, loading, error } = useQuery(getArticlesByUser, {
    variables: { getArticleByUserId: userId ?? "" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>{username} 👨‍💻</h1>
      <hr />
      <div className="article-container">
        {(data?.getArticleByUserId ?? [])
          .filter((el) => el !== null)
          .map((article) => {
            return (
              <ArticleUser
                id={article.id!}
                titre={article.titre!}
                description={article.description!}
                date={article.date!}
                nombreDeLike={article.nombreDeLike!}
              />
            );
          })}
      </div>
    </div>
  );
};

export default User;
