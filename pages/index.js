import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';


const Index = (props) => (
  <Layout>
    <div>
      <h1 >Bitcoin Status</h1>
      <p style={{color:"black", fontWeight:'bold', padding:"0.3rem", textTransform:"uppercase"}}>current scenario</p>
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;