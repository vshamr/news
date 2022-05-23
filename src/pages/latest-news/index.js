import {useSelector} from "react-redux";
import News from "../../components/news";

const LatestNews = () => {
    const {latestNews} = useSelector(store => store?.news || {});
    const {latestNewsError} = useSelector(store => store?.errors || {});
    const {isLoading} = useSelector(store => store?.loader || {});

    return (
        <div>
            {isLoading
                ? <h3>Loading...</h3>
                : <News news={latestNews} error={latestNewsError} title="Latest News"/>
            }
        </div>
    );
};

export default LatestNews;