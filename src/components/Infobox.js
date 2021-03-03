import React, {useState} from 'react'
import {Button, notification, Typography, Space} from 'antd'
import {QuestionOutlined, GithubFilled, FileExcelFilled} from '@ant-design/icons'
import 'antd/lib/button/style/index.css';
import 'antd/lib/notification/style/index.css';

const {Link, Paragraph, Title} = Typography

const Infobox = () => {
      const close = () => {
        console.log("closed!")
      };

      const redirect = (key) => {
          <a href={"https://github.com/Angle-Brackets/csforgood2021"}/>
          notification.close(key)
      }

      const openNotification = () => {
        const key = `open${Date.now()}`;
        notification.open({
          message: 'Information',
          description:
            <Typography>
              This application was brought to you by Ankit Joju and Joshua Galvez for the 2021 CSForGood Competition. The link to the github has been provided for people to study and/or for people to laugh at. The datasets we utilized to create this prototype have also been provided below, consisting of data from 2019-2020 that we felt would be the best to list here, rather than just copying it verbatim. Enjoy! 
              <Paragraph style={{fontSize: "2rem"}}>
                <Link href={"https://github.com/Angle-Brackets/csforgood2021"} style={{textDecorationLine: "none", color:"#4B90FC"}}><GithubFilled/>                   </Link>
                <Link href={"https://blog.rezscore.com/top-100-undergraduate-majors-2019-c9cc32b02bfc"} style={{textDecorationLine: "none", color:"#4B90FC"}}><FileExcelFilled/>                   </Link>
                <Link href={"https://www.matchcollege.com/top-majors"} style={{textDecorationLine: "none", color:"#4B90FC"}}><FileExcelFilled/>                   </Link>
              </Paragraph>
            </Typography>,
          key,
          duration: 0,
          icon: <QuestionOutlined style={{ color: '#108ee9' }}/>,
          placement: "topLeft",
          onClose: close,
          style: {zIndex: "9999", width: "50vw"}
        });
      };

    return (
        <>
            <Button style={{float: "right", height: "4vh", width: "4vh", margin: "1vh", minWidth: "0"}} type="primary" shape={"circle"} icon={<QuestionOutlined />} size={"medium"} onClick={openNotification}/>

        </>
    );
}

export default Infobox;
