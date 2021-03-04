import { Layout, Typography, Button } from 'antd'
import Infobox from './Infobox'


const {Header} = Layout;

const SiteHeader = () => {
    return (
        <Layout style={{background: "linear-gradient(#00000047, transparent)", lineHeight: "6vh", position: "absolute", width: "100vw", zIndex: "100", paddingBottom:"2vh", backDropFilter: "blur(2px)"}}>
            <Header style={{fontSize: "1.25rem", fontWeight: "bold"}}>
                <img src="/images/logo.png" style={{height: "3vh", float: "left", margin: "1.5vh", filter: "brightness(10)"}}/>
                <span style={{color: "white"}}>Majors Ranked</span>

                <Infobox/>
            </Header>
        </Layout>
    );
}

export default SiteHeader;
