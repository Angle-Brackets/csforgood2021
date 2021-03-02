import { Layout, Typography, Button } from 'antd'
import Infobox from './Infobox'


const {Header} = Layout;

const SiteHeader = () => {
    return (
        <Layout style={{lineHeight: "40px"}}>
            <Header style={{backgroundColor: "transparent", fontSize: "1.25rem", fontWeight: "bold"}}>
                <img src="/images/logo.png" style={{height: "40px", float: "left", marginRight: "5px"}}/>
                <text style={{color: "white"}}>Majors Ranked</text>

                <Infobox/>
            </Header>
        </Layout>
    );
}

export default SiteHeader;