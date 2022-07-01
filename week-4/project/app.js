//wrapper中的header 開一個line和container
function Header () {
    //更改字幕
    // state = {
    //     welcome_message: "Welcome to dome home"
    // };
    // changeText = () => {
    //     this.setState({welcome_message: "Have a GOOD Day"});
    // };
    const [messageText, setMessageText] = React.useState("Welcome to dome home");
    function handleClick() {
        setMessageText("Have a GOOD Day");
    }

    //更改選單出現與消失
    const [isShown, setIsShown] = React.useState(false);
    const clickToShow = event => {
        setIsShown(current => !current);
    };

    return (
        <div className="header">
            <div className="nav">
                <div className="brand">
                    <img className="logo" src="https://res.cloudinary.com/dpnpf9chb/image/upload/v1654997951/code/AppWorks/remote%20assignment/week-1/house_kl3guj.png"></img>
                    <div className="title"><a href="#">DOME HOME</a></div>
                </div>
                <div className="menu menu_1">
                    <div onClick={clickToShow}>
                        <Tri1 />
                    </div>
                    <Nav />
                </div>
            </div>
            {/* {isShown && <Wrapper_2 />} */}
            {isShown && <div className="menu menu_2">
                <div onClick={clickToShow}>
                    <Tri2 />
                </div>
                <Nav />
            </div>}
            <div className="welcome">
                <h1 className="welcome_message" onClick={handleClick}>{messageText}</h1>
            </div>
        </div>
    );

}

class Tri1 extends React.Component {
    render(){
        return (
            <div className="trigger tri_1">
                <Line />
            </div>
        );
    }
}

class Tri2 extends React.Component {
    render(){
        return (
            <div className="trigger tri_2">
                <Line />
            </div>
        );
    }
}

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

class Nav extends React.Component {
    render(){
        return (
            <div>
                <a href="#" className="btn nav_btn1">Intro</a>
                <a href="#" className="btn nav_btn2">How to Build?</a>
                <a href="#" className="btn nav_btn3">About US</a>
                <a href="#" className="btn nav_btn4">Shop</a>
            </div>
        );
    }
}

//wrapper中的container 這裡沒問題
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

// 內容content 這裡沒問題
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
//wrapper中的read 這裡沒問題
class Read extends React.Component {
    render(){
        return (
            <div className="read">
                <p className="read_btn">Read More</p>
                <p className="arrow">v</p>
            </div>
        );
    }
}

//wrapper_2 這裡沒問題
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

//用function寫read more按鈕 這裡沒問題(css怎麼改)
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

//這裡沒問題
ReactDOM.render( //有優先權
  <App />, //放最大的 
  document.getElementById("root") //render到root
);
