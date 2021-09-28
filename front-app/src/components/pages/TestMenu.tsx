import { Link } from "react-router-dom";

export default function TestMenu() {
    return (
        <div>
            <p>検証用メニュー</p>
            <ul>
                {/* 運行予定 */}
                <li>
                    <Link to="Schedule">Schedule.tsxへ</Link>
                </li>
                {/* 動作確認用 */}
                <li>
                    <Link to="App">App.tsxへ</Link>
                </li>
            </ul>
        </div>

    );
}