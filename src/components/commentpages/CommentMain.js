import React from "react";
import { Link } from "react-router-dom";
// import "./CommentMain.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { BiSearch } from "react-icons/bi";

function CommentMain() {
  return (
    <>
    <Header/>
      <div className="bodyContainer">
        <div className="leftContainer">
          <Link to="/">
            <div className="leftContainer02">
              <div className="leftContainer0202"></div>
            </div>
          </Link>
        </div>

        <div className="mainContainer">
          <div className="searchbar">
            <p className="searchbar_p">讓我加入</p>
            <div className="searchkeywords">
              <div className="searchinput">
                <input type="text" />
                <div className="searchicon">
                  <BiSearch />
                </div>
              </div>
            </div>
            <p className="searchbar_p">的討論吧!</p>
          </div>

          <div className="hotspotgames">
            <div className="hotspotgamestitle">熱門遊戲討論</div>
            <div className="gameskeywords">
              <div className="gameskeywords_p">#刺激</div>
              <div className="gameskeywords_p">#刺激</div>
              <div className="gameskeywords_p">#刺激</div>
              <div className="gameskeywords_p">#刺激</div>
              <div className="gameskeywords_p">#刺激</div>
             
           
            
            </div>
            <div className="hotspotgamesfield">
              <div className="hotspotgamesqure">
                <div className="gamesdetail">
                  <div className="images">
                    <img />
                  </div>

                  <p>gamesname</p>
                </div>
                <div className="gamesdetail">
                  <div className="images">
                    <img />
                  </div>
                  <p>gamesname</p>
                </div>
              </div>
              <div className="hotspotgamesqure">
                <div className="gamesdetail">
                  <div className="images">
                    <img />
                  </div>

                  <p>gamesname</p>
                </div>
                <div className="gamesdetail">
                  <div className="images">
                    <img />
                  </div>
                  <p>gamesname</p>
                </div>
              </div>
              <div className="news">
                <div className="newscomment">
                  <div className="newscommenttitle">最新留言</div>
                  <div className="newscommentdetail">
                    <div className="mentionuser">
                      <p
                        className="mentionusername"
                        style={{ color: "#d01b1b" }}
                      >
                        hihi
                      </p>
                      <p
                        className="p1"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        發表留言:
                      </p>
                    </div>
                    <div className="newscommentcontent">
                      這個游戲真的要很用心才能通關！
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default CommentMain;
