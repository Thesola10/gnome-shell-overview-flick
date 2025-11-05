import St from 'gi://St';
import Shell from 'gi://Shell';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class OverviewFlickExtension extends Extension
{
    callback() {
        Main.overview.show();
    }

    enable() {
        this.gesture = new Shell.EdgeDragGesture({side: St.Side.RIGHT});
        this._gevent = this.gesture.connect('activated', this.callback.bind(this));
        global.stage.add_action(this.gesture);
    }

    disable() {
        global.stage.remove_action(this.gesture);
        if (this._gevent) {
            this.gesture.disconnect(this._gevent);
            this._gevent = null;
        }
        this.gesture = null;
    }
}
