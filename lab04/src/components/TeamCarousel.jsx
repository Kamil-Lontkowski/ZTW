import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import bruceImg from "../assets/images/bruce.jpg";
import jasonImg from "../assets/images/jason.jpg";
import broke from "../assets/images/brooke.jpg";

const team_members = [
  {
    id: 1,
    name: "Bruce Smith",
    motto: "lorem ipsum",
    imageUrl: bruceImg,
  },
  {
    id: 2,
    name: "Jason Smith",
    motto: "lorem ipsum",
    imageUrl: jasonImg,
  },
  {
    id: 3,
    name: "Anna Smith",
    motto: "lorem ipsum",
    imageUrl: broke,
  },
];

export default function TeamCarousel() {
  const carouselItems = team_members.map((member, index) => {
    let carouselItemClasses = "";
    if (index == 0) carouselItemClasses += " active";
    return (
      <MDBCarouselItem className={carouselItemClasses} key={member.id}>
        <MDBCarouselElement src={member.imageUrl} alt="..." />
        <MDBCarouselCaption>
          <h3>{member.name}</h3>
          <p>{member.motto}</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    );
  });

  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>{carouselItems}</MDBCarouselInner>
    </MDBCarousel>
  );
}
