import React from "react";
import "./SubCom.css";

function SubCom(props) {
  let content;
  if (props.mcq == "false") {
    content = (
      <div>
        <h1>{props.header}</h1>
        <p>{props.body}</p>
        <br />
        <p>إجابتك</p>
        <br />
        <textarea
          style={{
            width: "100%",
            height: "170px",
            borderRadius: "10px",
            border: "solid #f5f5f5",
            textAlign: "right",
            paddingTop: "5px",
          }}
          placeholder="...اكتب هنا
          "
        ></textarea>
      </div>
    );
  } else if (props.mcq == "true") {
    content = (
      <div>
        <h1>{props.header}</h1>
        <div style={{ marginTop: "10px" }}>
          <input
            type="radio"
            value="Lorem ipsum dolor sit amet"
            name={"option" + props.header}
            style={{ float: "right" }}
          />{" "}
          <p style={{ paddingRight: "50px" }}>Lorem ipsum dolor sit amet</p>
          <br></br>
          <input
            type="radio"
            value="Lorem ipsum dolor sit amet"
            name={"option" + props.header}
            style={{ float: "right" }}
          />{" "}
          <p style={{ paddingRight: "50px" }}>Lorem ipsum dolor sit amet</p>
          <br></br>
          <input
            type="radio"
            value=""
            style={{ float: "right" }}
            name={"option" + props.header}
          />{" "}
          <p style={{ paddingRight: "50px" }}>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    );
  }

  return <div className="sub">{content}</div>;
}

export default SubCom;
