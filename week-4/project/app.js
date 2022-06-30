//wrapper
class Wrapper_1 extends React.Component {
    render(){
        return (
            <div className="wrapper wrapper_1">
                <Header />
                <Container_1 />
                <Read />
            </div>
        );
    }
}

//wrapper中的header
class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <Nav />
                <div class="menu menu_2">
                    <div class="trigger tri_2">
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                    </div>
                    <a href="#" class="btn nav_btn1">Intro</a>
                    <a href="#" class="btn nav_btn2">How to Build?</a>
                    <a href="#" class="btn nav_btn3">About US</a>
                    <a href="#" class="btn nav_btn4">Shop</a>
                </div>
                <div className="welcome">
                    <h1 class="welcome_message">Welcome to DOME HOME</h1>
                </div>
            </div>
        );
    }
}
//header中的nav
class Nav extends React.Component {
    render(){
        return (
            <div className="nav">
                <div className="brand">
                    <img className="logo" src="https://res.cloudinary.com/dpnpf9chb/image/upload/v1654997951/code/AppWorks/remote%20assignment/week-1/house_kl3guj.png"></img>
                    <div className="title"><a href="#">DOME HOME</a></div>
                </div>
                <div className="menu menu_1">
                        <div className="trigger tri_1">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                        <a href="#" className="btn nav_btn1">Intro</a>
                        <a href="#" className="btn nav_btn2">How to Build?</a>
                        <a href="#" className="btn nav_btn3">About US</a>
                        <a href="#" className="btn nav_btn4">Shop</a>
                </div>
            </div>
        );
    }
}
//wrapper中的container
class Container_1 extends React.Component {
    render(){
        return (
            <div className="container content_1">
                <h2>Learn More</h2>
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

//wrapper中的read
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

//====================wrapper_2
class Wrapper_2 extends React.Component {
    render(){
        return (
            <div className="wrapper wrapper_2">
                <Container_2 />
            </div>
        );
    }
}

//wrapper_2中的content_2
class Container_2 extends React.Component {
    render(){
        return (
            <div className="container content_2">
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


// class Menu extends React.Component {
//     render(){
//         return (
//             <div>
//                 <div className="trigger tri_1">
//                     <div className="line line1"></div>
//                     <div className="line line2"></div>
//                 </div>
//                 <a href="#" className="btn nav_btn1">Intro</a>
//                 <a href="#" className="btn nav_btn2">How to Build?</a>
//                 <a href="#" className="btn nav_btn3">About US</a>
//                 <a href="#" className="btn nav_btn4">Shop</a>
//             </div>
//         );
//     }
// }


//最大的
class App extends React.Component {
    render() {
        return (
            <div>
                <Wrapper_1 />
                <Wrapper_2 />
            </div>
        );
        
    }
}

ReactDOM.render( //有優先權
  <App />, //放最大的 
  document.getElementById("root") //render到root
);