import React from "react";
import { Card, Button, CardTitle, CardText, CardImg } from "reactstrap";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function List(props) {
  let { data } = props.value;
  // let hits = data.hits

  return (
    <div className="list">
      {console.log(data)}
      {data.hits.map(data => (
        <div key={data.id}>
          <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            <CardTitle className="title">{data.tags}</CardTitle>
            <CardImg
              top
              width="100%"
              height="50%"
              src={data.largeImageURL}
              alt="Card image cap"
            />
            <CardText>
      <h4>Captured By: <span style={{color:"green"}}>{data.user}</span></h4>
                <div className="icon">
                <div className="like">
                <FontAwesomeIcon icon={faHeart} />
                {data.likes}
              </div>

              <div className="comments">
                <FontAwesomeIcon icon={faComment} />
                {data.comments}
              </div>

              <div className="downloads">
                <FontAwesomeIcon icon={faDownload} />
                {data.downloads}
              </div>
                </div>
              
            </CardText>
    
          </Card>
        </div>
      ))}
    </div>
  );
}

export default List;
