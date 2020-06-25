import React from "react";

import "./BiografiaPnys.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class BiografiaPnys extends React.Component {
  constructor(props, context) {
    super(props);
  }

  state = {
    show: false,
    elmento: "",
    imagen: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  showModal = (e, imagenes) => {
    this.setState({
      show: true,
      elmento: e,
      imagen: imagenes,
    });
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

  render() {
    const detalles = this.props.location.state.ALL;
    const arrayponys = this.props.location.state.todo;
    const fondopersonaje = {
      backgroundImage: "url(" + process.env.PUBLIC_URL + detalles.fondo + ")",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      color: "black",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundColor: "black",

    };

    return (
      <div   style={({ width: "100%" }, fondopersonaje)}>
        {/*
        <Row >
          <div className="BioNavbarPonys">
      
          {arrayponys.FotosPersonajePonys[0].Foto2.map((imagenes, index) => (
            <img
              key={index}
              className="BioimgPonysSelect"
              src={process.env.PUBLIC_URL + imagenes}
            />
          ))}
          </div>
          
        </Row>
         */}
        <div  className="BioDivTotalPonys" >
      
          <h1 className="BioNombrePonys"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyPonys">
            <div className="DivIconPonys">
            <FontAwesomeIcon
              className="iconoPonys"
              icon={faArrowLeft}
              onClick={this.props.history.goBack}
            />
          </div>
              <Col className="col-md-4">
            
                <img
                  className="BioImgPonys"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto3}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-4  BIOCentrarColDivPonys">
                <h1 className="BiotituloPonys"> Biografia</h1>
                <h6 className="BioDesPonys"> {detalles.Descripcion}</h6>
              </Col>
            </Row>
            <Row className="BioImgyBioPonys">
              <h1 className="BIOtitulocombosPonys"> Combos</h1>
            </Row>
            <div className="derechaPnys">
            <ResponsivePlayer className="video" url={detalles.Combos} />
            </div>
            <div className="izqPnys">
            <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaPnys);
