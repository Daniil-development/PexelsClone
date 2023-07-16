import React, {useState} from 'react';
import styles from "./index.module.css"
import {ReactComponent as DownloadIcon} from "../../assets/download.svg";
import {ReactComponent as CollectIcon} from "../../assets/collect.svg";
import {ReactComponent as LikedIcon} from "../../assets/liked.svg";
import {ReactComponent as NotLikedIcon} from "../../assets/notliked.svg";

const ColumnItem = ({item}) => {
    const [hover, setHover] = useState(false);

    const aspectRatio = Math.round(item.height / item.width * 100);
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem("PhotoLikes")).includes(item.id));

    const likeButtonClickHandler = () => {
        let likes = JSON.parse(localStorage.getItem("PhotoLikes"));
        if (liked) {
            let index = likes.indexOf(item.id);
            likes.splice(index, 1);
            setLiked(false);
        } else {
            likes.push(item.id);
            setLiked(true);
        }

        localStorage.setItem("PhotoLikes", JSON.stringify(likes))
    }

    return (
        <div id={"Item_" + item.id} className={styles.container} onMouseOver={() => {
            setHover(true);
        }} onMouseOut={() => {
            setHover(false);
        }}>
            <article className={styles.article} style={{
                paddingTop: `${aspectRatio}%`
            }}>

                    <img className={styles.image} src={item.src.original + "?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                         alt={item.alt}/>

                {hover &&
                    <div className={styles.buttonsContainer}>
                        <a className={styles.buttonUser} title="User profile" href={item.photographer_url} target={"_blank"} rel={"noreferrer"}>
                            <div>
                                {item.photographer}
                            </div>
                        </a>

                        <a className={styles.buttonDownload}
                           href={`${item.src.original}?cs=srgb&dl=pexels-${item.photographer.toLowerCase().replaceAll(" ", "-")}-${item.id}.jpg&fm=jpg`}
                           title="Download">
                            <DownloadIcon />
                        </a>
                        <button className={styles.buttonCollection} title="Collect">
                            <CollectIcon />
                        </button>
                        <button className={styles.buttonLike} title="Like" onClick={likeButtonClickHandler
                        }>
                            {liked === true ?
                                <LikedIcon />
                                :
                                <NotLikedIcon />
                            }
                        </button>
                    </div>
                }
            </article>
        </div>

    );
};

export default ColumnItem;