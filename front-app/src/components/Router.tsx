import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import TestMenu from './pages/TestMenu';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* TOPメニュー */}
                <Route path="/" exact component={TestMenu} />
                {/* 検証用メニュー */}
                <Route path="/test" exact component={TestMenu} />
                {/* 動作確認用 */}
                <Route path="/app" exact component={App} />
            </Switch>
        </BrowserRouter>
    );
}