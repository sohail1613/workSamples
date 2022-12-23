import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div>
        <title>Resposive Section</title>
        <section className="services">
          <div className="services__box">
            <figure className="services__icon" style={{ "--i": "#fff" }}>
              <ion-icon name="color-palette-outline" />
            </figure>
            <div className="services__content">
              <h2 className="services__title">Design</h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ipsum nemo. Vel consequuntur ratione laborum.
              </p>
            </div>
          </div>
          <div className="services__box">
            <figure className="services__icon" style={{ "--i": "#fff" }}>
              <ion-icon name="code-slash-outline" />
            </figure>
            <div className="services__content">
              <h2 className="services__title">Desenvolvimento Front-End</h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ipsum nemo. Vel consequuntur ratione laborum.
              </p>
            </div>
          </div>
          <div className="services__box">
            <figure className="services__icon" style={{ "--i": "#fff" }}>
              <ion-icon name="search-outline" />
            </figure>
            <div className="services__content">
              <h2 className="services__title">SEO</h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ipsum nemo. Vel consequuntur ratione laborum.
              </p>
            </div>
          </div>
          <div className="services__box">
            <figure className="services__icon" style={{ "--i": "#fff" }}>
              <ion-icon name="bar-chart-outline" />
            </figure>
            <div className="services__content">
              <h2 className="services__title">Marketing Digital</h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ipsum nemo. Vel consequuntur ratione laborum.
              </p>
            </div>
          </div>
          <div className="services__box">
            <figure className="services__icon" style={{ "--i": "#fff" }}>
              <ion-icon name="videocam-outline" />
            </figure>
            <div className="services__content">
              <h2 className="services__title">Edição de Vídeos</h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ipsum nemo. Vel consequuntur ratione laborum.
              </p>
            </div>
          </div>
          <div className="services__box">
            <figure className="services__icon" style={{ "--i": "#fff" }}>
              <ion-icon name="game-controller-outline" />
            </figure>
            <div className="services__content">
              <h2 className="services__title">Desenvolvimento de Jogos</h2>
              <p className="services__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ipsum nemo. Vel consequuntur ratione laborum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
