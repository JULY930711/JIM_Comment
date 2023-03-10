import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
// import "./CommentinnerPage.css";
import { BsArrowReturnLeft } from "react-icons/bs";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiFillLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";

function CommentinnerPage() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="leftContainer">
          <Link to="/">
            <div className="leftContainer02">
              <div className="leftContainer0202"></div>
            </div>
          </Link>
        </div>

        <div className="mainContainer">
          <div className="fullpage">
            <div className="pagecontent2">
              <div className="btns2" >
                <Link to="/">
                  <div className="return"  style={{color:'white',textDecoration:'none'}}>
                    <BsArrowReturnLeft />
                    返回搜索頁
                  </div>
                </Link>
              </div>

              <>
                <div className="gamedetail">
                  <div className="img2">
                    <img className="image" src="" alt="" />
                  </div>
                  <div className="gameinfo">
                    <div className="gametitle">
                      <p>惠珍女子高校</p>
                      <div className="averagerate">
                        {[...Array(5)].map((value, index) => {
                          if (index + 1 <= 4) {
                            return (
                              <div>
                                <AiTwotoneStar />
                              </div>
                            );
                          } else {
                            return (
                              <div>
                                <AiOutlineStar />
                              </div>
                            );
                          }
                        })}

                        <div className="ratescore">遊戲分數</div>
                      </div>
                    </div>
                    <div className="tips">
                      <div className="person">
                        <div>遊玩人數</div>
                        <div className="info">
                          

                          <p><ImUsers />2-4人</p>
                        </div>
                      </div>
                      <div className="time">
                        <div>時間</div>
                        <div className="info">
                          
                          <p><BiTimeFive />30分</p>
                        </div>
                      </div>
                      <div className="address">
                        <div>地址</div>
                        <div className="info">
                          
                          <p className="addressp">
                          <FiMapPin />  臺北市中山區名水路681想15號B1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="gameintro">
                      <p>
                        江戶時代，接獲秘令的眾忍們，為了達成任務，潛入幕府，通過重重難關，但是任務並非想像中如此單純，究竟夜幕中傳出來的腳步聲，是盟友還是敵人?
                        #九十分鐘長時間挑戰 讓你一次玩個夠 #體驗超大實境迷宮
                        小心別落入敵人的陷阱中 #打造精緻無違和感的場景
                        謎題與劇情相互呼應 #多變的空間刺激你的視覺
                        沉浸於故事氛圍
                      </p>
                    </div>
                  </div>
                </div>
              </>

              <div className="rate">
                {[...Array(5)].map((v, i) => {
                  if (i + 1 <= 4) {
                    return (
                      <div>
                        <AiTwotoneStar />
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <AiOutlineStar />
                      </div>
                    );
                  }
                })}

                <div>遊戲評分</div>
              </div>
              <div className="input2">
                <textarea
                  className="commentinput"
                  defaultValue="請寫下你想說的話..."
                ></textarea>
              </div>
              <div className="inputbtns">
                <div className="pics">圖片</div>
                <div>提交</div>
              </div>

              <div className="commentandgames">
                <div className="commentandreplyfiled">
                  <div className="commentandreply">
                    <div className="userinfo">
                      <div className="usericon">
                        <img className="usericonimg" src="../Images/3-FunLock 放樂工作室.jpg" alt="" />
                      </div>
                      <div className="usercommentdetail">
                        <p style={{margin:'0'}}>hihihi</p>
                        <p className="datetime" style={{margin:'0'}}>2023-1-18</p>
                        <div className="ratestar">
                        
                          <div>
                            <AiTwotoneStar />
                          </div>
                          <div>
                            <AiTwotoneStar />
                          </div>
                          <div>
                            <AiTwotoneStar />
                          </div>
                          <div>
                            <AiTwotoneStar />
                          </div>
                          <div>
                            <AiOutlineStar />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="commenttext">真的超級好玩欸！我覺得他們可以在更完善道具，喜喜，但NPC真的厲害</div>
                    <div className="reply">
                      <p className="apartline">---------------------------</p>
                      <p className="apartline-mobile">------------
                      </p>
                      <button className="css1">回覆</button>
                      <div className="liked">
                        <AiFillLike />
                        123
                      </div>
                      <div className="disliked">
                        <AiOutlineDislike />
                        12
                      </div>
                      <p className="apartline">---------------------------</p>
                      <p className="apartline-mobile">------------</p>
                    </div>

                    <div className="replyid">
                      <p className="usernamereply" style={{color:'#d01b1b'}}>嘻嘻</p>回覆
                      <p className="usernamereply" style={{color:'#d01b1b'}}>哈哈</p>：
                    </div>
                    <div className="replytext">我覺得還好欸,沒想象的好</div>
                  </div>
                </div>

                <div className="gamerecommend">
                  <div className="recommandtitle">其他熱門討論推介</div>

                  <div className="gamesdetail">
                  <div className="images">
                    <img src='' alt='' />
                  </div>

                  <p>gamesname</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentinnerPage;
