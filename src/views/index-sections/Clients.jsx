import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import c1 from '../../assets/img/c1.png'
import c2 from '../../assets/img/c2.jpg'
import c3 from '../../assets/img/c3.jpg'

function Clients() {
    return (
<div className="section  clientsection" style={{ backgroundImage: `url(${require('assets/img/clients.jpg')})`,backgroundRepeat: "no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"40px" }}>
            <Container>
                <Row>
                <Col className="text-center  mb-md-5">                    <h2>Our Clients</h2>
                    </Col>
                    <Col className="mt-5 mt-md-0">
                    
            <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src={c1} height="100" width="120" alt="barricade protection agency" />
		</div>
		<div className="slide">
			<img loading="lazy" src="https://briskintegrated.com/wp-content/uploads/2020/03/brisk-logo-two.png" height="100" width="250" alt="brisk" />
		</div>
		<div className="slide">
			<img loading="lazy"  src="https://lh3.googleusercontent.com/p/AF1QipPs6OZVOglrTw4_rJdTWdJcUKS7zaFpq7PwSWE=s1360-w1360-h1020" height="100" width="200" alt="chegus infotech" />
		</div>
		<div className="slide">
			<img loading="lazy"  src="https://nocpl.esthenos.com/static/img/logo-icon.png" height="100" width="200" alt="esthenos" />
		</div>
		<div className="slide">
			<img loading="lazy"  src={c2} height="100" width="220" alt="paralok" />
		</div>
		
		<div className="slide">
        <img loading="lazy"  src={c3} height="100" width="200" alt="oasis" />
		</div>

        <div className="slide">
        <img loading="lazy"  src="https://www.primedtalent.com/Assets/Images/logo.png" height="80" width="200" alt="primed talent" />
		</div>

		<div className="slide">
			<img loading="lazy"  src={c1} height="100" width="120" alt="barricade protection agency" />
		</div>
		<div className="slide">
        <img loading="lazy"  src="https://briskintegrated.com/wp-content/uploads/2020/03/brisk-logo-two.png" height="100" width="250" alt="brisk" />
		</div>
		<div className="slide">
			<img loading="lazy"  src="https://lh3.googleusercontent.com/p/AF1QipPs6OZVOglrTw4_rJdTWdJcUKS7zaFpq7PwSWE=s1360-w1360-h1020" height="100" width="150" alt="chegus infotech" />
		</div>
		
        <div className="slide">
			<img loading="lazy"  src="https://nocpl.esthenos.com/static/img/logo-icon.png" height="100" width="250" alt="esthenos" />
		</div>
		<div className="slide">
			<img loading="lazy"  src={c2} height="100" width="220" alt="paralok" />
		</div>
		<div className="slide">
			<img loading="lazy"  src={c3} height="100" width="250" alt="oasis" />
		</div>
		<div className="slide">
			<img loading="lazy"  src="https://nocpl.esthenos.com/static/img/logo-icon.png" height="100" width="250" alt="primed talent" />
		</div>
	</div>
</div>
</Col>
</Row>




            </Container>
        </div>
    );
}

export default Clients;
