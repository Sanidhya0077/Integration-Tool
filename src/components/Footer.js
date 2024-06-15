import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col> &copy; {new Date().getFullYear()} LTIMindtree Limited</Col>
        </Row>
        <Row style={{ marginTop: "2%" }}>
          LTIMindtree is a global technology consulting and digital solutions
          company that enables enterprises across industries to reimagine
          business models, accelerate innovation, and maximize growth by
          harnessing digital technologies. As a digital transformation partner
          to more than 700 clients, LTIMindtree brings extensive domain and
          technology expertise to help drive superior competitive
          differentiation, customer experiences, and business outcomes in a
          converging world. Powered by 81,000+ talented and entrepreneurial
          professionals across more than 30 countries, LTIMindtree — a Larsen &
          Toubro Group company — combines the industry-acclaimed str engths of
          erstwhile Larsen and Toubro Infotech and Mindtree in solving the most
          complex business challenges and delivering transformation at scale.
          For more information, please visit
          <a href="https://www.ltimindtree.com">https://www.ltimindtree.com/</a>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
