import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App, Schedule, TestMenu } from './index'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* TOPメニュー */}
                <Route path="/" exact component={TestMenu} />
                {/* 検証用メニュー */}
                <Route path="/test" exact component={TestMenu} />
                {/* 運行予定 */}
                <Route path="/schedule" exact component={Schedule} />
                {/* 動作確認用 */}
                <Route path="/app" exact component={App} />
            </Switch>
        </BrowserRouter>
    );
}