import React, {useState} from 'react'
import {Button, notification, Typography} from 'antd'
import {QuestionOutlined, GithubFilled} from '@ant-design/icons'
import 'antd/lib/button/style/index.css';
import 'antd/lib/notification/style/index.css';

const {Link, Paragraph} = Typography

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
            <Typography>This application was brought to you by Ankit Joju and Joshua Galvez for the 2021 CSForGood Competition. The link to the github has been provided for people to study and/or for people to laugh at. Enjoy! <Paragraph><Link href={"https://github.com/Angle-Brackets/csforgood2021"}><GithubFilled/></Link></Paragraph></Typography>,
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
