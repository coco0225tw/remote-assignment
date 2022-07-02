//wrapper中的header 沒有問題
//Header中的function======================================================
function Header () {
    //更改字幕
    const [messageText, setMessageText] = React.useState("Welcome to dome home");
    function handleClick() {
        setMessageText("Have a GOOD Day");
    }

    //更改選單nav_2出現與消失
    const [isShown, setIsShown] = React.useState(false);
    const clickToShow = event => {
        setIsShown(current => !current);
    };

    //nav的值
    const nav = ["Intro","How to Build?","About US","Shop"];
    
    return (
        <div className="header">
            <div className="nav">
                <div className="brand">
                    <img className="logo" src="https://res.cloudinary.com/dpnpf9chb/image/upload/v1654997951/code/AppWorks/remote%20assignment/week-1/house_kl3guj.png"></img>
                    <div className="title"><a href="#">DOME HOME</a></div>
                </div>

                {/* nav-btn可以做flex，把trigger放在menu中 */}
                <Nav_1 nav={nav}/> 
                    <div className="trigger tri_1" onClick={clickToShow}>
                        <Line />
                    </div>
            </div>
        
            {/* nav_2選單出現與消失，要怎麼加css? */}
            {isShown && 
                <div className="nav_2">
                    <Nav_2 nav={nav} />
                    <div className="trigger tri_2" onClick={clickToShow}>
                        <Line />
                    </div>
                </div>
            }

            {/* welcome-message */}
            <div className="welcome">
                <h1 className="welcome_message" onClick={handleClick}>{messageText}</h1>
            </div>
        </div>
    );

}

//nav_1 沒有問題(class 不同，nav_1 nav_2分開寫)
const Nav_1 = (props) => {
    const nav = props.nav;
    const navBtns = nav.map((navBtn) => 
        <a href="#" className="btn">{ navBtn }</a>
    )
    return (
        <div className="menu menu_1">
            {navBtns}
        </div>
    );
}

//nav_2 沒有問題(class 不同，nav_1 nav_2分開寫)
const Nav_2 = (props) => {
    const nav = props.nav;
    const navBtns = nav.map((navBtn) => 
        <a href="#" className="btn">{ navBtn }</a>
    )
    return (
        <div className="menu menu_2">
            {navBtns}
        </div>
    );
}

//trigger的線條
class Line extends React.Component {
    render(){
        return (
            <div>
                <div className="line line1"></div>
                <div className="line line2"></div>
            </div>
        );
    }
}
//=========================================================================

//wrapper中的container_1 這裡沒問題
//=========================================================================
class Container_1 extends React.Component {
    render(){
        return (
            <div className="container content_1">
                <h2>Learn More</h2>
                <Content />
            </div>
        );
    }
}

//wrapper中的read 這裡沒問題
//========================================================================
class Read extends React.Component {
    render(){
        return (
            <div className="read">
                <p className="read_btn">Read More</p>
                {/* <p className="arrow">v</p> 還不知道怎麼做動畫 */}
            </div>
        );
    }
}

//wrapper_2 這裡沒問題
//=======================================================================
class Wrapper_2 extends React.Component {
    render(){
        return (
            <div className="wrapper wrapper_2">
                <Container_2 />
            </div>
        );
    }
}

//wrapper_2中的content_2 這裡沒問題
class Container_2 extends React.Component {
    render(){
        return (
            <div className="container content_2">
                <Content />
            </div>
        );
    }
}
//=======================================================================

// 內容content這裡沒問題(container_1 和 container_2)
class Content extends React.Component {
    render(){
        return (
            <div>
                <div className="rows">
                    <div className="articles"><div className="article_1"></div></div>
                    <div className="articles"><div className="article_2"></div></div>
                </div>
                <div className="rows row_2">
                    <div className="articles"><div className="article_3"></div></div>
                    <div className="articles"><div className="article_4"></div></div>
                </div>
            </div>
        );
    }
}

//===================================================================
//App
//用function寫read more按鈕 這裡沒問題(arrow css怎麼改?)
function App () {
    //read more btn function
    const [isShown, setIsShown] = React.useState(false);
    const clickToShow = event => {
        setIsShown(current => !current);
    };

    //read more arrow function???

    return (
        <div>
            <div className="wrapper wrapper_1">
                <Header />
                <Container_1 />
                <div className="read">
                    <p className="read_btn" onClick={clickToShow}>Read More</p>
                    <p className="arrow">v</p>
                </div>
            </div>
            {isShown && <Wrapper_2 />} 
        </div>
    );
}

//render=========================================================
//這裡沒問題
ReactDOM.render( //有優先權
  <App />, //放最大的 
  document.getElementById("root") //render到root
);
