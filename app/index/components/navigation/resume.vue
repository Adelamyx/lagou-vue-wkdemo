<template>
    <div id="resumeContainer">
        <div class="resumeLeft">
            <div class="resumeName">
                <h2>Adelamyx的简历</h2>
                <input type="text" name="" value="" id="name" />
                <a href="#" class="save">保存</a>
                <a href="#" class="rename">重命名</a>|
                <a href="#">预览</a>
                <p>最后一次更新：<span class="updateTime">2015-08-13 14:14</span></p>
            </div>
            <div class="resumeSchedule">
                <div class="circleSchedule"></div>
                <div class="scheduleInfo">
                    <div class="info">
                        <p>工作经历最能体现自己的工作能力,且完善后才可投递简历哦！</p>
                        <a href="#">马上去完善</a>
                    </div>
                </div>
            </div>
            <div class="baseInfo">
                <span class="changePen"></span>
                <div class="infoContent">
                    <h2>基本信息</h2>
                    <span id="youName">冒云香</span>|<span id="sex">女</span>|<span id="education">硕士</span>|<span id="experience">1年</span>工作经验
                    <br />
                    <span id="tel">18260346208</span>|<span id="email">1084221885@qq.com</span>
                    <br />
                    <span id="state">我是应届毕业生</span>
                </div>
                <div class="headPic">
                    <img src="../../images/default_headpic.png" />
                    <div class="cover">
                    </div>
                </div>
            </div>
            <div class="baseInfo change hopeWork">
                <h2>基本信息</h2>
                <div class="infoChange">
                    <input type="text" placeholder="姓名" id="nameChange" value="冒云香" />
                    <ul>
                        <li>
                            男
                            <span class="check"></span>
                            <input type="radio" name="sex" id="boy" value="男" />
                        </li>
                        <li>
                            女
                            <span class="check"></span>
                            <input type="radio" name="sex" id="girl" value="女" />
                        </li>
                    </ul>
                    <br />
                    <select class="educationChange">
                        <option>大专</option>
                        <option>本科</option>
                        <option>硕士</option>
                        <option>博士</option>
                        <option>其他</option>
                    </select>
                    <select class="educationChange">
                        <option>应届毕业生</option>
                        <option>1年</option>
                        <option>2年</option>
                        <option>3年</option>
                        <option>4年</option>
                        <option>5年</option>
                        <option>6年</option>
                        <option>7年</option>
                        <option>8年</option>
                        <option>9年</option>
                        <option>10年</option>
                        <option>10年以上</option>
                    </select>
                    <br />
                    <input type="tel" placeholder="电话号码" id="" value="" />
                    <br />
                    <input type="email" placeholder="接收面试通知的邮箱" id="" value="" />
                    <br />
                    <select class="stateChange">
                        <option>我目前已离职，可快速到岗</option>
                        <option>我目前正在职，正考虑换个工作</option>
                        <option>我暂时不想找工作</option>
                        <option>我是应届毕业生</option>
                    </select>
                    <br />
                    <a href="#" class="infoSave">保存</a>
                    <a href="#" class="cancel">取消</a>
                </div>
                <div class="headPicChange">
                    <img src="../../images/default_headpic.png" />
                    <div class="cover"><a href="#">点击上传</a>
                    </div>
                </div>
            </div>
            <div class="wishWork hopeWork">
                <h2>期望工作</h2>
                <div class="itemInfo">
                    <span>填写准确的期望工作能大大提高求职成功率哦</span>
                    <br />
                    <span>快来添加期望工作吧</span>
                    <br />
                    <span><a href="#">添加期望工作</a></span>
                </div>
            </div>
            <div class="wishWork change hopeWorkChange">
                <h2>期望工作</h2>
                <div class="infoChange">
                    <input type="text" placeholder="期望城市，如：北京" name="" id="wishCity" value="" />
                    <ul>
                        <li>
                            全职
                            <span class="check"></span>
                            <input type="radio" name="workType" id="" value="全职" />
                        </li>
                        <li>
                            兼职
                            <span class="check"></span>
                            <input type="radio" name="workType" id="" value="兼职" />
                        </li>
                        <li>
                            实习
                            <span class="check"></span>
                            <input type="radio" name="workType" id="" value="实习" />
                        </li>
                    </ul>
                    <input type="text" name="" class="wishJob" placeholder="期望职位，如：产品经理" id="" value="" />
                    <select placeholder="期望月薪" class="wishPay">
                        <option>2K以下</option>
                        <option>2K-5K</option>
                        <option>5K-10K</option>
                        <option>10K-15K</option>
                        <option>15K-25K</option>
                        <option>25K-50K</option>
                        <option>50K以上</option>
                    </select>
                    <br />
                    <a href="#" class="hopeWorkSave">保存</a>
                    <a href="#" class="hopeWorkCancel">取消</a>
                </div>
            </div>
            <div class="wishWork workExperience">
                <h2>工作经历（投递简历时必填）</h2>
                <div class="itemInfo">
                    <span>工作经历最能体现自己的工作能力，</span>
                    <br />
                    <span>且完善后才可投简历哦！</span>
                    <br />
                    <span><a href="#">添加工作经历</a></span>
                </div>
            </div>
            <div class="wishWork change workExperienceChange">
                <h2>工作经历（投递简历时必填）</h2>
                <div class="infoChange">
                    <input type="text" name="" placeholder="公司名称" id="companyName" value="" />
                    <input type="text" name="" placeholder="职位名称：如产品经理" id="jobName" value="" />
                    <select class="startYear">
                        <option selected="selected">开始年份</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                    </select>
                    <select class="startMonth">
                        <option selected="selected">开始月份</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>

                    <select class="endYear">
                        <option selected="selected">结束年份</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                    </select>
                    <select class="endMonth">
                        <option selected="selected">结束月份</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <br />
                    <a href="#" class="workExperienceSave">保存</a>
                    <a href="#" class="workExperienceCancel">取消</a>
                </div>
            </div>
            <div class="wishWork projectExperience">
                <h2>项目经验</h2>
                <div class="itemInfo">
                    <span>项目经验是用人单位衡量人才能力的重要指标哦！</span>
                    <br />
                    <span>来说说让你难忘的项目吧！</span>
                    <br />
                    <span><a href="#">添加项目经验</a></span>
                </div>
            </div>
            <div class="wishWork change projectExperienceChange">
                <h2>项目经验</h2>
                <div class="infoChange">
                    <input type="text" name="" id="projectName" placeholder="项目名称" value="" />
                    <input type="text" name="" id="projectJob" placeholder="担任职务，如：产品负责人" value="" />
                    <br />
                    <select class="startYear">
                        <option selected="selected">开始年份</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                    </select>
                    <select class="startMonth">
                        <option selected="selected">开始月份</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>

                    <select class="endYear">
                        <option selected="selected">结束年份</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                    </select>
                    <select class="endMonth">
                        <option selected="selected">结束月份</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <br />
                    <textarea id="projectDesc" name="" rows="8" cols="" placeholder="项目描述"></textarea>
                    <br />
                    <a href="#" class="projectExperienceSave">保存</a>
                    <a href="#" class="projectExperienceCancel">取消</a>
                </div>
            </div>

            <div class="wishWork educationBackground">
                <h2>教育背景（投递简历时必填）</h2>
                <div class="itemInfo">
                    <span>教育背景可以充分体现你的学习和专业能力，</span>
                    <br />
                    <span>且完善后才可投简历哦！</span>
                    <br />
                    <span><a href="#">添加教育经历</a></span>
                </div>
            </div>
            <div class="wishWork change educationBackgroundChange">
                <h2>教育背景（投递简历时必填）</h2>
                <div class="infoChange">
                    <input type="text" placeholder="学校名称" name="SchoolName" id="SchoolName" value="" />
                    <select class="educationPosition">
                        <option selected="selected">学历</option>
                        <option>大专</option>
                        <option>本科</option>
                        <option>硕士</option>
                        <option>博士</option>
                        <option>其他</option>
                    </select>
                    <input type="text" placeholder="专业名称" name="majorName" id="majorName" value="" />
                    <select class="startYear">
                        <option selected="selected">开始年份</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                    </select>
                    <select class="endYear">
                        <option selected="selected">结束年份</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                        <option>1979</option>
                        <option>1978</option>
                        <option>1977</option>
                        <option>1976</option>
                        <option>1975</option>
                        <option>1974</option>
                        <option>1973</option>
                        <option>1972</option>
                        <option>1971</option>
                        <option>1970</option>
                    </select>
                    <br />
                    <a href="#" class="educationBackgroundSave">保存</a>
                    <a href="#" class="educationBackgroundCancel">取消</a>
                </div>
            </div>
            <div class="wishWork selfDes">
                <h2>自我描述</h2>
                <div class="itemInfo">
                    <span>描述你的性格、爱好以及吸引人的经历等，</span>
                    <br />
                    <span>让企业了解多元化的你！</span>
                    <br />
                    <span><a href="#">添加自我描述</a></span>
                </div>
            </div>
            <div class="wishWork change selfDesChange">
                <h2>自我描述</h2>
                <div class="infoChange">
                    <textarea name="" id="selfDesText" rows="" cols=""></textarea>
                    <br />
                    <a href="#" class="selfDesSave">保存</a>
                    <a href="#" class="selfDesCancel">取消</a>

                </div>
            </div>
            <div class="wishWork workDisplay">
                <h2>作品展示</h2>
                <div class="itemInfo">
                    <span>好作品会说话！</span>
                    <br />
                    <span>快来秀出你的作品打动企业吧！</span>
                    <br />
                    <span><a href="#">添加作品展示</a></span>
                </div>
            </div>
            <div class="wishWork change workDisplayChange">
                <h2>作品展示</h2>
                <div class="infoChange">
                    <input type="text" placeholder="请输入作品链接" name="" id="workLink" value="" />
                    <textarea name="" id="desWord" rows="" cols=""></textarea>
                    <br />
                    <a href="#" class="workDisplaySave">保存</a>
                    <a href="#" class="workDisplayCancel">取消</a>
                </div>
            </div>
        </div>
        <div class="resumeRight">
            <div class="rightBox myInfo">
                <h2>我的信息</h2>
                <a href="#">我收藏的职位</a>
                <a href="#">我订阅的职位</a>
            </div>
            <div class="rightBox myAttachmentResume">
                <h2>我的附件简历</h2><span class="rightBtn">上传简历</span>
                <a href="#">暂无简历附件</a>
            </div>
            <div class="rightBox sendResumeSetting">
                <h2>投递简历设置</h2><span class="rightBtn">修改设置</span>
                <a href="#">暂未设置默认投递简历</a>
            </div>
            <div class="rightBox maxSendResume">
                <h2>当前每日投递量<span>10</span>个</h2>
                <a href="#">邀请好友，提升投递量</a>
            </div>
            <div class="rightBox screen">
                <img src="../../images/companylist_qr.png" />
                <span>微信扫一扫，轻松找工作</span>
            </div>
        </div>
    </div>
