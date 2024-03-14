import React from 'react'
import { Button, Card, Carousel, Nav, Navbar, Tab, Tabs } from 'react-bootstrap'
import'../Styles/bott.css'

function Bootstrap1() {
  return (
    <div>
        <section>
        <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand href="#home"><img src="https://i.pinimg.com/564x/b1/2b/87/b12b87146d193c789eb0ca9ae90a5d4a.jpg" alt="" className='logo' /></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#features">DESIGNER NAME </Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
      </Navbar>
     </section>


     <section className='cd'>
     <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
      <section className='clas'>

<div className="row">
    <div className="col col3"></div>
    <div className="col col3"> <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://www.faber-castell.com/-/media/Faber-Castell-new/special-pages/black-ediiton-cool/portrait-teaser-black-edition.ashx?rx=0&ry=0&rw=1140&rh=1520&mw=656&hash=3B6E0556578145EAA272347833FF4647" />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card></div>

<div className="col col3"> <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://www.faber-castell.com/-/media/Faber-Castell-new/special-pages/goldfaber-dual-marker/portrait-teaser-goldfaber-aqua-dual-marker.ashx?rx=0&ry=0&rw=1140&rh=1520&mw=656&hash=E31B3CC7A594D0250C36A24D48352455" />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card></div>

<div className="col col3"> <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://www.faber-castell.com/-/media/Faber-Castell-new/special-pages/black-ediiton-cool/portrait-teaser-black-edition.ashx?rx=0&ry=0&rw=1140&rh=1520&mw=656&hash=3B6E0556578145EAA272347833FF4647" />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card></div>
<div className="col col3"></div>
</div>
</section>

<section className='content'>
<h1 className='hh1'>Lorem ipsum dolor sit amet.</h1>
<h4 className='hh4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
<p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati sed, mollitia ipsa in officia voluptatum quidem asperiores fuga rerum? Iure nobis dolor aspernatur numquam similique ad omnis. Perferendis, a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi voluptates quas explicabo dolore rerum numquam id molestiae enim debitis, dolores repellat aspernatur libero porro ipsam. Quam, enim error? Quas unde ipsa nihil quaerat nam doloremque, totam aspernatur eius odio dolore recusandae? Voluptatibus odio accusantium accusamus ullam reprehenderit ab dicta.</p>
</section>

<section>
<Carousel>
<Carousel.Item interval={1000}>
<img src="https://images.pexels.com/photos/14969442/pexels-photo-14969442/free-photo-of-abstract-colorful-painting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='im' alt="" />    
<Carousel.Caption>
  <h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
<img src="https://images.pexels.com/photos/1476505/pexels-photo-1476505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='im' alt="" />  
<Carousel.Caption>
  <h3 className='qw'>Second slide label</h3>
  <p className='qw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="https://images.pexels.com/photos/1307114/pexels-photo-1307114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='im' alt="" />  
<Carousel.Caption>
  <h3>Third slide label</h3>
  <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  </p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</section>

<section>
<div className="row">
    <div className="col col-6"> <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla inventore illum, earum nihil veritatis magnam libero!</h2></div>
    <div className="col col-6"> <img src="https://images.pexels.com/photos/6273445/pexels-photo-6273445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='pen' alt="" /></div>
</div>
<br /><br />
</section>

<section className='foot'>

  <h4 className='h4f'>footer</h4>
  <p className='abme'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat omnis, eos sunt veritatis mollitia ab sit similique nobis, vel possimus velit a nihil facilis. Eveniet recusandae deleniti optio facere voluptates, sint quasi unde dolores est libero neque excepturi repudiandae nulla saepe doloribus id omnis dolore voluptas consequuntur magnam officiis.</p>

</section>

      </Tab>
      <Tab eventKey="profile" title="Works">

      <section>
<Carousel>
<Carousel.Item interval={1000}>
<img src="https://images.pexels.com/photos/14969442/pexels-photo-14969442/free-photo-of-abstract-colorful-painting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='im' alt="" />    
<Carousel.Caption>
  <h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
<img src="https://images.pexels.com/photos/1476505/pexels-photo-1476505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='im' alt="" />  
<Carousel.Caption>
  <h3 className='qw'>Second slide label</h3>
  <p className='qw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="https://images.pexels.com/photos/1307114/pexels-photo-1307114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='im' alt="" />  
<Carousel.Caption>
  <h3>Third slide label</h3>
  <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  </p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</section>
<section className='pop'>
<img src="https://i.pinimg.com/236x/18/97/2b/18972b6b1a5b737650165f75ee3b2aa1.jpg" className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/5d/be/f5/5dbef512caf59860ffd19ccec3adf504.jpg"className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/2835170/pexels-photo-2835170.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/c1/a3/68/c1a368f269c113be07b5aa66dd3f8cab.jpg"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/1467475/pexels-photo-1467475.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/5d/be/f5/5dbef512caf59860ffd19ccec3adf504.jpg"className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg"className='popi' alt=""/>
    <img src="https://images.pexels.com/photos/3586761/pexels-photo-3586761.jpeg?auto=compress&cs=tinysrgb&w=600"className='popi' alt=""/>
    <img src="https://i.pinimg.com/236x/c1/a3/68/c1a368f269c113be07b5aa66dd3f8cab.jpg"className='popi' alt=""/>
</section>







      </Tab>
    </Tabs>

</section>
     






    </div>



  )
}

export default Bootstrap1