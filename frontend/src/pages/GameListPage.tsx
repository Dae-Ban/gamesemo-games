import GameList from "../components/GameList";

const GameListPage = () => {
    return (
        <div className="container">
            <h2>게임 목록</h2>
            <hr/>
            <GameList/>
        </div>
    );
};

export default GameListPage;