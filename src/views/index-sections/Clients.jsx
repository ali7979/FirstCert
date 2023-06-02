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
                <Col className="text-center  mb-md-5">                    <h1>Our Clients</h1>
                    </Col>
                    <Col className="mt-5 mt-md-0">
                    
            <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={c1} height="100" width="120" alt="" />
		</div>
		<div class="slide">
			<img src="https://briskintegrated.com/wp-content/uploads/2020/03/brisk-logo-two.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://lh3.googleusercontent.com/p/AF1QipPs6OZVOglrTw4_rJdTWdJcUKS7zaFpq7PwSWE=s1360-w1360-h1020" height="100" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://nocpl.esthenos.com/static/img/logo-icon.png" height="100" width="200" alt="" />
		</div>
		<div class="slide">
			<img src={c2} height="100" width="220" alt="" />
		</div>
		
		<div class="slide">
        <img src={c3} height="100" width="200" alt="" />
		</div>

        <div class="slide">
        <img src="https://www.primedtalent.com/Assets/Images/logo.png" height="80" width="200" alt="" />
		</div>

		<div class="slide">
			<img src={c1} height="100" width="120" alt="" />
		</div>
		<div class="slide">
        <img src="https://briskintegrated.com/wp-content/uploads/2020/03/brisk-logo-two.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://lh3.googleusercontent.com/p/AF1QipPs6OZVOglrTw4_rJdTWdJcUKS7zaFpq7PwSWE=s1360-w1360-h1020" height="100" width="150" alt="" />
		</div>
		
        <div class="slide">
			<img src="https://nocpl.esthenos.com/static/img/logo-icon.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={c2} height="100" width="220" alt="" />
		</div>
		<div class="slide">
			<img src={c3} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://nocpl.esthenos.com/static/img/logo-icon.png" height="100" width="250" alt="" />
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
