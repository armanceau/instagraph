import "./articleUser.css";

interface ArticleUserProps {
  id: string;
  titre: string;
  description: string;
  date: string;
  nombreDeLike: number;
}

const ArticleUser = ({
  id,
  titre,
  description,
  date,
  nombreDeLike,
}: ArticleUserProps) => {
  return (
    <div key={id} className="article-card">
      <div className="article-card-header">
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

export default ArticleUser;
