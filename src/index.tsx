import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}

@observer
class TimerView extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {appState.timer}
                </button>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
         appState.resetTimer();
     }
};

const appState = new AppState();
ReactDOM.render(<TimerView />, document.getElementById('root'));
