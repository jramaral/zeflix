import React, { useEffect, useState } from "react";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";

import { Zoom } from "react-preloaders";

export default function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriaComVideos) => {
        console.log(categoriaComVideos);

        setLoading(false);

        setDadosIniciais(categoriaComVideos);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message());
      });
  }, []);
  // http://localhost:8080/categorias?_embed=videos
  return (
    <PageDefault paddingAll={0}>
      <div>
        <Zoom customLoading={loading} background="#20295F" color={"#E67A14"} />
        {/* Carregando... */}
      </div>

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Covil do Demônio Adormecido"
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}