</template>
<style>
    #resumeContainer {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 35px;
        height: 100%;
        overflow: hidden;
    }

    .resumeLeft {
        width: 70%;
        height: 100%;
        float: left;
    }

    .resumeRight {
        width: 25%;
        height: 100%;
        float: right;
    }

    .resumeRight .rightBox {
        padding: 15px 20px;
        background: #fafafa none repeat scroll 0 0;
        margin-bottom: 8px;
    }

    .resumeRight .rightBox a {
        font-size: 0.87em;
        color: #333;
        display: block;
        margin-bottom: 5px;
        clear: both;
    }

    .resumeRight .rightBox h2 {
        font-size: 1.125em;
        font-weight: 600;
        margin: 0 0 8px;
        float: left;
    }

    .resumeRight .rightBox .rightBtn {
        color: #019875;
        cursor: pointer;
        float: right;
        font-size: 0.87em;
        text-decoration: none;
    }

    .resumeRight .screen img {
        width: 100%;
        margin-bottom: 10px;
    }

    .resumeRight .screen {
        font-size: 0.87em;
        color: #333;
        text-align: center;
    }

    .resumeLeft .resumeName {
        width: 100%;
    }

    .resumeLeft .resumeName h2,
    .resumeLeft .resumeName input[type=text] {
        font-size: 1.125em;
        float: left;
        margin-right: 10px;
    }

    .resumeLeft .resumeName input[type=text] {
        border: 2px solid #f1f1f1;
        display: none;
    }

    .resumeLeft .resumeName a {
        color: #019875;
        padding: 0 5px;
        font-size: 0.87em;
    }

    .resumeLeft .resumeName .save {
        display: none;
    }

    .resumeLeft .resumeName p {
        float: right;
        font-size: 0.87em;
    }

    .resumeLeft .resumeSchedule {
        width: 100%;
        border: 1px solid green;
        overflow: hidden;
        margin: 20px 0;
    }

    .resumeLeft .resumeSchedule .circleSchedule {
        float: left;
        width: 30%;
        height: 154px;
        text-align: center;
        background: #fff7e9 none repeat scroll 0 0;
    }

    .resumeLeft .resumeSchedule .circleSchedule canvas {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 50%;
    }

    .resumeLeft .resumeSchedule .scheduleInfo {
        height: 154px;
        float: right;
        width: 69%;
        background: #fff7e9 none repeat scroll 0 0;
    }

    .resumeLeft .resumeSchedule .scheduleInfo .info {
        position: relative;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        color: #555555;
        font-size: 0.87em;
    }

    .resumeLeft .resumeSchedule .scheduleInfo .info p {
        margin-bottom: 5%;
    }

    .resumeLeft .resumeSchedule .scheduleInfo .info a {
        padding: 10px 30px;
        color: rgb(255, 255, 255);
        text-decoration: none;
        background: #019875;
    }

    .resumeLeft .baseInfo,
    .resumeLeft .wishWork {
        border: 2px solid #fafafa;
        width: 100%;
        background: #fafafa none repeat scroll 0 0;
        margin-bottom: 20px;
        padding: 18px;
        overflow: hidden;
        position: relative;
        z-index: 2;
    }

    .resumeLeft .baseInfo h2,
    .resumeLeft #container .leftContent .wishWork h2 {
        background: rgba(0, 0, 0, 0) url(../../images/profile_square.png) no-repeat scroll 0 3px;
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 10px;
        padding-left: 20px;
    }

    .resumeLeft .baseInfo .infoContent {
        margin-left: 10px;
        float: left;
    }

    .resumeLeft .baseInfo .infoContent span,
    .resumeLeft .wishWork span {
        color: #555555;
        display: inline-block;
        padding: 0 10px;
        text-align: center;
        margin-bottom: 10px;
    }

    .resumeLeft .baseInfo .changePen {
        background: rgba(0, 0, 0, 0) url(../../images/c_edit.png) no-repeat scroll 0 1px;
        height: 25px;
        position: absolute;
        right: 7px;
        top: 7px;
        width: 25px;
        cursor: pointer;
    }

    .resumeLeft .baseInfo .changePen:hover {
        background-position: -30px 0;
    }

    .resumeLeft .baseInfo .headPic {
        float: right;
        width: 120px;
        height: 120px;
        position: relative;
    }

    .resumeLeft .baseInfo .headPic img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
    }

    .resumeLeft .baseInfo .headPic .cover {
        position: absolute;
        border: 5px solid rgb(255, 255, 255);
        border-radius: 50%;
        overflow: hidden;
        top: -5px;
        left: -5px;
        width: 100%;
        height: 100%;
    }

    .resumeLeft .baseInfo .infoChange,
    .resumeLeft .wishWork .infoChange {
        width: 60%;
        float: left;
        margin-left: 20px;
    }

    .resumeLeft .baseInfo .infoChange input,
    .resumeLeft .baseInfo .infoChange select,
    .resumeLeft .wishWork .infoChange input,
    .resumeLeft .wishWork .infoChange select,
    .resumeLeft .wishWork .infoChange textarea {
        display: inline-block;
        font-size: 0.9em;
        line-height: 2.25em;
        border: 2px solid #f1f1f1;
    }

    .resumeLeft .baseInfo .infoChange input[id=nameChange],
    .resumeLeft .wishWork .infoChange input[id=wishCity],
    .resumeLeft .wishWork .infoChange input[id=companyName],
    .resumeLeft .wishWork .infoChange input[id=jobName],
    .resumeLeft .wishWork .infoChange input[id=projectName],
    .resumeLeft .wishWork .infoChange input[id=projectJob],
    .resumeLeft .wishWork .infoChange input[id=SchoolName],
    .resumeLeft .wishWork .infoChange input[id=majorName],
    .resumeLeft .wishWork .infoChange select[class=educationPosition] {
        width: 166px;
        height: 36px;
        padding: 0;
        float: left;
    }

    .resumeLeft .wishWork .infoChange select[class=educationPosition] {
        box-sizing: content-box;
    }

    .resumeLeft .baseInfo .infoChange ul,
    .resumeLeft .wishWork .infoChange ul {
        display: inline-block;
        float: left;
    }

    .resumeLeft .baseInfo .infoChange ul li,
    .resumeLeft .wishWork .infoChange ul li {
        position: relative;
        display: inline-block;
        background: #fff none repeat scroll 0 0;
        color: #777;
        cursor: pointer;
        height: 36px;
        line-height: 36px;
        margin: 0 10px;
        text-align: center;
        width: 36px;
        border: 2px solid #FFFFFF;
        float: left;
    }

    .resumeLeft .baseInfo .infoChange ul li:first-of-type,
    .resumeLeft .wishWork .infoChange ul li:first-of-type {
        margin-left: 30px;
    }

    .resumeLeft .baseInfo .infoChange .educationChange,
    .resumeLeft .wishWork .infoChange .wishPay,
    .resumeLeft .wishWork .infoChange .startYear,
    .resumeLeft .wishWork .infoChange .startMonth,
    .resumeLeft .wishWork .infoChange .endYear,
    .resumeLeft .wishWork .infoChange .endMonth {
        display: inline-block;
        height: 36px;
        box-sizing: content-box;
        width: 166px;
        margin-top: 20px;
        margin-right: 30px;
        clear: both;
    }

    .resumeLeft .wishWork .infoChange .startYear,
    .resumeLeft .wishWork .infoChange .startMonth,
    .resumeLeft .wishWork .infoChange .endYear,
    .resumeLeft .wishWork .infoChange .endMonth {
        width: 80px;
        margin-right: 18px;
    }

    .resumeLeft .baseInfo .infoChange input[type=email],
    .resumeLeft .baseInfo .infoChange input[type=tel],
    .resumeLeft .wishWork .infoChange textarea[id=projectDesc],
    .resumeLeft .wishWork .infoChange textarea[id=selfDesText],
    .resumeLeft .wishWork .infoChange input[id=workLink],
    .resumeLeft .wishWork .infoChange textarea[id=desWord] {
        display: block;
        width: 366px;
        margin-top: 20px;
        height: 36px;
    }

    .resumeLeft .wishWork .infoChange textarea[id=projectDesc],
    .resumeLeft .wishWork .infoChange textarea[id=selfDesText],
    .resumeLeft .wishWork .infoChange textarea[id=desWord] {
        height: 150px;
    }

    .resumeLeft .baseInfo .infoChange .stateChange {
        width: 366px;
        margin-top: 20px;
        height: 36px;
        box-sizing: content-box;
    }

    .resumeLeft .baseInfo .infoChange a,
    .resumeLeft .wishWork .infoChange a {
        display: inline-block;
        padding: 10px 20px;
        margin: 20px;
        text-decoration: none;
        color: #555555;
    }

    .resumeLeft .baseInfo .infoChange a:first-of-type,
    .resumeLeft .wishWork .infoChange a:first-of-type {
        color: #FFFFFF;
        background: #64c0ab none repeat scroll 0 0;
    }

    .resumeLeft .baseInfo .infoChange input[type=radio],
    .resumeLeft .wishWork .infoChange input[type=radio] {
        opacity: 0;
    }

    .resumeLeft .baseInfo .infoChange .check,
    .resumeLeft .wishWork .infoChange .check {
        background: rgba(0, 0, 0, 0) url("../../images/radio_checked.png") no-repeat scroll 0 0;
        height: 18px;
        position: absolute;
        right: -1px;
        top: -1px;
        width: 18px;
        display: none;
    }

    .resumeLeft .wishWork .infoChange .check {
        width: 18px;
        right: -21px;
    }

    .resumeLeft .baseInfo .headPicChange {
        float: right;
        width: 120px;
        height: 120px;
        position: relative;
    }

    .resumeLeft .baseInfo .headPicChange img {
        border-radius: 0;
    }

    .resumeLeft .baseInfo .headPicChange .cover {
        text-align: center;
        border-radius: 0;
        position: absolute;
        width: 100%;
        height: 15%;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .resumeLeft .baseInfo .headPicChange .cover a {
        color: rgb(255, 255, 255);
        text-decoration: none;
    }

    .resumeLeft .change {
        display: none;
    }

    .resumeLeft .wishWork span a {
        color: #0d9572;
    }

    .resumeLeft .wishWork .itemInfo {
        background: rgba(0, 0, 0, 0) url("../../images/profile_add.png") no-repeat scroll 20px 0;
        cursor: pointer;
        min-height: 76px;
        padding: 0 0 0 140px;
    }

    .resumeLeft .wishWork .itemInfo:hover {
        background-position: 20px -76px;
    }

    .resumeLeft .wishWork .infoChange input[class=wishJob] {
        width: 166px;
        height: 36px;
        padding: 0;
    }

    .resumeLeft .educationBackgroundChange .infoChange {
        width: 55%;
    }

    .resumeLeft .educationBackgroundChange .infoChange .startYear,
    .resumeLeft .educationBackgroundChange .infoChange .endYear {
        margin-top: 0;
        margin-right: 0;
    }
</style>
<script>
    module.exports = {
        data: function () {
            //数据
            return {}
        },
        mounted: function () {
            //第一次加载的时候调用这个方法
            /*环形进度条显示，需要导入JS*/
            $('.circleSchedule').radialIndicator({
                barColor: '#019875',
                /*进度条颜色*/
                barBgColor: '#FFFFFF',
                /*进度条背景颜色*/
                barWidth: 10,
                /*进度条宽度*/
                initValue: 0,
                /*初始值*/
                roundCorner: true,
                /*进度条是否显示圆角*/
                percentage: true,
                /*是否显示百分比*/
                fontSize: 20,
                /*字体大小*/
                fontFamily: '微软雅黑',
                /*字体格式*/
                fontColor: '#000000',
                /*字体颜色*/
                fontWeight: '500' /*字体粗细*/
            });
            var radialObj = $('.circleSchedule').data('radialIndicator');
            /*获取对象的实例*/
            radialObj.animate(70);
            /*修改数值即可实现动画效果*/
            /*环形进度条结束*/
            /*点击重命名*/
            $('.rename').click(function () {
                var text = $(this).siblings('h2').text();
                $(this).siblings('#name').attr('value', text);
                $(this).siblings('#name').show().siblings('h2').hide().siblings('.save').show();
                $(this).hide();
            });
            /*点击保存*/
            $('.save').click(function () {
                var Text = document.getElementById('name').value;
                $(this).siblings('h2').html(Text);
                $(this).siblings('#name').hide().siblings('h2').show().siblings('.rename').show();
                $(this).hide();
            });
            /*选择男女li*/
            $('.infoChange li').click(function () {
                var tx = $(this)
                tx.css('border-color', '#91cebe').children('.check').show().siblings('input[name="sex"]').prop('checked', 'checked');
                tx.siblings('li').css('border-color', '#FFFFFF').children('.check').hide();
            });
            /*进入修改基本信息*/
            $('.changePen').click(function () {
                $('.baseInfo:eq(1)').show();
                $('.baseInfo:eq(0)').hide();
            });
            /*取消修改基本信息*/
            $('.cancel').click(function () {
                $('.baseInfo:eq(1)').hide();
                $('.baseInfo:eq(0)').show();
            });
            /*保存修改基本信息*/
            $('.infoSave').click(function () {
                $('.baseInfo:eq(1)').hide();
                $('.baseInfo:eq(0)').show();
            });
            /*点击添加*/
            $('.itemInfo').click(function () {
                $(this).parents('.wishWork').hide().next('.change').show();

            });
            /*期望工作*/
            $('.hopeWorkSave').click(function () {
                $(this).parents('.hopeWorkChange').hide().prev('.hopeWork').show();
            });
            $('.hopeWorkCancel').click(function () {
                $(this).parents('.hopeWorkChange').hide().prev('.hopeWork').show();
            });
            /*工作经验*/
            $('.workExperienceSave').click(function () {
                $(this).parents('.workExperienceChange').hide().prev('.workExperience').show();
            });
            $('.workExperienceCancel').click(function () {
                $(this).parents('.workExperienceChange').hide().prev('.workExperience').show();
            });
            /*项目经验*/
            $('.projectExperienceSave').click(function () {
                $(this).parents('.projectExperienceChange').hide().prev('.projectExperience').show();
            });
            $('.projectExperienceCancel').click(function () {
                $(this).parents('.projectExperienceChange').hide().prev('.projectExperience').show();
            });
            /*教育背景*/
            $('.educationBackgroundSave').click(function () {
                $(this).parents('.educationBackgroundChange').hide().prev('.educationBackground').show();
            });
            $('.educationBackgroundCancel').click(function () {
                $(this).parents('.educationBackgroundChange').hide().prev('.educationBackground').show();
            });
            /*个人描述*/
            $('.selfDesSave').click(function () {
                $(this).parents('.selfDesChange').hide().prev('.selfDes').show();
            });
            $('.selfDesCancel').click(function () {
                $(this).parents('.selfDesChange').hide().prev('.selfDes').show();
            });
            /*作品展示*/
            $('.workDisplaySave').click(function () {
                $(this).parents('.workDisplayChange').hide().prev('.workDisplay').show();
            });
            $('.workDisplayCancel').click(function () {
                $(this).parents('.workDisplayChange').hide().prev('.workDisplay').show();
            });
        },
        methods: {
            //方法
        }
    }
</script>
