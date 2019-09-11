import React, { Component } from 'react';
import './App.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const items = [
  {
    src: require("../images/JAPON.jpg" )
  },
  {
    src: require("../images/FAIRMONT_DUBAI.png" )
  },
  {
    src: require("../images/LAGUNA_BEACH.png" )
  }
];

class TravelCard extends Component {
     constructor(props) {
       
    super(props);
    var arr = [];
for(let i=1; i<=this.props.data.rating[0]; i++) {
   arr.push(i.toString());
}
    this.state = { activeIndex: 0,
     rating: arr};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }


onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }





  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{width: '100%',height: 200,objectFit: 'cover'}}/>
         
        </CarouselItem>
      );
    });
// // <img src={require("../images/JAPON.jpg" )} style={{width: '100%'}} alt="Dubai"/>


    return (
       
            <div className="col-md-4" style={{marginBottom: 15}}>
                <div className="card" >
                  
                   <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
                    <p style={{textAlign: 'right',marginTop: '-40px',color: '#FFF',fontWeight: 'bold',marginRight: 5,position: 'relative'}}>{this.props.data.upto}</p>
                    <div>
                    <div className="CardDetails">
                     <p style={{textAlign: 'left',margin: 10}}><b style={{fontFamily: 'SevenOneEight-Medium'}}>{this.props.data.country}</b> - <span style={{fontFamily : 'SevenOneEight-Light'}}>{this.props.data.place}</span></p>
                     <p style={{textAlign: 'left',marginLeft: 10, fontFamily : 'SevenOneEight-Light'}}>{this.props.data.label}{this.state.rating.map(elem => '★')}</p>
                     <ul className="tagsList">
                         {this.props.data.tags.map(item => <li className={item.classname}>{item.label}</li>)}
                         
                    </ul>
                    </div>
                    <div className="CardBtn">
                        <a href="#">></a>
                    </div>
                    </div>


                </div>
                </div>
             
    );
  }
}

export default TravelCard;
