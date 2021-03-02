import { Layout, Typography } from 'antd'

const {Header} = Layout;

const SiteHeader = () => {
    return (
        <Layout style={{lineHeight: "40px"}}>
            <Header style={{backgroundColor: "white", fontSize: "1.25rem", fontWeight: "bold", borderBottom: "1px solid rgba(0,0,0,0.1)", height: "40px"}}>
                <img src="/images/logo.png" style={{height: "40px", float: "left", marginRight: "5px"}}/>
                <text>Majors Ranked</text>
            </Header>
        </Layout>
    );


}

export default SiteHeader;