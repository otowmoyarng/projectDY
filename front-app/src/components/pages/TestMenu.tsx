import { Link } from "react-router-dom";

export default function TestMenu() {
    return (
        <div>
            <p>検証用メニュー</p>
            <ul>
                {/* 動作確認用 */}
                <li>
                    <Link to="App">App.tsxへ</Link>
                </li>
            </ul>
        </div>

    );
}