import "./article.css";

interface ArticleProps {
  id: string;
  titre: string;
  description: string;
  date: string;
  nombreDeLike: number;
  username: string;
}

const Article = ({
  id,
  titre,
  description,
  date,
  nombreDeLike,
  username,
}: ArticleProps) => {
  return (
    <div key={id} className="article-card">
      <div className="article-card-header">
        <div className="article-card-user">{username}</div>
        <div className="article-card-date">{date}</div>
      </div>
      <div className="article-card-body">
        <div>
          <h2>{titre}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div>Likes : {nombreDeLike}</div>
    </div>
  );
};

export default Article;
