function Metrics() {  
      return (
        <div className="mt-12 bg-blue-900 rounded-xl">
          <div className="w-3/4 m-auto py-8">
            <h4 className="font-bold flex justify-end text-white cursor-pointer">Ver más</h4>
            <div className="flex justify-between items-center mt-8">
              <div className=" w-1/4 rounded-xl p-5">
                <h1 className="text-2xl font-bold text-white">Impacto</h1>
                <p className="mt-5 text-white">
                  Nos comprometemos a la transparencia con los emprendedores y el
                  ecosistema emprendedor en Latinoamérica alineándonos con los
                  Objetivos de Desarrollo Sostenible de las Naciones Unidas.
                </p>
              </div>
              <div className="w-1/2 flex">
                <div className="bg-white cursor-pointer rounded-xl m-4 p-3 transition-transform transform hover:scale-110">
                  <h1 className="text-2xl font-bold text-blue-900 text-center">2,300</h1>
                  <p className="text-blue-900 text-center">Emprendedores atendidos</p>
                </div>
                <div className="bg-white cursor-pointer rounded-xl m-4 p-3 transition-transform transform hover:scale-110">
                  <h1 className="text-2xl font-bold text-blue-900 text-center">329</h1>
                  <p className="text-blue-900 text-center">Catalizadores capacitados</p>
                </div>
                <div className="bg-white cursor-pointer rounded-xl m-4 p-3 transition-transform transform hover:scale-110">
                  <h1 className="text-2xl font-bold text-blue-900 text-center">23</h1>
                  <p className="text-blue-900 text-center">Países que tenemos incidencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
  export default Metrics