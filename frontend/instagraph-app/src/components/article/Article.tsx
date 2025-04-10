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
    <div className="card-container">
      <div key={id} className="card">
        <h2>{titre}</h2>
        <p>{description}</p>
        <p>Date : {date}</p>
        <p>Likes : {nombreDeLike}</p>
        <p>Auteur : {username}</p>
      </div>
    </div>
  );
};

export default Article;
