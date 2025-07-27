import GameList from "../components/GameList";
import GameSidebar from "../components/GameSidebar";
import "../styles/gamePageStyle.css";

const GameListPage = () => {
    return (
        <div className="container">
            <h2>게임 목록</h2>
            <hr/>
            <main>
                <table>
                    <GameList/>
                </table>
            </main>
            <GameSidebar/>
        </div>
    );
};

export default GameListPage;