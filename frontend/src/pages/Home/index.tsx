import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-8 text-primary d-flex justify-content-center">Gestão de Vendas</h1>
                    <p className="lead d-flex justify-content-center">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p className="d-flex justify-content-center">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>

                </div>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-warning" to="/dashboard">
                        Acessar o Dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;