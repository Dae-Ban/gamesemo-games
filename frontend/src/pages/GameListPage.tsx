import GameList from "../components/GameList";
import "../styles/gamePageStyle";

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
            <aside>
                
            </aside>
        </div>
    );
};

export default GameListPage;