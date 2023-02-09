import { Carousel, Image } from 'react-bootstrap';

function ImgCarousel(){
    // const images=["../images/image1.png","../images/image2.png","../images/image3.png"]
    return (
        <div className='carousel'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tutorops.com/images/online-course-17.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/max/1400/1*g3ARV1u4v9b9AKEIyPB7zw.jpegres.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9bolder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* </Carousel.Caption> */} */
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5PuXVVPIT6lQf0gR4ZLyj39P7YO_zoxOBg&usqp=CAU"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default ImgCarousel;