import React, {useState} from 'react';

const Item = ({item}) => {
    const [hoverID, setHoverID] = useState(null);

    const aspectRatio = Math.round(item.height / item.width * 100);

    return (
        <div id={"Item_" + item.id} className="Item_container" onMouseOver={(event) => {
            setHoverID(item.id);
            console.log(hoverID);
        }} onMouseOut={(event) => {
            setHoverID(null);
            console.log(hoverID);
        }}>
            <article style={{paddingTop: `${aspectRatio}%`, background: "rgb(113, 110, 101)", position: "relative", borderRadius: "0px"}}>
                <a className="Item_link" href={item.src.original}>
                    <img className="Item_image" src={item.src.original + "?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={item.alt}/>
                </a>
                {hoverID === item.id ?
                    <div className="Item_buttons_container">
                        <a className="Item_button_user" title="User profile" href={item.photographer_url}>
                            <div className="Item_button_user_image_container">
                                <img className="Item_button_user_image" alt={item.photographer}/>
                            </div>
                            <div className="Item_button_user_nickname">
                                {item.photographer}
                            </div>
                        </a>


                        <a className="Item_button Item_button_download" title="Скачать">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                        </a>
                        <button className="Item_button Item_button_collection" title="В коллекцию">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                        </button>
                        <button className="Item_button Item_button_like" title="Нравится">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                        </button>
                    </div>
                    :
                    <></>
                }
            </article>
        </div>

    );
};

export default Item;