import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from 'react-bootstrap';

function Main() {
  return (
    <div className='md-col-4'>
      <div className='carousel'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./img/slider1.jpg')}

            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./img/slider2.jpg')}

            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./img/slider3.jpg')}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./img/slider4.webp')}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./img/slider5.webp')}

            />


          </Carousel.Item>

        </Carousel>
      </div>
      <div>
        <Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
          <img  src={require("./img/p1.avif")} />
          <Card.Body>
            <Card.Title>
              K.G.F. CHAPTER 2
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img  src={require("./img/p2.avif")} />
          <Card.Body>
            <Card.Title>
            Docter Strange
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
          <img  src={require("./img/p3.avif")} />
          <Card.Body>
            <Card.Title>
             RRR
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img  src={require("./img/p4.avif")} />
          <Card.Body>
            <Card.Title>
             Fantastic Beats
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/p5.avif")} />
          <Card.Body>
            <Card.Title>
            BEAST
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div>
        <img className='board' src={require("./img/p6.avif")} />
      </div>

      <div className='div'>
        <h1 className='h1'>The Best Of Entertainment</h1>
      
      <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/newp1.avif")} />
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/newp2.avif")} />
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/newp3.avif")} />
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/newp4.avif")} />
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/newp5.avif")} />
        </Card>
      </div>

      <div className='div'>

        <h1 className='h1'>Events Happing Near You</h1>
        <Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
          <img  src={require("./img/s1.avif")} />
          <Card.Body>
            <Card.Title>
              Punit Paniya Live in Zoom
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img  src={require("./img/s2.avif")} />
          <Card.Body>
            <Card.Title>
            Magics Beans
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
          <img  src={require("./img/s3.avif")} />
          <Card.Body>
            <Card.Title>
             Jeeveshu Ahluwalia Live in Mumbai
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img  src={require("./img/s4.avif")} />
          <Card.Body>
            <Card.Title>
             Chembur Comedy Shuffle
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
          <img src={require("./img/s5.avif")} />
          <Card.Body>
            <Card.Title>
            SCC Skycinema-Travel Special
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div className='div'>

<h1 className='h1'>Online Streaming Events</h1>
<Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
  <img  src={require("./img/a1.avif")} />
  <Card.Body>
    <Card.Title>
    Floral Watercolour Cardmaking: Art workshop 
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/a2.avif")} />
  <Card.Body>
    <Card.Title>
    Digital Marketing & Communication
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
  <img  src={require("./img/a3.avif")} />
  <Card.Body>
    <Card.Title>
    Dreamcatcher Workshop by Rooftop App
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/a4.avif")} />
  <Card.Body>
    <Card.Title>
    Jaipur Blue Pottery Workshop by Rooftop App
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img src={require("./img/a5.avif")} />
  <Card.Body>
    <Card.Title>
    Executive PG Programme in Machine Learning & AI
    </Card.Title>
  </Card.Body>
</Card>
</div>

<div className='div'>

<h1 className='h1'>Outdoors Events</h1>
<Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
  <img  src={require("./img/z1.avif")} />
  <Card.Body>
    <Card.Title>
    Summertime At Prithvi
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/z2.avif")} />
  <Card.Body>
    <Card.Title>
    The Devil wears Bataa
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
  <img  src={require("./img/z3.avif")} />
  <Card.Body>
    <Card.Title>
    TATA IPL 2022 - KKR vs GT
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/z4.avif")} />
  <Card.Body>
    <Card.Title>
    Water Kingdom
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img src={require("./img/z5.avif")} />
  <Card.Body>
    <Card.Title>
    TATA IPL 2022 - PBKS vs CSK
    </Card.Title>
  </Card.Body>
</Card>
</div>

<div className='div'>

<h1 className='h1'>Laughter Therapy</h1>
<Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
  <img  src={require("./img/n1.avif")} />
  <Card.Body>
    <Card.Title>
    Samay Raina Live
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/n2.avif")} />
  <Card.Body>
    <Card.Title>
    Bas Kar Bassi Feat. Anubhav Singh Bassi
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
  <img  src={require("./img/n3.avif")} />
  <Card.Body>
    <Card.Title>
    TCC Bandra: Very Late Night Comedy
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/n4.avif")} />
  <Card.Body>
    <Card.Title>
    Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img src={require("./img/n5.avif")} />
  <Card.Body>
    <Card.Title>
    EXCUSE ME BROTHER by Aakash Gupta MUMBAI
    </Card.Title>
  </Card.Body>
</Card>
</div>

<div className='div'>

<h1 className='h1'>Popular Events</h1>
<Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
  <img  src={require("./img/s6.avif")} />
  <Card.Body>
    <Card.Title>
    Summertime At Prithvi
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/s7.avif")} />
  <Card.Body>
    <Card.Title>
    Supermoon Ft. Kalamkaar India 
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
  <img  src={require("./img/s8.avif")} />
  <Card.Body>
    <Card.Title>
    LP & RD with 35 Great Musicians
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/s9.avif")} />
  <Card.Body>
    <Card.Title>
    Romantic Melodies Of The Golden Era
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img src={require("./img/s10.avif")} />
  <Card.Body>
    <Card.Title>
    International Jazz Day
    </Card.Title>
  </Card.Body>
</Card>
</div>

<div className='div'>

<h1 className='h1'>The Latest Plays</h1>
<Card style={{ width: '13.5rem', float: 'left',margin:'18px',borderRadius:'20px'   }}>
  <img  src={require("./img/f1.avif")} />
  <Card.Body>
    <Card.Title>
    The Devil wears Bataa
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/f2.avif")} />
  <Card.Body>
    <Card.Title>
    Julius Caesar
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left' ,margin:'18px',borderRadius:'20px'  }}>
  <img  src={require("./img/f3.avif")} />
  <Card.Body>
    <Card.Title>
    Kaapus Kondyachi Goshta
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px'  }}>
  <img  src={require("./img/f4.avif")} />
  <Card.Body>
    <Card.Title>
    Moruchi Mavshi
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '13.5rem', float: 'left',margin:'18px', borderRadius:'20px', }}>
  <img src={require("./img/f5.avif")} />
  <Card.Body>
    <Card.Title>
    Tu Mhanshil Tasa
    </Card.Title>
  </Card.Body>
</Card>
</div>

    </div>
  )
}
export default Main;