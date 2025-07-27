import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { useNavigate } from 'react-router-dom';
import { setState, setPlatform, setSort } from '../store/gameSlice';

const GameSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { state, platform, sort } = useSelector((state: RootState) => state.gameFilter);

    const handleChange = (newState = state, newPlatform = platform, newSort = sort) => {
        navigate(`/game?state=${newState}&platform=${newPlatform}&sort=${newSort}`);
    };

    return (
        <aside className="sidebar">
            {/* 정렬 옵션 */}
            <div id='sorting'>
                <select
                    value={sort}
                    onChange={(e) => {
                        const newSort = e.target.value;
                        dispatch(setSort(newSort));
                        handleChange(undefined, undefined, newSort);
                    }}
                >
                    <option value="rateDesc">높은 할인율</option>
                    <option value="priceAsc">낮은 가격</option>
                    <option value="priceDesc">높은 가격</option>
                </select>
            </div>

            {/* 상태 필터 */}
            <div className="filter-group">
                {['dc', 'new', 'free'].map((value) => (
                    <label key={value}>
                        <input
                            type="radio"
                            name="state"
                            value={value}
                            checked={state === value}
                            onChange={() => {
                                dispatch(setState(value));
                                handleChange(value);
                            }}
                        />
                        {value === 'dc' ? '할인 중' : value === 'new' ? '신규 출시' : '무료'}
                    </label>
                ))}
            </div>

            {/* 플랫폼 필터 */}
            <div className="filter-group">
                {[
                    ['all', '모두'],
                    ['steam', '스팀'],
                    ['direct', '다이렉트 게임즈'],
                    ['planet', '게임스플래닛'],
                    ['nintendo', '닌텐도']
                ].map(([value, label]) => (
                    <label key={value}>
                        <input
                            type="radio"
                            name="platform"
                            value={value}
                            checked={platform === value}
                            onChange={() => {
                                dispatch(setPlatform(value));
                                handleChange(undefined, value);
                            }}
                        />
                        {label}
                    </label>
                ))}
            </div>
            <button id="scrollToTopBtn" className="btn-wide">▲ 맨 위로</button>
        </aside>
    );
}

export default GameSidebar;