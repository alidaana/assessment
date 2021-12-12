import "./Main.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import SubCom from "./SubCom";
import tree from "../images/tree.jpg";

function Main() {
  return (
    <div className="main">
      <Header></Header>
      <Nav></Nav>
      <div className="item item1">
        <SubCom
          mcq="false"
          header=":السؤال الأول
          "
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ></SubCom>
        <SubCom
          mcq="true"
          header=":السؤال الثاني
          "
        ></SubCom>
        <SubCom
          mcq="true"
          header=":السؤال الثالث

          "
        ></SubCom>
      </div>
      <div className="item item2">
        <div style={{ textAlign: "right", width: "100%" }}>
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci
          elit. Mauris consequat risus sed convallis pulvinar. Suspendisse neque
          eros, tincidunt et sagittis sodales, molestie vel tortor. In sit amet
          fringilla nibh, vel aliquam elit. Vestibulum accumsan bibendum ex, eu
          tincidunt augue egestas sed.<br></br> <br></br> Donec convallis vel
          felis eget aliquet. Mauris congue, turpis at congue viverra, nisi
          neque commodo erat, sit amet rutrum lacus est sed urna. Donec aliquam
          leo in enim fringilla bibendum. Nullam nulla lorem, scelerisque sit
          amet rhoncus eu, dignissim scelerisque est. Vestibulum lacinia
          interdum porttitor. Integer suscipit velit sit amet lorem eleifend,
          eget posuere odio lacinia. Quisque augue tortor, accumsan eget
          vulputate eu, tristique in tortor. Proin nec molestie nunc. Sed quis
          quam eu enim vehicula venenatis.<br></br> <br></br> Praesent nec
          laoreet orci. Donec consequat ligula eget orci semper faucibus. Nunc
          commodo at mi in mollis. Phasellus pellentesque leo in nisl vestibulum
          lobortis. Phasellus sodales sapien ac dignissim viverra. In sodales,
          nulla eget sollicitudin eleifend, dui tortor vehicula elit, quis
          bibendum nunc metus eget diam. Phasellus rhoncus urna erat, ut laoreet
          nulla posuere id. Nulla facilisi. Pellentesque id risus vitae tortor
          egestas congue. Etiam in purus id nisl malesuada malesuada tristique
          eget enim. Mauris convallis laoreet ante, id maximus purus aliquet
          sed. Etiam non nibh at nisi ultricies ullamcorper. Nam sollicitudin
          aliquam nisi, ut maximus libero eleifend sit amet. Phasellus nisi
          orci, blandit quis tristique in, rhoncus a massa. Pellentesque
          ultrices in eros in suscipit. Curabitur nec diam id sapien ultrices
          auctor dignissim eu est. Aenean ac ex commodo, consequat risus
          volutpat, ornare turpis.
          <br></br> <br></br>
          Proin cursus ipsum metus, sit amet sodales ipsum dapibus ornare. Donec
          ultrices mauris in nisl bibendum venenatis. Aenean non ipsum quam. In
          sit amet orci sed lectus elementum faucibus. Curabitur mollis et felis
          ac porttitor. Pellentesque at erat at est pulvinar aliquam ultrices
          nec dolor. Curabitur semper venenatis condimentum. Donec non nulla ac
          mi posuere tempus. Nunc tempor nisi ex, vitae venenatis justo blandit
          quis. Duis vel interdum diam, eget laoreet sapien. Fusce eu
          scelerisque elit, vitae feugiat erat. Fusce et tellus at libero
          pulvinar interdum sit amet sit amet leo.<br></br> <br></br> In tempus
          placerat lorem eget pellentesque. Morbi in nunc erat. Nam eu risus ut
          tellus luctus eleifend sagittis quis lacus. Mauris quis elit et enim
          lobortis elementum. Nam hendrerit porttitor dolor ultrices
          consectetur. Praesent tempus dui nisi, sit amet malesuada eros
          imperdiet eget. Pellentesque in mi sit amet magna gravida pharetra a
          et nisi. Aenean metus lectus, fermentum at elit non, rhoncus imperdiet
          nibh. Sed finibus vestibulum condimentum.
        </p>
        <br></br>
        <img src={tree} width={"90%"} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;
