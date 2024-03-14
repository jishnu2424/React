import React, { useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import "../Styles/building.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





function Building() {
  const [first, setfirst] = useState([
    {
      name: "TRUE CONSTRUCTION",
      place:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximdolorum asperiores.",
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "OUR DREAM HOUSE",
      place:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximdolorum asperiores.",
      img:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "ALWAYS DEDICATION",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximdolorum asperiores.",
      img:"https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [second, setsecond] = useState([
    {
      name: "Building Making",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Building Making",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:"https://images.pexels.com/photos/443378/pexels-photo-443378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Building Making",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:"https://images.pexels.com/photos/410696/pexels-photo-410696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Building Making",
        place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
        img:"https://images.pexels.com/photos/344328/pexels-photo-344328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }
  ]);
  const [team, setteam] = useState([
    {
      name: "LOKI",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:  "https://i.pinimg.com/736x/f3/44/7d/f3447d02a135cf0b6940d0c7eb5d59f2.jpg",
    },
    {
      name: "IRON MAN",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img: "https://i.pinimg.com/564x/17/27/ea/1727ea519d60739d4d692e429d30e7f0.jpg",
    },
    {
      name: "THOR",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:"https://i.pinimg.com/564x/e0/9d/b1/e09db1fbc6d5b361e2145bd20db04a86.jpg",
    },
    {
        name: "HULK",
        place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
        img:"https://i.pinimg.com/564x/5e/4d/2a/5e4d2af0aed0793da8475dfff3f96f29.jpg",
      }
  ]);
  const [service, setservice] = useState([
    {
      name: "Contract",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:  "https://i.pinimg.com/564x/4c/41/86/4c41867092d2ed2d07b3a062bd191c18.jpg",
    },
    {
      name: "Update",
      place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
      img:"https://i.pinimg.com/564x/dd/43/e2/dd43e2516ce1a9f1edba03920b7a6df6.jpg",
    },
    {
        name: "Remake",
        place: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enimaccusantium officia quaerat at, quae molestiae itaque! Veritatis maximedolorum asperiores.",
        img:"https://i.pinimg.com/564x/fd/30/19/fd3019956da836dd55acad05810359b9.jpg",
      }
  ]);
  const [last, setlast] = useState([
    {
     img: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:"https://images.pexels.com/photos/1629184/pexels-photo-1629184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
     img:"https://images.pexels.com/photos/1649658/pexels-photo-1649658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);


  return (
    <div>
      <Carousel>
        {first.map((item) => (
          <Carousel.Item>
            <img className="imge" src={item.img} />
            <Carousel.Caption>
              <h3 className="carsoielh">{item.name}</h3>
              <p className="pc">{item.place}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <section>
        <img
          className="imgs"
          src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h4 className="hs">Lorem ipsum dolor sit amet</h4>
        <p className="ps">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Nisi
          odit, mollitia consequatur officiis rem libero et aut dolores corporis{" "}
          <br />
          commodi ipsa quod amet eveniet iure odio voluptatibus fugit ipsum
          rerum!
        </p>
      </section>
      <h1>OUR PROJECTS</h1>
      <section className="cardd">
        {second.map((cad) => (
          <>
            <Card style={{ width: "18rem" }} className="cards">
              <Card.Img variant="top" src={cad.img} />
              <Card.Body>
                <Card.Title>{cad.name}</Card.Title>
                <Card.Text>{cad.place}</Card.Text>
                <Button style={{marginLeft:'60px'}} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </>
        ))}
      </section>

      <h1>OUR TEAM</h1>
      <section className="ourteam">
      {team.map((cad) => (
          <>
            <Card style={{ width: "18rem" ,backgroundColor:"aliceblue"}} className="cards">
              <Card.Img variant="top" className="team" src={cad.img} />
              <Card.Body>
                <Card.Title className="name">{cad.name}</Card.Title>
                <Card.Text className="contents">{cad.place}</Card.Text>
                <div className="icon">
                <a  href="#"><FaInstagram /></a>
                    <a  href="##"><FaWhatsapp /></a>
                    <a  href="#"><FaFacebook /></a>
                    <a  href="##"><FaXTwitter /></a>
                </div>
              </Card.Body>
            </Card>
          </>
        ))}
      </section>
      <section>
        <h1>CONTACT US</h1>
        <h5>Name</h5>
        <input className="box" placeholder="name" type="text" />
        <h5>Details</h5>
        <input className="box" placeholder="details" type="text" />
        <h5>Phone Number</h5>
        <input className="box" placeholder="number" type="phone" />
        <Button style={{position:"absolute", left:'240px', top:'2820px'}} variant="primary">SUBMIT</Button>
      </section>
      <h1>OUR SERIVCE</h1>
      <section className="service">
        {service.map((cad) => (
          <>
            <Card style={{ width: "18rem" ,backgroundColor:"black"}} className="cards">
              <Card.Img variant="top" className="team" src={cad.img} />
              <Card.Body>
                <Card.Title className="serv1">{cad.name}</Card.Title>
                <Card.Text className="serv2">{cad.place}</Card.Text>
                <div className="icon">
                    <a href="#"><FaInstagram /></a>
                    <a href="##"><FaWhatsapp /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="##"><FaXTwitter /></a>           
                </div>
              </Card.Body>
            </Card>
          </>
        ))}
      </section>
      <h1></h1>
      <section>
      <Carousel>
        {last.map((item) => (
          <Carousel.Item>
            <img className="imge" src={item.img} />
          </Carousel.Item>
        ))}
      </Carousel>
      </section>
      <section className="footer">
      <img className="fimg" src="https://i.pinimg.com/564x/50/a2/ff/50a2ffdfa1f6851d264c1acca452fca6.jpg" alt="" />
            <h6>A B C Buildings</h6>
            <p className="footeradd">John Doe <br /> 123  Main Street, Apt 1  Cityville,<br /> State 12345</p>
                    <a className="ff" href="#"><FaInstagram /></a>
                    <a className="ff" href="##"><FaWhatsapp /></a>
                    <a className="ff" href="#"><FaFacebook /></a>
                    <a className="ff" href="##"><FaXTwitter /></a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15651.810972490395!2d75.7793436!3d11.2648842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ec97483c521%3A0x897b1662e5074c01!2sFutura%20Labs!5e0!3m2!1sen!2sin!4v1708935303641!5m2!1sen!2sin" style={{ width:"300px",height:"300px"}} ></iframe>
      </section>
    </div>
  );
}

export default Building;
