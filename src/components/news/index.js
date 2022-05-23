import './styles.scss';

const News = ({ news, title, error }) => {
    if (!news || news.length === 0) {
        return error ? <h2>{error}</h2> : null;
    }

    return(
        <div>
            <h2 className="title">{`${title}:`}</h2>
            <ul className="news-list">
                {news.map(({ objectID, url, title, points, num_comments, created_at, author}) => (
                    <li key={objectID} className="news">
                        <div className="description">
                            <a href={url} className="item-title">{title || 'No title'}</a>
                            <span>{author || 'no author'}</span>
                            <span>{`${points || 0} points`}</span>
                            <span>{`${num_comments || 0} comments`}</span>
                            <span>{new Date(created_at).toLocaleDateString()}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;