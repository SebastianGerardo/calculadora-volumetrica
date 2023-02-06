import { useState } from "react";
import { Dialog, Button, Modal, DialogContent } from "@mui/material";

const ChargeDimensions = () => {
  const [form, setForm] = useState({tipoMedida: false,});

  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultado = document.querySelector("#resultado");

    const map = {
        "20'": 32,
        "40'": 66,
        "40'HQ": 76,
        "40'NOR": 48,
      };

    if (form.length > 2 && form.width > 2 && form.height > 2) {
        const mm = (form.length / 1000) * (form.width / 1000) * (form.height / 1000);
    
        resultado.textContent = `La cantidad máxima que puedes importar en un contenedor de 20' es de ${
          map[form.tipoMedida] / mm
        } cajas`;

    }  else {
        alert('ingrese los valores correspondientes')
    }

    if (form.tipoMedida === false) {
        alert('Escoga el tipo de contenedor')
        resultado.textContent = ""
    }

  };

  const containerType = {
    "20'": "https://www.searates.com/design/images/apps/load-calculator/20st.svg",
    "40'": "https://www.searates.com/design/images/apps/load-calculator/40st.svg",
    "40'HQ":
      "https://www.searates.com/design/images/apps/load-calculator/40hq.svg",
    "40'NOR":
      "https://www.searates.com/design/images/apps/load-calculator/40ref.svg",
  };

  return (
    <section className="box-father">
      <button onClick={() => setModal(!modal)} className="open-modal">Abrir Calculadora</button>
      <div className={`boxmodal ${modal && "activemodal"}`}></div>
      <section className={`formulario ${modal && "activeformulario"}`}>
        <div onClick={() => setModal(!modal)} className="close">
          X
        </div>
        <div className="form-img">
          <img src={containerType[form.tipoMedida] ? containerType[form.tipoMedida] : `https://cdn-icons-png.flaticon.com/512/2298/2298239.png` } alt="" />
        </div>
        <form className="formulario__box">
          <div className="box">
            <select
              required
              className="select"
              name="tipoMedida"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="">Tipo de contenedor</option>
              <option value="20'">20'</option>
              <option value="40'">40'</option>
              <option value="40'HQ">40'HQ</option>
              <option value="40'NOR">40'NOR</option>
            </select>
            <div className="textField textField__input-name">
              <h1 className="ctn-box ctn-box_title" htmlFor="productName">
                Tipo de Contenedor
              </h1>
              <h1
                className="ctn-box">
                    {form.tipoMedida ? form.tipoMedida : `Selecciona...`}
                </h1>
            </div>
          </div>
          <div className="box">
            <div className="textField">
              <label className="ctn-box" htmlFor="length">
              Longitud
              </label>
              <div className="input-mm">
                <input
                  placeholder="1000"
                  className="ctn-box ctn-box__input"
                  id="length"
                  name="length"
                  type="number"
                  value={form.length}
                  onChange={handleChange}
                />
                <p className="mm">mm</p>
              </div>
            </div>
            <div className="textField">
              <label className="ctn-box" htmlFor="width">
                Ancho
              </label>
              <div className="input-mm">
                <input
                  placeholder="2000"
                  className="ctn-box ctn-box__input"
                  id="width"
                  name="width"
                  type="number"
                  value={form.width}
                  onChange={handleChange}
                />
                <p className="mm">mm</p>
              </div>
              
            </div>
            <div className="textField">
              <label className="ctn-box" htmlFor="height">
                Altura
              </label>
              <div className="input-mm">
              <input
                placeholder="1000"
                className="ctn-box ctn-box__input"
                id="height"
                name="height"
                type="number"
                value={form.height}
                onChange={handleChange}
              />
              <p className="mm">mm</p>
              </div>
            </div>
          </div>
          <div className="textField btn-box">
            <input type="submit" className="btn-box_submit" value="Resultado" onClick={handleSubmit} />
          </div>
        </form>
        <p id="resultado">
        </p>
      </section>
    </section>
  );
};

export default ChargeDimensions;
